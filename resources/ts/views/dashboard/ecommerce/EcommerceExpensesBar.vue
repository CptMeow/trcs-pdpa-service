<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useDisplay, useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()
const display = useDisplay()

const series = [
  { name: `${new Date().getFullYear() - 1}`, data: [12, 32, 12, 27, 39, 27, 17, 9, 12, 20] },
  { name: `${new Date().getFullYear() - 2}`, data: [-28, -20, -27, -15, -21, -17, -19, -12, -30, -18] },
]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors

  return {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 2,
      lineCap: 'round',
      colors: [currentTheme.surface],
    },
    colors: [`rgba(${hexToRgb(String(currentTheme.primary))}, 1)`, `rgba(${hexToRgb(String(currentTheme.warning))}, 1)`],
    states: {
      hover: {
        filter: { type: 'none' },
      },
      active: {
        filter: { type: 'none' },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '40%',
        endingShape: 'flat',
        startingShape: 'rounded',
      },
    },
    grid: {
      show: false,
      padding: {
        top: -10,
        right: 2,
        bottom: 0,
      },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      crosshairs: { opacity: 0 },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
    responsive: [
      {
        breakpoint: 1400,
        options: {
          plotOptions: {
            bar: { columnWidth: '60%' },
          },
        },
      },
      {
        breakpoint: 1250,
        options: {
          plotOptions: {
            bar: { columnWidth: '65%' },
          },
        },
      },
      {
        breakpoint: display.thresholds.value.lg,
        options: {
          chart: { height: 146 },
          plotOptions: {
            bar: { columnWidth: '40%' },
          },
        },
      },
      {
        breakpoint: display.thresholds.value.md,
        options: {
          chart: { height: 191 },
        },
      },
      {
        breakpoint: 420,
        options: {
          plotOptions: {
            bar: { columnWidth: '55%' },
          },
        },
      },
    ],
  }
})
</script>

<template>
  <VCard>
    <VCardText class="d-flex justify-space-between">
      <div class="d-flex flex-column justify-space-between">
        <h6 class="text-h6 mb-3">
          Expenses
        </h6>

        <div class="mb-3">
          <h5 class="text-h5">
            4,234
          </h5>
          <div class="text-error text-sm">
            <VIcon
              size="18"
              icon="bx-down-arrow-alt"
              class="me-1"
            />
            <span>8.2%</span>
          </div>
        </div>

        <div>
          <VChip
            label
            color="secondary"
          >
            2023 Year
          </VChip>
        </div>
      </div>

      <div>
        <VueApexCharts
          type="bar"
          :height="190"
          :options="chartOptions"
          :series="series"
        />
      </div>
    </VCardText>
  </VCard>
</template>
