<script setup lang="ts">
import ECommerceAward from '@/views/dashboard/ecommerce/EcommerceAward.vue'
import EcommerceConversionRate from '@/views/dashboard/ecommerce/EcommerceConversionRate.vue'
import EcommerceExpenses from '@/views/dashboard/ecommerce/EcommerceExpenses.vue'
import EcommerceExpensesBar from '@/views/dashboard/ecommerce/EcommerceExpensesBar.vue'
import EcommerceNewVisitors from '@/views/dashboard/ecommerce/EcommerceNewVisitors.vue'
import EcommercePerformance from '@/views/dashboard/ecommerce/EcommercePerformance.vue'
import EcommerceProfit from '@/views/dashboard/ecommerce/EcommerceProfit.vue'
import EcommerceSales from '@/views/dashboard/ecommerce/EcommerceSales.vue'
import EcommerceTable from '@/views/dashboard/ecommerce/EcommerceTable.vue'
import EcommerceTotalBalance from '@/views/dashboard/ecommerce/EcommerceTotalBalance.vue'
import EcommerceTotalIncome from '@/views/dashboard/ecommerce/EcommerceTotalIncome.vue'
import card from '@images/cards/credit-card-primary.png'
import desktop from '@images/cards/desktop-warning.png'
import wallet from '@images/cards/wallet-info.png'
</script>

<template>
  <VRow>
    <!-- 👉 Award card -->
    <VCol
      cols="12"

      md="4"
    >
      <ECommerceAward />
    </VCol>

    <!-- 👉 New Visitors card -->
    <VCol
      cols="12"
      md="8"
    >
      <EcommerceNewVisitors />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <VRow>
        <!-- 👉 Statistics Vertical  -->
        <VCol
          cols="12"
          sm="6"
        >
          <CardStatisticsVertical
            title="Sales"
            :image="wallet"
            stats="$4,679"
            :change="28.14"
          />
        </VCol>

        <!-- 👉 Profit -->
        <VCol
          cols="12"
          sm="6"
        >
          <EcommerceProfit />
        </VCol>

        <!-- 👉 Expenses -->
        <VCol
          cols="12"
          sm="6"
        >
          <EcommerceExpenses />
        </VCol>

        <!-- 👉 Transactions -->
        <VCol
          cols="12"
          sm="6"
        >
          <CardStatisticsVertical
            title="Transactions"
            :image="card"
            stats="$14,854"
            :change="62"
          />
        </VCol>
      </VRow>
    </VCol>

    <!-- 👉 Total Income -->
    <VCol
      cols="12"
      md="8"
    >
      <EcommerceTotalIncome />
    </VCol>

    <!-- 👉 Performance -->
    <VCol
      cols="12"
      sm="6"
      md="4"
    >
      <EcommercePerformance />
    </VCol>

    <!-- 👉 Conversion Rate -->
    <VCol
      cols="12"
      md="4"
      sm="6"
    >
      <EcommerceConversionRate />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <VRow>
        <!-- 👉 Revenue card -->
        <VCol
          cols="12"
          sm="6"
        >
          <CardStatisticsVertical
            v-bind="{
              title: 'Revenue',
              image: desktop,
              stats: '$42,389',
              change: 52.18,
            }"
          />
        </VCol>

        <!-- 👉 Sales card -->
        <VCol
          cols="12"
          sm="6"
        >
          <EcommerceSales />
        </VCol>

        <!-- 👉 Expenses Bar -->
        <VCol cols="12">
          <EcommerceExpensesBar />
        </VCol>
      </VRow>
    </VCol>

    <!-- 👉 Table -->
    <VCol
      cols="12"
      md="8"
    >
      <EcommerceTable />
    </VCol>

    <!-- 👉 Total Balance -->
    <VCol
      cols="12"
      md="4"
    >
      <EcommerceTotalBalance />
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/libs/apex-chart.scss";
</style>
