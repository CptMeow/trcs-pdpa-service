<script setup lang="ts">
import CardAdvanceActivityTimeline from '@/views/pages/cards/card-advance/CardAdvanceActivityTimeline.vue'
import CardAdvanceBusinessShark from '@/views/pages/cards/card-advance/CardAdvanceBusinessShark.vue'
import CardAdvanceConversionRate from '@/views/pages/cards/card-advance/CardAdvanceConversionRate.vue'
import CardAdvanceEarningReport from '@/views/pages/cards/card-advance/CardAdvanceEarningReport.vue'
import CardAdvanceEmployeeList from '@/views/pages/cards/card-advance/CardAdvanceEmployeeList.vue'
import CardAdvanceEvent from '@/views/pages/cards/card-advance/CardAdvanceEvent.vue'
import CardAdvanceFinanceSummary from '@/views/pages/cards/card-advance/CardAdvanceFinanceSummary.vue'
import CardAdvanceOrderStatistics from '@/views/pages/cards/card-advance/CardAdvanceOrderStatistics.vue'
import CardAdvancePaymentData from '@/views/pages/cards/card-advance/CardAdvancePaymentData.vue'
import CardAdvanceSalesByCountries from '@/views/pages/cards/card-advance/CardAdvanceSalesByCountries.vue'
import CardAdvanceTabs from '@/views/pages/cards/card-advance/CardAdvanceTabs.vue'
import CardAdvanceTeamMembers from '@/views/pages/cards/card-advance/CardAdvanceTeamMembers.vue'
import CardAdvanceTopProducts from '@/views/pages/cards/card-advance/CardAdvanceTopProducts.vue'
import CardAdvanceTransactions from '@/views/pages/cards/card-advance/CardAdvanceTransactions.vue'
import CardAdvanceUpgradeYourPlan from '@/views/pages/cards/card-advance/CardAdvanceUpgradeYourPlan.vue'
</script>

<template>
  <VRow>
    <!-- 👉 Employee List -->
    <VCol
      cols="12"
      lg="4"
      sm="6"
    >
      <CardAdvanceEmployeeList />
    </VCol>

    <!-- 👉 Transactions -->
    <VCol
      cols="12"
      lg="4"
      sm="6"
    >
      <CardAdvanceTransactions />
    </VCol>

    <!-- 👉 Event -->
    <VCol
      cols="12"
      lg="4"
      sm="6"
    >
      <CardAdvanceEvent />
    </VCol>

    <!-- 👉 Payment Data -->
    <VCol
      cols="12"
      lg="4"
      sm="6"
    >
      <CardAdvancePaymentData />
    </VCol>

    <!-- 👉 Business Shark -->
    <VCol
      cols="12"
      lg="4"
      sm="6"
    >
      <CardAdvanceBusinessShark />
    </VCol>

    <!-- 👉 Upgrade Your Plan -->
    <VCol
      cols="12"
      lg="4"
      sm="6"
    >
      <CardAdvanceUpgradeYourPlan />
    </VCol>

    <!-- 👉 Sales by Countries -->
    <VCol
      cols="12"
      lg="4"
      sm="6"
    >
      <CardAdvanceSalesByCountries />
    </VCol>

    <!-- 👉 Order Statistics -->
    <VCol
      cols="12"
      lg="4"
      sm="6"
    >
      <CardAdvanceOrderStatistics />
    </VCol>

    <!-- 👉 Earning Report -->
    <VCol
      cols="12"
      lg="4"
      sm="6"
    >
      <CardAdvanceEarningReport />
    </VCol>

    <!-- 👉 Team Members -->
    <VCol
      cols="12"
      sm="6"
    >
      <CardAdvanceTeamMembers />
    </VCol>

    <!-- 👉 Tabs -->
    <VCol
      cols="12"
      sm="6"
    >
      <CardAdvanceTabs />
    </VCol>

    <!-- 👉 Conversion Rate -->
    <VCol
      cols="12"
      sm="6"
      lg="4"
    >
      <CardAdvanceConversionRate />
    </VCol>

    <!-- 👉 Top Products -->
    <VCol
      cols="12"
      lg="8"
    >
      <CardAdvanceTopProducts />
    </VCol>

    <!-- 👉 Activity Timeline -->
    <VCol
      cols="12"
      sm="6"
    >
      <CardAdvanceActivityTimeline />
    </VCol>

    <!-- 👉 Finance Summary -->
    <VCol
      cols="12"
      sm="6"
    >
      <CardAdvanceFinanceSummary />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/libs/apex-chart.scss";
</style>
