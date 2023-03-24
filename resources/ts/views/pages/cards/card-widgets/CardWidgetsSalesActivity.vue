<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useDisplay, useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()
const display = useDisplay()

const series = [
  { name: 'Product A', data: [77, 50, 59, 67, 48, 84, 64] },
  { name: 'Product B', data: [20, 23, 27, 27, 30, 18, 25] },
]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  const disabledTextColor = `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['disabled-opacity']})`

  return {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 6,
      lineCap: 'round',
      colors: [currentTheme.surface],
    },
    colors: [`rgba(${hexToRgb(String(currentTheme.error))}, 1)`, `rgba(${hexToRgb(String(currentTheme.secondary))}, 1)`],
    states: {
      hover: {
        filter: { type: 'none' },
      },
      active: {
        filter: { type: 'none' },
      },
    },
    grid: {
      show: false,
      padding: {
        left: 8,
        top: -45,
        right: 6,
        bottom: 7,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '36%',
        endingShape: 'rounded',
        startingShape: 'rounded',
      },
    },
    xaxis: {
      axisTicks: { show: false },
      crosshairs: { opacity: 0 },
      axisBorder: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      labels: {
        style: {
          fontSize: '14px',
          colors: disabledTextColor,
          fontFamily: 'Public Sans',
        },
      },
    },
    yaxis: { show: false },
    responsive: [
      {
        breakpoint: display.thresholds.value.lg,
        options: {
          plotOptions: {
            bar: { columnWidth: '45%' },
          },
        },
      },
      {
        breakpoint: display.thresholds.value.md,
        options: {
          plotOptions: {
            bar: { columnWidth: '48%' },
          },
        },
      },
      {
        breakpoint: display.thresholds.value.sm,
        options: {
          plotOptions: {
            bar: { columnWidth: '40%' },
          },
        },
      },
    ],
  }
})

const moreList = [{ title: 'Share', value: 'share' }, { title: 'Refresh', value: 'refresh' }, { title: 'Delete', value: 'delete' }]
</script>

<template>
  <VCard
    title="Overview & Sales Activity"
    subtitle="Check out each column for more details"
  >
    <template #append>
      <div class="me-n3 mt-n8">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VueApexCharts
      type="bar"
      :height="265"
      :options="chartOptions"
      :series="series"
    />
  </VCard>
</template>
