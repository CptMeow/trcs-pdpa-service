<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb, rgbaToHex } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [
  {
    name: '1k',
    data: [
      { x: 'Jan', y: '250' },
      { x: 'Feb', y: '350' },
      { x: 'Mar', y: '220' },
      { x: 'Apr', y: '290' },
      { x: 'May', y: '650' },
      { x: 'Jun', y: '260' },
      { x: 'Jul', y: '274' },
      { x: 'Aug', y: '850' },
    ],
  },
  {
    name: '2k',
    data: [
      { x: 'Jan', y: '750' },
      { x: 'Feb', y: '3350' },
      { x: 'Mar', y: '1220' },
      { x: 'Apr', y: '1290' },
      { x: 'May', y: '1650' },
      { x: 'Jun', y: '1260' },
      { x: 'Jul', y: '1274' },
      { x: 'Aug', y: '850' },
    ],
  },
  {
    name: '3k',
    data: [
      { x: 'Jan', y: '375' },
      { x: 'Feb', y: '1350' },
      { x: 'Mar', y: '3220' },
      { x: 'Apr', y: '2290' },
      { x: 'May', y: '2650' },
      { x: 'Jun', y: '2260' },
      { x: 'Jul', y: '1274' },
      { x: 'Aug', y: '815' },
    ],
  },
  {
    name: '4k',
    data: [
      { x: 'Jan', y: '575' },
      { x: 'Feb', y: '1350' },
      { x: 'Mar', y: '2220' },
      { x: 'Apr', y: '3290' },
      { x: 'May', y: '3650' },
      { x: 'Jun', y: '2260' },
      { x: 'Jul', y: '1274' },
      { x: 'Aug', y: '315' },
    ],
  },
  {
    name: '5k',
    data: [
      { x: 'Jan', y: '875' },
      { x: 'Feb', y: '1350' },
      { x: 'Mar', y: '2220' },
      { x: 'Apr', y: '3290' },
      { x: 'May', y: '3650' },
      { x: 'Jun', y: '2260' },
      { x: 'Jul', y: '1274' },
      { x: 'Aug', y: '965' },
    ],
  },
  {
    name: '6k',
    data: [
      { x: 'Jan', y: '575' },
      { x: 'Feb', y: '1350' },
      { x: 'Mar', y: '2220' },
      { x: 'Apr', y: '2290' },
      { x: 'May', y: '2650' },
      { x: 'Jun', y: '3260' },
      { x: 'Jul', y: '1274' },
      { x: 'Aug', y: '815' },
    ],
  },
  {
    name: '7k',
    data: [
      { x: 'Jan', y: '575' },
      { x: 'Feb', y: '1350' },
      { x: 'Mar', y: '1220' },
      { x: 'Apr', y: '1290' },
      { x: 'May', y: '1650' },
      { x: 'Jun', y: '1260' },
      { x: 'Jul', y: '3274' },
      { x: 'Aug', y: '815' },
    ],
  },
  {
    name: '8k',
    data: [
      { x: 'Jan', y: '575' },
      { x: 'Feb', y: '350' },
      { x: 'Mar', y: '220' },
      { x: 'Apr', y: '290' },
      { x: 'May', y: '650' },
      { x: 'Jun', y: '260' },
      { x: 'Jul', y: '274' },
      { x: 'Aug', y: '815' },
    ],
  },
]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  const disabledTextColor = `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['disabled-opacity']})`

  return {
    chart: {
      offsetX: 3,
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    stroke: {
      width: 5,
      colors: [currentTheme.surface],
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors: [`rgba(${hexToRgb(String(currentTheme.primary))}, 1)`],
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
        top: -30,
        right: 25,
        bottom: 3,
      },
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      crosshairs: {
        stroke: { color: 'transparent' },
      },
      labels: {
        style: {
          fontSize: '14px',
          colors: disabledTextColor,
          fontFamily: 'Public Sans',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '14px',
          colors: disabledTextColor,
          fontFamily: 'Public Sans',
        },
      },
    },
    plotOptions: {
      heatmap: {
        radius: 6,
        enableShades: false,
        colorScale: {
          ranges: [
            { from: 0, to: 1000, name: '1K', color: rgbaToHex(`rgba(${hexToRgb(String(currentTheme.primary))}, 0.2)`) },
            { from: 1001, to: 2000, name: '2K', color: rgbaToHex(`rgba(${hexToRgb(String(currentTheme.primary))}, 0.4)`) },
            { from: 2001, to: 3000, name: '3K', color: rgbaToHex(`rgba(${hexToRgb(String(currentTheme.primary))}, 0.6)`) },
            { from: 3001, to: 4000, name: '4K', color: rgbaToHex(`rgba(${hexToRgb(String(currentTheme.primary))}, 1)`) },
          ],
        },
      },
    },
  }
})

const moreList = [{ title: 'Share', value: 'share' }, { title: 'Refresh', value: 'refresh' }, { title: 'Delete', value: 'delete' }]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle class="mb-1">
        Sales Analytics
      </VCardTitle>

      <p class="mb-0">
        <VChip
          label
          color="success"
          density="compact"
          class="me-1"
        >
          +42.6%
        </VChip>
        <span class="text-sm">Than last year</span>
      </p>

      <template #append>
        <div class="me-n3 mt-n8">
          <MoreBtn :menu-list="moreList" />
        </div>
      </template>
    </VCardItem>

    <VueApexCharts
      type="heatmap"
      :height="308"
      :options="chartOptions"
      :series="series"
    />
  </VCard>
</template>
