<script setup lang="ts">
const moreList = [
  { title: 'Share', value: 'Share' },
  { title: 'Refresh', value: 'Refresh' },
  { title: 'Update', value: 'Update' },
]

const businesses = ref([
  {
    name: 'Branding',
    amount: '+$30',
    color: 'success',
    selected: false,
  },
  {
    name: 'Marketing',
    amount: '+$75',
    color: 'primary',
    selected: true,
  },
  {
    name: 'App Building',
    amount: '+$125',
    color: 'success',
    selected: false,
  },
  {
    name: 'SEO',
    amount: '+$48',
    color: 'primary',
    selected: false,
  },
])

const addRemoveSelected = (value: string) => {
  businesses.value = businesses.value.map(item => {
    if (item.name === value)
      item.selected = !item.selected

    return item
  })
}
</script>

<template>
  <VCard title="For Business Sharks">
    <template #append>
      <div class="me-n3 mt-n2">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VCardText>
      <p>Here, I focus on a range of items and features that we use in life without them.</p>
      <h6 class="text-base font-weight-regular">
        Basic price is $30
      </h6>

      <VList>
        <VListItem
          v-for="(item, index) in businesses"
          :key="item.name"
          :class="`text-medium-emphasis border rounded cursor-pointer ${index > 0 ? 'mt-4' : ''}`"
          :style="item.selected ? 'border-color: rgb(var(--v-theme-primary)) !important' : ''"
          @click="addRemoveSelected(item.name)"
        >
          <template #prepend>
            <VCheckbox
              v-model="item.selected"
              class="me-1"
            />
          </template>
          <VListItemTitle>{{ item.name }}</VListItemTitle>

          <template #append>
            <VChip
              label
              density="compact"
              :color="item.color"
            >
              {{ item.amount }}
            </VChip>
          </template>
        </VListItem>
      </VList>

      <div class="my-2">
        <div class="d-flex justify-space-between font-weight-semibold mb-3">
          <span>Vat Taxes</span>
          <span>$24</span>
        </div>
        <div class="d-flex justify-space-between font-weight-semibold">
          <span>Total Amount</span>
          <span class="text-primary text-xl">$99</span>
        </div>
      </div>

      <VBtn block>
        Purchase
      </VBtn>
    </VCardText>
  </VCard>
</template>
