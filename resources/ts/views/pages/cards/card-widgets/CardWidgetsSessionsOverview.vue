<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [78]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  const disabledTextColor = `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['disabled-opacity']})`
  const primaryTextColor = `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['high-emphasis-opacity']})`

  return {
    chart: {
      sparkline: { enabled: true },
    },
    labels: ['Loss Rate'],
    stroke: { lineCap: 'round' },
    colors: [`rgba(${hexToRgb(String(currentTheme.warning))}, 1)`],
    states: {
      hover: {
        filter: { type: 'none' },
      },
      active: {
        filter: { type: 'none' },
      },
    },
    grid: {
      padding: {
        top: -15,
        bottom: -10,
      },
    },
    plotOptions: {
      radialBar: {
        endAngle: 140,
        startAngle: -140,
        hollow: { size: '66%' },
        track: {
          strokeWidth: '30%',
          background: `rgba(${hexToRgb(String(currentTheme['grey-100']))}, 1)`,
        },
        dataLabels: {
          name: {
            offsetY: 60,
            fontSize: '14px',
            color: disabledTextColor,
            fontFamily: 'Public Sans',
          },
          value: {
            offsetY: -5,
            fontWeight: 500,
            fontSize: '26px',
            color: primaryTextColor,
            fontFamily: 'Public Sans',
          },
        },
      },
    },
  }
})

const moreList = [{ title: 'Share', value: 'share' }, { title: 'Refresh', value: 'refresh' }, { title: 'Delete', value: 'delete' }]

const sessionData = [
  {
    title: 'Today',
    stat: '+ $340',
  },
  {
    title: 'Last Week',
    stat: '+ $680',
  },
  {
    title: 'Last Month',
    stat: '+ $3,540',
  },
]
</script>

<template>
  <VCard title="Sessions Overview">
    <template #append>
      <div class="me-n3 mt-n1">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VCardText>
      <VRow>
        <VCol
          sm="5"
          cols="12"
        >
          <div class="mb-8">
            <h4 class="text-h4">
              32,754
            </h4>
            <span class="text-success">+0.7645%</span>
          </div>

          <VueApexCharts
            type="radialBar"
            :height="180"
            :options="chartOptions"
            :series="series"
          />
        </VCol>

        <VCol
          cols="12"
          sm="7"
          class="d-flex flex-column justify-space-between"
        >
          <div class="d-flex justify-space-around text-center mb-5">
            <div
              v-for="data in sessionData"
              :key="data.title"
            >
              <p class="text-sm text-disabled mb-1">
                {{ data.title }}
              </p>
              <span class="font-weight-semibold">{{ data.stat }}</span>
            </div>
          </div>

          <div>
            <span>Effective Return</span>
            <div class="d-flex align-center gap-2 mt-1 mb-8">
              <VProgressLinear
                color="primary"
                height="8"
                rounded
                rounded-bar
                model-value="74"
              />
              <span class="text-high-emphasis font-weight-semibold">74%</span>
            </div>

            <span>Invalid Session</span>
            <div class="d-flex align-center gap-2 mt-1">
              <VProgressLinear
                color="primary"
                height="8"
                rounded
                rounded-bar
                model-value="40"
              />
              <span class="text-high-emphasis font-weight-semibold">40%</span>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
