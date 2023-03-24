<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'
import { hexToRgb } from '@layouts/utils'

const vuetifyTheme = useTheme()

const series = [{ data: [32, 98, 61, 41, 88, 47, 71] }]

const chartOptions = computed(() => {
  const currentTheme = vuetifyTheme.current.value.colors
  const variableTheme = vuetifyTheme.current.value.variables

  const disabledTextColor = `rgba(${hexToRgb(String(currentTheme['on-surface']))},${variableTheme['disabled-opacity']})`

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
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
      `rgba(${hexToRgb(String(currentTheme.primary))}, 0.1)`,
      `rgba(${hexToRgb(String(currentTheme.primary))}, 0.1)`,
      `rgba(${hexToRgb(String(currentTheme.primary))}, 0.1)`,
      `rgba(${hexToRgb(String(currentTheme.primary))}, 0.1)`,
      `rgba(${hexToRgb(String(currentTheme.primary))}, 1)`,
      `rgba(${hexToRgb(String(currentTheme.primary))}, 0.1)`,
      `rgba(${hexToRgb(String(currentTheme.primary))}, 0.1)`,
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
          fontSize: '15px',
          colors: disabledTextColor,
          fontFamily: 'Public Sans',
        },
      },
    },
    yaxis: { show: false },
    grid: {
      show: false,
      padding: {
        top: -5,
        left: -14,
        right: -16,
        bottom: -12,
      },
    },
  }
})

const reports = [
  {
    amount: '$1,619',
    percentage: 18.6,
    title: 'Net Profit',
    avatarColor: 'primary',
    subtitle: '12.4k Sales',
    avatarIcon: 'bx-trending-up',
  },
  {
    amount: '$3,571',
    percentage: 39.6,
    title: 'Total Income',
    avatarColor: 'success',
    subtitle: 'Sales, Affiliation',
    avatarIcon: 'bx-dollar',
  },
  {
    amount: '$430',
    percentage: 52.8,
    title: 'Total Expenses',
    avatarColor: 'secondary',
    subtitle: 'ADVT, Marketing',
    avatarIcon: 'bx-credit-card',
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
        Earning Report
      </VCardTitle>
      <VCardSubtitle>Weekly Earnings Overview</VCardSubtitle>

      <template #append>
        <div class="me-n3 mt-n8">
          <MoreBtn :menu-list="moreList" />
        </div>
      </template>
    </VCardItem>

    <VCardText class="pb-4">
      <VList class="card-list mb-3">
        <VListItem
          v-for="report in reports"
          :key="report.title"
        >
          <template #prepend>
            <VAvatar
              rounded
              variant="tonal"
              :color="report.avatarColor"
            >
              <VIcon
                size="24"
                :icon="report.avatarIcon"
              />
            </VAvatar>
          </template>

          <VListItemTitle>{{ report.title }}</VListItemTitle>
          <VListItemSubtitle class="text-disabled">
            {{ report.subtitle }}
          </VListItemSubtitle>

          <template #append>
            <div class="text-sm text-medium-emphasis">
              <span>{{ report.amount }}</span>
              <VIcon
                color="success"
                icon="bx-chevron-up"
              />
              <span>{{ report.percentage }}%</span>
            </div>
          </template>
        </VListItem>
      </VList>

      <VueApexCharts
        type="bar"
        :height="175"
        :options="chartOptions"
        :series="series"
      />
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
  .card-list {
    --v-card-list-gap: 1.1rem;
  }
</style>
