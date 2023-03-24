<script setup lang="ts">
import CardWidgetsCustomerRatings from '@/views/pages/cards/card-widgets/CardWidgetsCustomerRatings.vue'
import CardWidgetsPerformance from '@/views/pages/cards/card-widgets/CardWidgetsPerformance.vue'
import CardWidgetsSalesActivity from '@/views/pages/cards/card-widgets/CardWidgetsSalesActivity.vue'
import CardWidgetsSalesAnalytics from '@/views/pages/cards/card-widgets/CardWidgetsSalesAnalytics.vue'
import CardWidgetsSalesStats from '@/views/pages/cards/card-widgets/CardWidgetsSalesStats.vue'
import CardWidgetsScore from '@/views/pages/cards/card-widgets/CardWidgetsScore.vue'
import CardWidgetsSessionsOverview from '@/views/pages/cards/card-widgets/CardWidgetsSessionsOverview.vue'
import CardWidgetsTabs from '@/views/pages/cards/card-widgets/CardWidgetsTabs.vue'
import CardWidgetsTotalBalance from '@/views/pages/cards/card-widgets/CardWidgetsTotalBalance.vue'
import CardWidgetsTotalIncome from '@/views/pages/cards/card-widgets/CardWidgetsTotalIncome.vue'
import CardWidgetsTotalRevenue from '@/views/pages/cards/card-widgets/CardWidgetsTotalRevenue.vue'
</script>

<template>
  <VRow>
    <!-- 👉 Customer Ratings Chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <CardWidgetsCustomerRatings />
    </VCol>

    <!-- 👉 Sales Stats Chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <CardWidgetsSalesStats />
    </VCol>

    <!-- 👉 Sales Analytics Chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <CardWidgetsSalesAnalytics />
    </VCol>

    <!-- 👉 Sales Activity chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <CardWidgetsSalesActivity />
    </VCol>

    <!-- 👉 Total Income chart -->
    <VCol
      cols="12"
      md="8"
    >
      <CardWidgetsTotalIncome />
    </VCol>

    <!-- 👉 Tabs chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <CardWidgetsTabs />
    </VCol>

    <!-- 👉 Performance chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <CardWidgetsPerformance />
    </VCol>

    <!-- 👉 Total Balance chart -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <CardWidgetsTotalBalance />
    </VCol>

    <!-- 👉 Score chart -->
    <VCol
      cols="12"
      md="4"
      sm="6"
      lg="3"
    >
      <CardWidgetsScore />
    </VCol>

    <!-- 👉 Sessions Overview chart -->
    <VCol
      cols="12"
      lg="6"
      md="8"
    >
      <CardWidgetsSessionsOverview />
    </VCol>

    <!-- 👉 Total Revenue chart -->
    <VCol
      cols="12"
      lg="9"
    >
      <CardWidgetsTotalRevenue />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/libs/apex-chart.scss";
</style>
