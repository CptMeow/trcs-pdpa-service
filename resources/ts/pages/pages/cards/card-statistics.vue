<script setup lang="ts">
import CardStatisticsTarget from '@/@core/components/CardStatisticsTarget.vue'
import CardStatisticsExpenses from '@/views/pages/cards/card-statistics/CardStatisticsExpenses.vue'
import CardStatisticsExpensesBar from '@/views/pages/cards/card-statistics/CardStatisticsExpensesBar.vue'
import CardStatisticsGeneratedLeads from '@/views/pages/cards/card-statistics/CardStatisticsGeneratedLeads.vue'
import CardStatisticsNewVisitors from '@/views/pages/cards/card-statistics/CardStatisticsNewVisitors.vue'
import CardStatisticsOrder from '@/views/pages/cards/card-statistics/CardStatisticsOrder.vue'
import CardStatisticsProfit from '@/views/pages/cards/card-statistics/CardStatisticsProfit.vue'
import CardStatisticsProfitReport from '@/views/pages/cards/card-statistics/CardStatisticsProfitReport.vue'
import CardStatisticsRevenue from '@/views/pages/cards/card-statistics/CardStatisticsRevenue.vue'
import CardStatisticsSales from '@/views/pages/cards/card-statistics/CardStatisticsSales.vue'
import CardStatisticsSessions from '@/views/pages/cards/card-statistics/CardStatisticsSessions.vue'
import CardStatisticsHorizontal from '@core/components/CardStatisticsHorizontal.vue'
import CardStatisticsVertical from '@core/components/CardStatisticsVertical.vue'
import chart from '@images/cards/chart-success.png'
import card from '@images/cards/credit-card-primary.png'
import cube from '@images/cards/cube-secondary.png'
import desktop from '@images/cards/desktop-warning.png'
import paypal from '@images/cards/paypal-error.png'
import wallet from '@images/cards/wallet-info.png'

const statisticsHorizontal = [
  {
    title: 'Session',
    subtitle: 'Last week analytics',
    color: 'primary',
    icon: 'bx-trending-up',
    stats: '58,352',
    change: 29,
  },
  {
    title: 'Time On Site',
    subtitle: 'Last day analytics',
    color: 'info',
    icon: 'bx-time',
    stats: '28m 14s',
    change: 18,
  },
  {
    title: 'Bounce Rate',
    subtitle: 'Last week analytics',
    color: 'error',
    icon: 'bx-pie-chart-alt',
    stats: '62%',
    change: -14,
  },
  {
    title: 'Users',
    subtitle: 'Last year analytics',
    color: 'success',
    icon: 'bx-user',
    stats: '18,472',
    change: 42,
  },
]

const statisticsVertical = [
  {
    title: 'Transactions',
    image: card,
    stats: '$14,854',
    change: 62,
  },
  {
    title: 'Order',
    image: cube,
    stats: '$1,286',
    change: -13.24,
  },
  {
    title: 'Profit',
    image: chart,
    stats: '$12,638',
    change: 72.8,
  },
  {
    title: 'Payments',
    image: paypal,
    stats: '$2,468',
    change: 14.82,
  },
  {
    title: 'Revenue',
    image: desktop,
    stats: '$42,389',
    change: 52.18,
  },
  {
    title: 'Sales',
    image: wallet,
    stats: '$4,679',
    change: 28.14,
  },
]

const statisticsTarget = [
  {
    title: 'Total Sales',
    color: 'primary',
    icon: 'bx-trending-up',
    stats: '8,642',
    change: 29,
    subtitle: '12% of target',
  },
  {
    title: 'Referral Income',
    color: 'info',
    icon: 'bx-dollar',
    stats: '$1,271',
    change: -23,
    subtitle: '34% of target',
  },
  {
    title: 'Customers',
    color: 'success',
    icon: 'bx-user',
    stats: '24,680',
    change: 42,
    subtitle: '29% of target',
  },
  {
    title: 'Orders Received',
    color: 'warning',
    icon: 'bx-shopping-bag',
    stats: '1,862',
    change: 82,
    subtitle: '47% of target',
  },
]
</script>

<template>
  <VRow class="match-height">
    <!-- 👉 Horizontal Cards -->
    <VCol
      v-for="statistics in statisticsHorizontal"
      :key="statistics.title"
      cols="12"
      sm="6"
      md="3"
    >
      <CardStatisticsHorizontal v-bind="statistics" />
    </VCol>

    <!-- 👉 Target Cards -->
    <VCol
      v-for="statistics in statisticsTarget"
      :key="statistics.title"
      cols="12"
      lg="3"
      sm="6"
    >
      <CardStatisticsTarget v-bind="statistics" />
    </VCol>

    <!-- 👉 Vertical Cards -->
    <VCol
      v-for="statistics in statisticsVertical"
      :key="statistics.title"
      cols="12"
      sm="4"
      lg="2"
    >
      <CardStatisticsVertical v-bind="statistics" />
    </VCol>

    <!-- 👉 Total Growth Area Chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
      lg="2"
    >
      <CardStatisticsOrder />
    </VCol>

    <!-- 👉 Total Revenue Bar Chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
      lg="2"
    >
      <CardStatisticsRevenue />
    </VCol>

    <!-- 👉 Profit Bar Chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
      lg="2"
    >
      <CardStatisticsProfit />
    </VCol>

    <!-- 👉 Sessions Area Chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
      lg="2"
    >
      <CardStatisticsSessions />
    </VCol>

    <!-- 👉 Expenses Radial Bar Chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
      lg="2"
    >
      <CardStatisticsExpenses />
    </VCol>

    <!-- 👉 Sales -->
    <VCol
      cols="12"
      sm="6"
      md="4"
      lg="2"
    >
      <CardStatisticsSales />
    </VCol>

    <!-- 👉 Generated Leads -->
    <VCol
      cols="12"
      md="4"
    >
      <CardStatisticsGeneratedLeads />
    </VCol>

    <!-- 👉 Expenses Bar Chart -->
    <VCol
      cols="12"
      md="4"
    >
      <CardStatisticsExpensesBar />
    </VCol>

    <!-- 👉 Profit Report Chart -->
    <VCol
      cols="12"
      md="4"
    >
      <CardStatisticsProfitReport />
    </VCol>

    <!-- 👉 New Visitor -->
    <VCol
      cols="12"
      md="8"
    >
      <CardStatisticsNewVisitors />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/libs/apex-chart.scss";
</style>
