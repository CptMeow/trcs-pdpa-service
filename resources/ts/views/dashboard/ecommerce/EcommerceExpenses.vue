<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [72]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  return {
    chart: {
      sparkline: { enabled: true },
    },
    stroke: { lineCap: 'round' },
    colors: [`rgba(${hexToRgb(String(currentTheme.primary))}, 1)`],
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
        endAngle: 90,
        startAngle: -90,
        hollow: { size: '64%' },
        track: {
          background: `rgba(${hexToRgb(String(currentTheme['grey-100']))}, 1)`,
        },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 3,
            fontWeight: 500,
            fontSize: '22px',
            color: `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['high-emphasis-opacity']})`,
          },
        },
      },
    },
  }
})
</script>

<template>
  <VCard>
    <VCardText class="pb-4">
      <h6 class="text-base font-weight-regular">
        Expenses
      </h6>

      <VueApexCharts
        type="radialBar"
        :height="138"
        :options="chartOptions"
        :series="series"
      />

      <p class="text-center text-sm mt-4 mb-0">
        $21k Expenses more than last month
      </p>
    </VCardText>
  </VCard>
</template>
