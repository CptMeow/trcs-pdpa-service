<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const series = [{ data: [26, 26, 24, 24, 22, 22, 26, 26, 30] }]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 2,
      curve: 'straight',
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        top: -35,
        right: 16,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0.7,
        opacityFrom: 0.5,
        shadeIntensity: 1,
        stops: [0, 90, 100],
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.6,
              color: currentTheme.warning,
            },
            {
              offset: 100,
              opacity: 0.1,
              color: currentTheme.surface,
            },
          ],
        ],
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 1,
        color: currentTheme.warning,
      },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
    markers: {
      size: 1,
      offsetY: 4,
      offsetX: -4,
      strokeWidth: 4,
      strokeOpacity: 1,
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [
        {
          size: 6,
          seriesIndex: 0,
          fillColor: '#fff',
          strokeColor: currentTheme.warning,
          dataPointIndex: series[0].data.length - 1,
        },
      ],
    },
  }
})
</script>

<template>
  <VCard>
    <VCardText class="pb-1">
      <h6 class="text-base font-weight-regular">
        Sessions
      </h6>
      <h5 class="text-h5 font-weight-medium">
        2845
      </h5>
    </VCardText>

    <VueApexCharts
      type="area"
      :height="110"
      :options="chartOptions"
      :series="series"
    />
  </VCard>
</template>
