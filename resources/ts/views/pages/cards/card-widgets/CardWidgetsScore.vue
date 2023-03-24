<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [78]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors

  return {
    chart: {
      sparkline: { enabled: true },
    },
    labels: ['Out of 100'],
    stroke: { dashArray: 5 },
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
        top: -15,
        bottom: -13,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityTo: 0.6,
        opacityFrom: 1,
        shadeIntensity: 0.5,
        stops: [30, 70, 100],
        inverseColors: false,
        gradientToColors: [currentTheme.primary],
      },
    },
    plotOptions: {
      radialBar: {
        endAngle: 150,
        startAngle: -140,
        hollow: { size: '55%' },
        track: { background: 'transparent' },
        dataLabels: {
          name: {
            offsetY: 30,
            fontSize: '14px',
            color: currentTheme.secondary,
            fontFamily: 'Public Sans',
          },
          value: {
            offsetY: -10,
            fontWeight: 500,
            fontSize: '38px',
            formatter: (value: unknown) => `${value}`,
            color: currentTheme.primary,
            fontFamily: 'Public Sans',
          },
        },
      },
    },
  }
})
</script>

<template>
  <VCard>
    <VCardText class="text-center">
      <p class="text-sm mb-0">
        Your score is
      </p>
      <h5 class="text-h5">
        Awesome
      </h5>

      <VueApexCharts
        type="radialBar"
        :height="200"
        :options="chartOptions"
        :series="series"
      />
      <p class="text-sm mt-2 mb-1">
        Your score is based on the last
      </p>
      <h6 class="text-sm font-weight-semibold mb-2">
        287 Transactions
      </h6>

      <VBtn>View My Account</VBtn>
    </VCardText>
  </VCard>
</template>
