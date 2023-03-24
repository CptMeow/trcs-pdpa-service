<script setup lang="ts">
import CrmCustomerRatings from '@/views/dashboard/crm/CrmCustomerRatings.vue'
import CrmCustomerTable from '@/views/dashboard/crm/CrmCustomerTable.vue'
import CrmEarningReport from '@/views/dashboard/crm/CrmEarningReport.vue'
import CrmGeneratedLeads from '@/views/dashboard/crm/CrmGeneratedLeads.vue'
import CrmSalesActivity from '@/views/dashboard/crm/CrmSalesActivity.vue'
import CrmSalesAnalytics from '@/views/dashboard/crm/CrmSalesAnalytics.vue'
import CrmSalesStats from '@/views/dashboard/crm/CrmSalesStats.vue'
import CrmTeamMembers from '@/views/dashboard/crm/CrmTeamMembers.vue'
import CrmTopProducts from '@/views/dashboard/crm/CrmTopProducts.vue'
import CardAdvanceSalesByCountries from '@/views/pages/cards/card-advance/CardAdvanceSalesByCountries.vue'
import cube from '@images/cards/cube-secondary.png'
import desktopWarning from '@images/cards/desktop-warning.png'
</script>

<template>
  <VRow>
    <!-- 👉 Customer Ratings -->
    <VCol
      cols="12"
      sm="6"
      lg="4"
    >
      <CrmCustomerRatings />
    </VCol>

    <!-- 👉 Sales Activity -->
    <VCol
      cols="12"
      sm="6"
      lg="4"
    >
      <CrmSalesActivity />
    </VCol>

    <VCol
      cols="12"
      lg="4"
    >
      <VRow>
        <!-- 👉 Session chart -->
        <VCol
          cols="12"
          sm="6"
          md="3"
          lg="6"
        >
          <CardStatisticsVertical
            title="Revenue"
            :image="desktopWarning"
            stats="$42,389"
            :change="52.18"
          />
        </VCol>

        <!-- 👉 Statistics Vertical card -->
        <VCol
          cols="12"
          sm="6"
          md="3"
          lg="6"
        >
          <CardStatisticsVertical
            title="Order"
            :image="cube"
            stats="$1,286"
            :change="-13.24"
          />
        </VCol>

        <!-- 👉 Generated Leads card -->
        <VCol
          cols="12"
          md="6"
          lg="12"
        >
          <CrmGeneratedLeads />
        </VCol>
      </VRow>
    </VCol>

    <!-- 👉 Top Products -->
    <VCol
      cols="12"
      lg="8"
    >
      <CrmTopProducts />
    </VCol>

    <!-- 👉 Earning Report -->
    <VCol
      cols="12"
      sm="6"
      lg="4"
    >
      <CrmEarningReport />
    </VCol>

    <!-- 👉 Sales Analytics -->
    <VCol
      cols="12"
      sm="6"
      lg="4"
    >
      <CrmSalesAnalytics />
    </VCol>

    <!-- 👉 Sales By Countries -->
    <VCol
      cols="12"
      sm="6"
      lg="4"
    >
      <CardAdvanceSalesByCountries />
    </VCol>

    <!-- 👉 Sales Stats -->
    <VCol
      cols="12"
      sm="6"
      lg="4"
    >
      <CrmSalesStats />
    </VCol>

    <!-- 👉 Team Members -->
    <VCol
      cols="12"
      md="5"
    >
      <CrmTeamMembers />
    </VCol>

    <!-- 👉 Customer Table -->
    <VCol
      cols="12"
      md="7"
    >
      <CrmCustomerTable />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/libs/apex-chart.scss";
</style>
