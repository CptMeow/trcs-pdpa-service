<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = {
  barSeries: [{ data: [20, 60, 53, 25, 42, 86, 55] }],
  areaSeries: [{ data: [14, 22, 17, 40, 12, 35, 25] }],
}

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  const disabledText = `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['disabled-opacity']})`

  return {
    barCharConfig: {
      chart: {
        parentHeightOffset: 0,
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          distributed: true,
          columnWidth: '52%',
          endingShape: 'rounded',
          startingShape: 'rounded',
        },
      },
      legend: { show: false },
      tooltip: { enabled: false },
      dataLabels: { enabled: false },
      colors: [
        `rgba(${hexToRgb(String(currentTheme.primary))}, 0.16)`,
        `rgba(${hexToRgb(String(currentTheme.primary))}, 0.16)`,
        `rgba(${hexToRgb(String(currentTheme.primary))}, 0.16)`,
        `rgba(${hexToRgb(String(currentTheme.primary))}, 0.16)`,
        `rgba(${hexToRgb(String(currentTheme.primary))}, 0.16)`,
        `rgba(${hexToRgb(String(currentTheme.primary))}, 1)`,
        `rgba(${hexToRgb(String(currentTheme.primary))}, 0.16)`,
      ],
      states: {
        hover: {
          filter: { type: 'none' },
        },
        active: {
          filter: { type: 'none' },
        },
      },
      xaxis: {
        categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        axisTicks: { show: false },
        axisBorder: { show: false },
        tickPlacement: 'on',
        labels: {
          style: {
            fontSize: '14px',
            colors: disabledText,
            fontFamily: 'Public Sans',
          },
        },
      },
      yaxis: { show: false },
      grid: {
        show: false,
        padding: {
          top: -10,
          left: -10,
          right: -10,
          bottom: -9,
        },
      },
    },
    areaChartConfig: {
      chart: {
        parentHeightOffset: 0,
        toolbar: { show: false },
      },
      tooltip: { enabled: false },
      dataLabels: { enabled: false },
      stroke: {
        width: 2,
        curve: 'smooth',
      },
      grid: {
        show: false,
        padding: {
          top: -12,
          bottom: -9,
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
                color: currentTheme.success,
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
          color: currentTheme.success,
        },
      },
      xaxis: {
        axisTicks: { show: false },
        axisBorder: { show: false },
        categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        labels: {
          style: {
            fontSize: '14px',
            colors: disabledText,
            fontFamily: 'Public Sans',
          },
        },
      },
      yaxis: { show: false },
    },
  }
})
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol
        cols="12"
        md="6"
        :class="$vuetify.display.mdAndUp ? 'border-e' : 'border-b'"
      >
        <VCardItem class="pb-0">
          <VCardTitle>New Visitors</VCardTitle>
          <template #append>
            <span class="text-sm">Last Week</span>
          </template>
        </VCardItem>

        <VCardText class="d-flex justify-space-between">
          <div class="d-flex flex-column justify-end">
            <h4 class="text-h4">
              23%
            </h4>
            <div class="text-error text-sm">
              <VIcon
                size="18"
                icon="bx-down-arrow-alt"
                class="me-1"
              />
              <span>8.75%</span>
            </div>
          </div>

          <VueApexCharts
            type="bar"
            :height="140"
            :width="190"
            :options="chartOptions.barCharConfig"
            :series="series.barSeries"
          />
        </VCardText>
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VCardItem class="pb-0">
          <VCardTitle>Activity</VCardTitle>
          <template #append>
            <span class="text-sm">Last Week</span>
          </template>
        </VCardItem>

        <VCardText class="d-flex justify-space-between">
          <div class="d-flex flex-column justify-end">
            <h4 class="text-h4">
              4,234
            </h4>
            <div class="text-error text-sm">
              <VIcon
                size="18"
                icon="bx-down-arrow-alt"
                class="me-1"
              />
              <span>22.3%</span>
            </div>
          </div>

          <VueApexCharts
            type="area"
            :height="140"
            :width="190"
            :options="chartOptions.areaChartConfig"
            :series="series.areaSeries"
          />
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
