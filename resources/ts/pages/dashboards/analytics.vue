<script setup lang="ts">
import AnalyticsActivityTimeline from '@/views/dashboard/analytics/AnalyticsActivityTimeline.vue'
import AnalyticsCongratulations from '@/views/dashboard/analytics/AnalyticsCongratulations.vue'
import AnalyticsFinanceTabs from '@/views/dashboard/analytics/AnalyticsFinanceTabs.vue'
import AnalyticsOrder from '@/views/dashboard/analytics/AnalyticsOrder.vue'
import AnalyticsOrderStatistics from '@/views/dashboard/analytics/AnalyticsOrderStatistics.vue'
import AnalyticsProfitReport from '@/views/dashboard/analytics/AnalyticsProfitReport.vue'
import AnalyticsRevenue from '@/views/dashboard/analytics/AnalyticsRevenue.vue'
import AnalyticsSystemTabs from '@/views/dashboard/analytics/AnalyticsSystemTabs.vue'
import AnalyticsTotalRevenue from '@/views/dashboard/analytics/AnalyticsTotalRevenue.vue'
import AnalyticsTransactions from '@/views/dashboard/analytics/AnalyticsTransactions.vue'

// 👉 Images
import paypal from '@images/cards/paypal-error.png'
import wallet from '@images/cards/wallet-info.png'
</script>

<template>
  <VRow>
    <!-- 👉 congratulations -->
    <VCol
      cols="12"
      md="8"
    >
      <AnalyticsCongratulations />
    </VCol>

    <VCol
      cols="12"
      sm="4"
    >
      <VRow>
        <!-- 👉 Sales -->
        <VCol
          cols="12"
          md="6"
        >
          <CardStatisticsVertical
            v-bind="{
              title: 'Sales',
              image: wallet,
              stats: '$4,679',
              change: 28.14,
            }"
          />
        </VCol>

        <!-- 👉 Orders -->
        <VCol
          cols="12"
          md="6"
        >
          <AnalyticsOrder />
        </VCol>
      </VRow>
    </VCol>

    <!-- 👉 Total Revenue -->
    <VCol
      cols="12"
      md="8"
      order="2"
      order-md="1"
    >
      <AnalyticsTotalRevenue />
    </VCol>

    <VCol
      cols="12"
      sm="8"
      md="4"
      order="1"
      order-md="2"
    >
      <VRow>
        <!-- 👉 Payments -->
        <VCol
          cols="12"
          sm="6"
        >
          <CardStatisticsVertical
            v-bind=" {
              title: 'Payments',
              image: paypal,
              stats: '$2,468',
              change: 14.82,
            }"
          />
        </VCol>

        <!-- 👉 Revenue -->
        <VCol
          cols="12"
          sm="6"
        >
          <AnalyticsRevenue />
        </VCol>
      </VRow>

      <VRow>
        <!-- 👉 Profit Report -->
        <VCol
          cols="12"
          sm="12"
        >
          <AnalyticsProfitReport />
        </VCol>
      </VRow>
    </VCol>

    <!-- 👉 Order Statistics -->
    <VCol
      cols="12"
      md="4"
      sm="6"
      order="3"
    >
      <AnalyticsOrderStatistics />
    </VCol>

    <!-- 👉 Tabs chart -->
    <VCol
      cols="12"
      md="4"
      sm="6"
      order="3"
    >
      <AnalyticsFinanceTabs />
    </VCol>

    <!-- 👉 Transactions -->
    <VCol
      cols="12"
      md="4"
      sm="6"
      order="3"
    >
      <AnalyticsTransactions />
    </VCol>

    <!-- 👉 Activity Timeline -->
    <VCol
      cols="12"
      order-md="3"
      order="4"
      md="6"
    >
      <AnalyticsActivityTimeline />
    </VCol>

    <!-- 👉 Tabs -->
    <VCol
      cols="12"
      order="3"
      sm="6"
    >
      <AnalyticsSystemTabs />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/libs/apex-chart.scss";
</style>
