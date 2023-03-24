<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import paypalPrimary from '@images/cards/paypal-primary.png'
import shoppingBag from '@images/cards/shopping-bag.png'
import walletInfo from '@images/cards/wallet.png'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [{ name: 'Income', data: [3350, 3350, 4800, 4800, 2950, 2950, 1800, 1800, 3750, 3750, 5700, 5700] }]

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
        top: 14,
        left: 0,
        blur: 4,
        opacity: 0.15,
        enabled: true,
        color: currentTheme.primary,
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 4,
      curve: 'straight',
    },
    grid: {
      borderColor,
      padding: {
        top: 5,
        right: 6,
        bottom: 7,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityTo: 0.25,
        opacityFrom: 0.5,
        stops: [0, 95, 100],
        shadeIntensity: 0.6,
        colorStops: [
          [
            {
              offset: 0,
              opacity: 0.2,
              color: currentTheme.primary,
            },
            {
              opacity: 0,
              offset: 100,
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
        color: currentTheme.primary,
      },
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
        formatter: (value: number) => `$${value / 1000}k`,
        style: {
          fontSize: '14px',
          colors: disabledTextColor,
          fontFamily: 'Public Sans',
        },
      },
    },
  }
})

const reportData = [
  {
    title: 'Income',
    avatarWidth: 20,
    stats: '$42,845',
    avatarHeight: 22,
    trendNumber: +2.34,
    avatarSrc: paypalPrimary,
  },
  {
    avatarWidth: 20,
    title: 'Expense',
    stats: '$38,658',
    avatarHeight: 22,
    trendNumber: -1.15,
    avatarSrc: shoppingBag,
  },
  {
    title: 'Profit',
    avatarWidth: 22,
    stats: '$18,220',
    avatarHeight: 21,
    trendNumber: +1.34,
    avatarSrc: walletInfo,
  },
]

const moreList = [
  { title: 'Last Week', value: 'Last Week' },
  { title: 'Last Month', value: 'Last Month' },
  { title: 'Last Year', value: 'Last Year' },
]
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol
        cols="12"
        md="8"
        :class="$vuetify.display.mdAndUp ? 'border-e' : 'border-b'"
      >
        <VCardItem class="pb-0">
          <VCardTitle>Total Income</VCardTitle>
          <VCardSubtitle class="text-base">
            Yearly report overview
          </VCardSubtitle>

          <template #append>
            <div class="mt-n9 me-n4">
              <MoreBtn :menu-list="moreList" />
            </div>
          </template>
        </VCardItem>

        <VueApexCharts
          type="area"
          :height="291"
          :options="chartOptions"
          :series="series"
        />
      </VCol>

      <VCol
        cols="12"
        md="4"
      >
        <VCardItem>
          <VCardTitle>Report</VCardTitle>
          <VCardSubtitle class="text-base">
            Monthly Avg. $45.578k
          </VCardSubtitle>

          <template #append>
            <div class="mt-n9 me-n4">
              <MoreBtn :menu-list="moreList" />
            </div>
          </template>
        </VCardItem>

        <VCardText>
          <div
            v-for="(report, index) in reportData"
            :key="report.title"
            class="bg-var-theme-background d-flex align-center gap-3 px-3 py-2 rounded"
            :class="index !== 0 ? 'mt-4' : '' "
          >
            <VAvatar
              rounded
              size="44"
              color="rgb(var(--v-theme-surface))"
              class="elevation-3"
            >
              <VImg
                :height="report.avatarHeight"
                :width="report.avatarWidth"
                :src="report.avatarSrc"
              />
            </VAvatar>

            <div class="d-flex flex-wrap align-center justify-space-between gap-2 flex-grow-1">
              <div>
                <span class="text-sm">{{ report.title }}</span>
                <h6 class="text-h6">
                  {{ report.stats }}
                </h6>
              </div>

              <span
                class="text-sm"
                :class=" report.trendNumber > 0 ? 'text-success' : 'text-error'"
              >{{ report.trendNumber > 0 ? `+${report.trendNumber}` : report.trendNumber }}k</span>
            </div>
          </div>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
