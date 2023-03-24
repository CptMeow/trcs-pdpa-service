<script setup lang="ts">
import australia from '@images/icons/flags/australia.png'
import brazil from '@images/icons/flags/brazil.png'
import china from '@images/icons/flags/china.png'
import india from '@images/icons/flags/india.png'
import usa from '@images/icons/flags/usa.png'
import cent from '@images/icons/logo/cent.png'
import chrome from '@images/icons/logo/chrome.png'
import edge from '@images/icons/logo/edge.png'
import firefox from '@images/icons/logo/firefox.png'
import mac from '@images/icons/logo/mac.png'
import opera from '@images/icons/logo/opera.png'
import safari from '@images/icons/logo/safari.png'
import ubuntu from '@images/icons/logo/ubuntu.png'
import windows from '@images/icons/logo/windows.png'

type Tabs = 'browser' | 'system' | 'country'

const tabs = ref<Tabs>('browser')

interface TableContent {
  visits: string | number
  color: string
  browser?: string
  system?: string
  country?: string
  percentage: number
  src: string
}

const browserData: TableContent[] = [
  {
    visits: '8.92k',
    color: 'success',
    browser: 'Chrome',
    percentage: 64.91,
    src: chrome,
  },
  {
    visits: '1.29k',
    color: 'primary',
    browser: 'Safari',
    percentage: 19.03,
    src: safari,
  },
  {
    visits: 328,
    color: 'info',
    percentage: 32.6,
    browser: 'Firefox',
    src: firefox,
  },
  {
    visits: 142,
    browser: 'Edge',
    color: 'warning',
    percentage: 39.9,
    src: edge,
  },
  {
    visits: 85,
    color: 'error',
    browser: 'Opera',
    percentage: 21.2,
    src: opera,
  },
]

const osData: TableContent[] = [
  {
    color: 'success',
    percentage: 61.5,
    visits: '475.26k',
    system: 'Windows',
    src: windows,
  },
  {
    system: 'Mac',
    color: 'primary',
    visits: '89.12k',
    percentage: 15.67,
    src: mac,
  },
  {
    color: 'info',
    visits: '38.68k',
    system: 'Ubuntu',
    percentage: 58.2,
    src: ubuntu,
  },
  {
    visits: '8.34k',
    color: 'warning',
    system: 'Chrome',
    percentage: 32.5,
    src: chrome,
  },
  {
    color: 'error',
    system: 'Cent',
    visits: '2.25k',
    percentage: 17.6,
    src: cent,
  },
]

const countryData: TableContent[] = [
  {
    country: 'USA',
    color: 'success',
    visits: '87.24k',
    percentage: 38.12,
    src: usa,
  },
  {
    color: 'primary',
    visits: '42.69k',
    country: 'Brazil',
    percentage: 28.23,
    src: brazil,
  },
  {
    color: 'info',
    country: 'India',
    visits: '12.58k',
    percentage: 13.82,
    src: india,
  },
  {
    visits: '4.13k',
    color: 'warning',
    percentage: 12.72,
    country: 'Australia',
    src: australia,
  },
  {
    color: 'error',
    visits: '2.21k',
    country: 'China',
    percentage: 11.11,
    src: china,
  },
]

const tableData = computed(() => {
  return tabs.value === 'browser' ? browserData : tabs.value === 'system' ? osData : countryData
})
</script>

<template>
  <VCard>
    <VCardItem>
      <VTabs
        v-model="tabs"
        class="v-tabs-pill"
      >
        <VTab value="browser">
          Browser
        </VTab>
        <VTab value="system">
          Operating System
        </VTab>
        <VTab value="country">
          Country
        </VTab>
      </VTabs>
    </VCardItem>

    <VDivider />

    <VTable class="text-no-wrap">
      <thead>
        <tr class="text-uppercase text-medium-emphasis">
          <th
            scope="col"
            class="table-spacing border-0"
          >
            NO
          </th>
          <th
            scope="col"
            class="table-spacing border-0"
          >
            {{ tabs }}
          </th>
          <th
            scope="col"
            class="table-spacing border-0"
          >
            VISITS
          </th>
          <th
            scope="col"
            class="table-spacing border-0 text-center"
          >
            DATA IN PERCENTAGE
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(data, index) in tableData"
          :key="data.visits"
        >
          <td class="table-spacing border-0">
            {{ index + 1 }}
          </td>
          <td class="border-0">
            <div class="d-flex align-center gap-3">
              <div>
                <VImg
                  :src="data.src"
                  width="24"
                  height="24"
                />
              </div>

              <span class="text-base">{{ data[tabs] }}</span>
            </div>
          </td>
          <td class="border-0">
            <span class="text-base">{{ data.visits }}</span>
          </td>
          <td class="text-center border-0">
            <div class="d-flex align-center gap-3">
              <VProgressLinear
                rounded
                rounded-bar
                height="8"
                :model-value="data.percentage"
                :color="data.color"
                bg-color="default"
              />
              <span>{{ data.percentage }}%</span>
            </div>
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>

<style lang="scss" scoped>
.table-spacing {
  padding-block: 1.03rem !important;
  padding-inline: 1.5rem !important;
}
</style>
