<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [
  { name: 'Income', data: [26, 29, 31, 40, 29, 24] },
  { name: 'Earning', data: [30, 26, 24, 26, 24, 40] },
]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  const disabledTextColor = `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['disabled-opacity']})`
  const borderColor = `rgba(${hexToRgb(String(variableTheme['border-color']))},${variableTheme['border-opacity']})`

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 0,
        blur: 6,
        left: 0,
        opacity: 0.14,
        enabled: true,
        color: '#000',
      },
    },
    markers: { size: 0 },
    stroke: { show: false },
    fill: { opacity: [1, 0.85] },
    colors: [currentTheme.primary, currentTheme.info],
    legend: {
      show: true,
      fontSize: '14px',
      markers: { offsetX: -5 },
      itemMargin: { horizontal: 15 },
      fontFamily: 'Public Sans',
      labels: { colors: currentTheme.secondary },
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: borderColor,
          connectorColors: borderColor,
        },
      },
    },
    yaxis: { show: false },
    grid: {
      show: false,
      padding: {
        bottom: -10,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: {
          fontSize: '14px',
          fontFamily: 'Public Sans',
          colors: [
            disabledTextColor,
            disabledTextColor,
            disabledTextColor,
            disabledTextColor,
            disabledTextColor,
            disabledTextColor,
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
        Performance
      </VCardTitle>
      <VCardSubtitle>
        <span>Earning: </span>
        <span class="font-weight-semibold me-3">$846.17</span>
        <span>Sales: </span>
        <span class="font-weight-semibold">25.7M</span>
      </VCardSubtitle>

      <template #append>
        <div class="mt-n9 me-n3">
          <MoreBtn :menu-list="moreList" />
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <VueApexCharts
        type="radar"
        :height="325"
        :options="chartOptions"
        :series="series"
      />
    </VCardText>
  </VCard>
</template>
