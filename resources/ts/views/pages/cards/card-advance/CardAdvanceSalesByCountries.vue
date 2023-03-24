<script setup lang="ts">
import asFlag from '@images/icons/flags/australia.png'
import bgFlag from '@images/icons/flags/belgium.png'
import brFlag from '@images/icons/flags/brazil.png'
import cnFlag from '@images/icons/flags/china.png'
import inFlag from '@images/icons/flags/india.png'
import usFlag from '@images/icons/flags/usa.png'

const salesByCountries = [
  {
    flag: usFlag,
    amount: '$8,656k',
    country: 'United states of america',
    change: 25.8,
    sales: '894k',
  },
  {
    flag: brFlag,
    amount: '$2,415k',
    country: 'Brazil',
    change: -6.2,
    sales: '645k',
  },
  {
    flag: inFlag,
    amount: '$865k',
    country: 'India',
    change: 12.4,
    sales: '148k',
  },
  {
    flag: asFlag,
    amount: '$745k',
    country: 'Australia',
    change: -11.9,
    sales: '86k',
  },
  {
    flag: bgFlag,
    amount: '$45k',
    country: 'Belgium',
    change: 16.2,
    sales: '42k',
  },
  {
    flag: cnFlag,
    amount: '$12k',
    country: 'China',
    change: 14.8,
    sales: '8k',
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
        Sales by Countries
      </VCardTitle>
      <VCardSubtitle>Monthly Sales Overview</VCardSubtitle>

      <template #append>
        <div class="me-n3 mt-n8">
          <MoreBtn :menu-list="moreList" />
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <VList class="card-list">
        <VListItem
          v-for="data in salesByCountries"
          :key="data.country"
        >
          <template #prepend>
            <VAvatar
              size="40"
              variant="tonal"
              :image="data.flag"
              class="me-3"
            />
          </template>

          <VListItemTitle class="d-flex align-center mb-1">
            <span>{{ data.amount }}</span>
            <div
              class="d-flex align-center"
              :class="data.change > 0 ? 'text-success' : 'text-error'"
            >
              <VIcon
                size="24"
                :icon="data.change > 0 ? 'bx-chevron-up' : 'bx-chevron-down'"
                class="mx-1"
              />
              <span class="text-sm">
                {{ data.change }}%
              </span>
            </div>
          </VListItemTitle>

          <VListItemSubtitle>
            {{ data.country }}
          </VListItemSubtitle>

          <template #append>
            <h4 class="font-weight-regular">
              {{ data.sales }}
            </h4>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

  <style lang="scss" scoped>
  .card-list {
    --v-card-list-gap: 1.2rem;
  }
  </style>
