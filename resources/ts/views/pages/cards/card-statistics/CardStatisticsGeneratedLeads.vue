<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [23, 27, 22, 28]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables
  const secondaryTextColor = `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['medium-emphasis-opacity']})`
  const primaryTextColor = `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['high-emphasis-opacity']})`

  return {
    stroke: { width: 0 },
    colors: [
      `rgba(${hexToRgb(String(currentTheme.success))}, 0.75)`,
      `rgba(${hexToRgb(String(currentTheme.success))}, 0.5)`,
      `rgba(${hexToRgb(String(currentTheme.success))}, 0.25)`,
      `rgba(${hexToRgb(String(currentTheme.success))}, 1)`,
    ],
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    labels: ['1st Week', '2nd Week', '3rd Week', '4th Week'],
    states: {
      hover: {
        filter: { type: 'none' },
      },
      active: {
        filter: { type: 'none' },
      },
    },
    grid: {
      padding: { top: 10 },
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        expandOnClick: false,
        donut: {
          size: '73%',
          labels: {
            show: true,
            name: {
              offsetY: 22,
              color: secondaryTextColor,
              fontFamily: 'Public Sans',
            },
            value: {
              offsetY: -17,
              fontWeight: 500,
              fontSize: '26px',
              formatter: (val: unknown) => `${val}%`,
              color: primaryTextColor,
              fontFamily: 'Public Sans',
            },
            total: {
              show: true,
              label: 'Average',
              fontSize: '16px',
              color: secondaryTextColor,
              fontFamily: 'Public Sans',
              formatter: () => `${series.reduce((a, b) => a + b, 0) / series.length}%`,
            },
          },
        },
      },
    },
  }
})
</script>

<template>
  <VCard>
    <VCardText class="d-flex justify-space-between">
      <div class="d-flex flex-column justify-space-between">
        <div>
          <h6 class="text-h6">
            Generated Leads
          </h6>
          <span class="text-sm">Monthly Report</span>
        </div>

        <div>
          <h5 class="text-h5">
            4,234
          </h5>
          <div class="text-success text-sm">
            <VIcon
              size="18"
              icon="bx-up-arrow-alt"
              class="me-1"
            />
            <span>22.3%</span>
          </div>
        </div>
      </div>

      <div>
        <VueApexCharts
          type="donut"
          :height="179"
          :width="150"
          :options="chartOptions"
          :series="series"
        />
      </div>
    </VCardText>
  </VCard>
</template>
