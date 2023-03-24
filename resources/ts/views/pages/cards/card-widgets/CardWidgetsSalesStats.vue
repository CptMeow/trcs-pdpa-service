<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useDisplay, useTheme } from 'vuetify'
import arrowStar from '@images/cards/arrow-star.png'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()
const vuetifyDisplay = useDisplay()
const series = [75]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  const disabledTextColor = `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['disabled-opacity']})`
  const primaryTextColor = `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['high-emphasis-opacity']})`

  return {
    chart: {
      sparkline: { enabled: true },
    },
    labels: ['Sales'],
    stroke: { lineCap: 'round' },
    colors: [`rgba(${hexToRgb(String(currentTheme.success))}, 1)`],
    states: {
      hover: {
        filter: { type: 'none' },
      },
      active: {
        filter: { type: 'none' },
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '73%',
          imageWidth: 72,
          imageHeight: 53,
          imageOffsetY: -40,
          imageClipped: false,
          image: arrowStar,
        },
        track: {
          strokeWidth: '45px',
          background: `rgba(${hexToRgb(String(currentTheme['grey-100']))}, 1)`,
        },
        dataLabels: {
          name: {
            offsetY: 50,
            color: disabledTextColor,
          },
          value: {
            offsetY: 10,
            fontWeight: 500,
            fontSize: '32px',
            color: primaryTextColor,
            fontFamily: 'Public Sans',
          },
        },
      },
    },
  }
})

const moreList = [{ title: 'Share', value: 'share' }, { title: 'Refresh', value: 'refresh' }, { title: 'Delete', value: 'delete' }]

const chartHeight = computed(() => {
  if (vuetifyDisplay.width.value < 660)
    return '258'

  else
    return '292'
})
</script>

<template>
  <VCard title="Sales Stats">
    <template #append>
      <div class="me-n3 mt-n1">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>
    <VCardText>
      <VueApexCharts
        type="radialBar"
        width="100%"
        :height="chartHeight"
        :options="chartOptions"
        :series="series"
      />

      <div class="d-flex justify-center gap-x-6 gap-y-2 flex-wrap">
        <div>
          <VIcon
            size="13"
            icon="bxs-circle"
            color="success"
            class="me-2"
          />
          <span>Conversion Ratio</span>
        </div>

        <div>
          <VIcon
            size="13"
            icon="bxs-circle"
            color="disabled"
            class="me-2"
          />
          <span>Total requirements</span>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>
