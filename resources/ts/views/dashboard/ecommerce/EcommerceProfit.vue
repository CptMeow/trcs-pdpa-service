<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [{ data: [11, 7, 11, 20] }, { data: [9, 5, 15, 18] }]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables
  const disabledText = `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['disabled-opacity']})`

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    grid: {
      padding: {
        top: -22,
        left: -1,
        right: 10,
        bottom: -3,
      },
      yaxis: {
        lines: { show: false },
      },
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [`rgba(${hexToRgb(String(currentTheme.success))}, 1)`, `rgba(${hexToRgb(String(currentTheme.success))}, 0.2)`],
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '52%',
        endingShape: 'rounded',
        startingShape: 'rounded',
      },
    },
    stroke: {
      width: 2,
      colors: [currentTheme.surface],
    },
    states: {
      hover: {
        filter: { type: 'none' },
      },
      active: {
        filter: { type: 'none' },
      },
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Jan', 'Apr', 'Jul', 'Oct'],
      labels: {
        style: {
          fontSize: '14px',
          colors: disabledText,
          fontFamily: 'Public Sans',
        },
      },
    },
    yaxis: {
      labels: { show: false },
    },
  }
})
</script>

<template>
  <VCard>
    <VCardText class="pb-1">
      <h6 class="text-base font-weight-regular">
        Profit
      </h6>
      <h5 class="text-h5 font-weight-medium">
        624k
      </h5>
    </VCardText>

    <VueApexCharts
      type="bar"
      :height="110"
      :options="chartOptions"
      :series="series"
    />
  </VCard>
</template>
