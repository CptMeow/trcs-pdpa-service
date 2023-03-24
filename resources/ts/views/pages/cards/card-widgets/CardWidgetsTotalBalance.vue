<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [{ name: 'Balance', data: [137, 210, 160, 275, 205, 315] }]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  const disabledTextColor = `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['disabled-opacity']})`

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      dropShadow: {
        top: 15,
        blur: 5,
        left: 0,
        opacity: 0.1,
        enabled: true,
        color: currentTheme.warning,
      },
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        top: -20,
        bottom: 3,
      },
    },
    legend: { show: false },
    colors: [`rgba(${hexToRgb(String(currentTheme.warning))}, 1)`],
    markers: {
      size: 8,
      strokeWidth: 6,
      strokeOpacity: 1,
      hover: { size: 8 },
      colors: ['transparent'],
      strokeColors: 'transparent',
      discrete: [
        {
          size: 8,
          seriesIndex: 0,
          fillColor: '#fff',
          strokeColor: currentTheme.warning,
          dataPointIndex: series[0].data.length - 1,
        },
      ],
    },
    stroke: {
      width: 4,
      curve: 'smooth',
      lineCap: 'round',
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        style: {
          fontSize: '14px',
          colors: disabledTextColor,
          fontFamily: 'Public Sans',
        },
      },
    },
    yaxis: {
      labels: { show: false },
    },
  }
})

const moreList = [{ title: 'Share', value: 'share' }, { title: 'Refresh', value: 'refresh' }, { title: 'Delete', value: 'delete' }]

const balanceData = [
  { icon: 'bx-wallet-alt', amount: '$2.54k', title: 'Wallet', color: 'warning' },
  { icon: 'bx-dollar', amount: '$4.21k', title: 'Paypal', color: 'secondary' },
]
</script>

<template>
  <VCard title="Total Balance">
    <template #append>
      <div class="me-n3 mt-n1">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>
    <VCardText class="pb-2">
      <div class="d-flex align-center flex-wrap gap-x-14 mb-8">
        <div
          v-for="data in balanceData"
          :key="data.title"
          class="d-flex align-center gap-4"
        >
          <VAvatar
            :icon="data.icon"
            :color="data.color"
            size="40"
            rounded
            variant="tonal"
          />
          <div>
            <h6 class="text-h6">
              {{ data.amount }}
            </h6>
            <span class="text-sm"> {{ data.title }}</span>
          </div>
        </div>
      </div>

      <VueApexCharts
        type="line"
        :height="217"
        :options="chartOptions"
        :series="series"
      />
    </VCardText>

    <VDivider />

    <VCardText class="d-flex align-center justify-space-between">
      <div class="text-disabled text-sm">
        <p class="mb-0">
          You have done 57.6% more sales.
        </p>
        <p class="mb-0">
          Check your new badge in your profile.
        </p>
      </div>

      <VBtn
        size="small"
        color="warning"
        variant="tonal"
        icon
        class="rounded"
      >
        <VIcon
          size="24"
          icon="bxs-chevron-right"
        />
      </VBtn>
    </VCardText>
  </VCard>
</template>
