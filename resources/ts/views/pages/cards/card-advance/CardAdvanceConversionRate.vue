<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [{ data: [30, 58, 45, 68] }]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 8,
        blur: 3,
        left: 3,
        enabled: true,
        opacity: 0.14,
        color: currentTheme.primary,
      },
    },
    grid: {
      show: false,
      padding: {
        top: -21,
        left: -5,
        bottom: -8,
      },
    },
    tooltip: { enabled: false },
    colors: [`rgba(${hexToRgb(String(currentTheme.primary))},1)`],
    markers: {
      size: 6,
      offsetX: -2,
      offsetY: -1,
      strokeWidth: 5,
      strokeOpacity: 1,
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [
        {
          size: 7,
          seriesIndex: 0,
          strokeColor: currentTheme.primary,
          fillColor: currentTheme.surface,
          dataPointIndex: series[0].data.length - 1,
        },
      ],
    },
    stroke: {
      width: 5,
      curve: 'smooth',
      lineCap: 'round',
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
  }
})

const ConversionRates = [
  {
    changePercent: 12.8,
    title: 'Impressions',
    subtitle: '12.4k Visits',
  },
  {
    changePercent: -8.3,
    title: 'Added To Cart',
    subtitle: '32 Product in cart',
  },
  {
    title: 'Checkout',
    changePercent: 9.12,
    subtitle: '21 Product checkout',
  },
  {
    title: 'Purchased',
    changePercent: 2.24,
    subtitle: '12 Orders',
  },
]

const moreList = [
  { title: 'Share', value: 'Share' },
  { title: 'Refresh', value: 'Refresh' },
  { title: 'Update', value: 'Update' },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle class="mb-1">
        Conversion Rate
      </VCardTitle>
      <VCardSubtitle>Compared To Last Month</VCardSubtitle>

      <template #append>
        <div class="me-n3 mt-n8">
          <MoreBtn :menu-list="moreList" />
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <div class="d-flex align-center justify-space-between gap-2 flex-wrap mb-5">
        <div class="d-flex align-center gap-2">
          <h4 class="text-h5 text-md-h4">
            8.72%
          </h4>
          <div class="text-success">
            <VIcon icon="bx-chevron-up" />
            <span class="text-sm">4.8%</span>
          </div>
        </div>

        <div>
          <VueApexCharts
            type="line"
            :height="70"
            :width="125"
            :options="chartOptions"
            :series="series"
          />
        </div>
      </div>

      <VList class="card-list">
        <VListItem
          v-for="rate in ConversionRates"
          :key="rate.title"
        >
          <VListItemTitle class="font-weight-medium mb-1">
            {{ rate.title }}
          </VListItemTitle>
          <VListItemSubtitle class="text-disabled">
            {{ rate.subtitle }}
          </VListItemSubtitle>

          <template #append>
            <VIcon
              size="20"
              :icon="rate.changePercent > 0 ? 'bx-up-arrow-alt' : 'bx-down-arrow-alt'"
              :color="rate.changePercent > 0 ? 'success' : 'error'"
              class="me-3"
            />
            <span class="text-sm text-medium-emphasis">{{ rate.changePercent }}%</span>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>
