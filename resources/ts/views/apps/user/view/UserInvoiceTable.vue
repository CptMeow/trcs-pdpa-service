<script setup lang="ts">
import type { Invoice } from '@/@fake-db/types'
import { useInvoiceStore } from '@/views/apps/invoice/useInvoiceStore'

// 👉 Store
const invoiceListStore = useInvoiceStore()

const searchQuery = ref('')
const selectedStatus = ref('')
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalInvoices = ref(0)
const invoices = ref<Invoice[]>([])
const selectedRows = ref<string[]>([])

// 👉 Fetch Invoices
watchEffect(() => {
  invoiceListStore.fetchInvoices(
    {
      q: searchQuery.value,
      status: selectedStatus.value,
      perPage: rowPerPage.value,
      currentPage: currentPage.value,
    },
  ).then(response => {
    invoices.value = response.data.invoices
    totalPage.value = response.data.totalPage
    totalInvoices.value = response.data.totalInvoices
  }).catch(error => {
    console.log(error)
  })
})

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = invoices.value.length ? ((currentPage.value - 1) * rowPerPage.value) + 1 : 0
  const lastIndex = invoices.value.length + ((currentPage.value - 1) * rowPerPage.value)

  return `${firstIndex}-${lastIndex} of ${totalInvoices.value}`
})

// 👉 Invoice status variant resolver
const resolveInvoiceStatusVariantAndIcon = (status: string) => {
  if (status === 'Partial Payment')
    return { variant: 'warning', icon: 'bx-line-chart' }
  if (status === 'Paid')
    return { variant: 'success', icon: 'bx-check' }
  if (status === 'Downloaded')
    return { variant: 'info', icon: 'bx-down-arrow-alt' }
  if (status === 'Draft')
    return { variant: 'secondary', icon: 'bx-save' }
  if (status === 'Sent')
    return { variant: 'primary', icon: 'bx-envelope' }
  if (status === 'Past Due')
    return { variant: 'error', icon: 'bx-error-circle' }

  return { variant: 'secondary', icon: 'bx-x' }
}
</script>

<template>
  <VCard
    v-if="invoices"
    id="invoice-list"
    title="Invoice List"
  >
    <template #append>
      <VBtn
        color="primary"
        append-icon="bx-chevron-down"
      >
        Export
        <VMenu activator="parent">
          <VList density="compact">
            <VListItem
              v-for="(item, index) in ['PDF', 'XLSX', 'CSV']"
              :key="index"
              :value="index"
            >
              <VListItemTitle>{{ item }}</VListItemTitle>
            </VListItem>
          </VList>
        </VMenu>
      </VBtn>
    </template>

    <VDivider />

    <!-- SECTION Table -->
    <VTable class="text-no-wrap">
      <!-- 👉 Table head -->
      <thead>
        <tr>
          <th scope="col">
            #ID
          </th>
          <th scope="col">
            <VIcon icon="bx-trending-up" />
          </th>
          <th
            scope="col"
            class="text-center"
          >
            TOTAL
          </th>
          <th
            scope="col"
            class="text-center"
          >
            ISSUED DATE
          </th>
          <th scope="col">
            <span class="ms-2">ACTIONS</span>
          </th>
        </tr>
      </thead>

      <!-- 👉 Table Body -->
      <tbody>
        <tr
          v-for="invoice in invoices"
          :key="invoice.id"
        >
          <!-- 👉 Id -->
          <td>
            <RouterLink :to="{ name: 'apps-invoice-preview-id', params: { id: invoice.id } }">
              #{{ invoice.id }}
            </RouterLink>
          </td>

          <!-- 👉 Trending -->
          <td>
            <VTooltip>
              <template #activator="{ props }">
                <VAvatar
                  :size="34"
                  v-bind="props"
                  :color="resolveInvoiceStatusVariantAndIcon(invoice.invoiceStatus).variant"
                  variant="tonal"
                >
                  <VIcon
                    :size="20"
                    :icon="resolveInvoiceStatusVariantAndIcon(invoice.invoiceStatus).icon"
                  />
                </VAvatar>
              </template>
              <p class="mb-0">
                {{ invoice.invoiceStatus }}
              </p>
              <p class="mb-0">
                Balance: {{ invoice.balance }}
              </p>
              <p class="mb-0">
                Due date: {{ invoice.dueDate }}
              </p>
            </VTooltip>
          </td>

          <!-- 👉 total -->
          <td class="text-center">
            ${{ invoice.total }}
          </td>

          <!-- 👉 Date -->
          <td class="text-center">
            {{ invoice.issuedDate }}
          </td>

          <!-- 👉 Actions -->
          <td style="width: 7.5rem;">
            <IconBtn>
              <VIcon icon="bx-send" />
            </IconBtn>

            <IconBtn :to="{ name: 'apps-invoice-preview-id', params: { id: invoice.id } }">
              <VIcon icon="bx-show" />
            </IconBtn>

            <IconBtn>
              <VIcon icon="bx-download" />
            </IconBtn>
          </td>
        </tr>
      </tbody>

      <!-- 👉 table footer  -->
      <tfoot v-show="!invoices.length">
        <tr>
          <td
            colspan="8"
            class="text-center text-body-1"
          >
            No data available
          </td>
        </tr>
      </tfoot>
    </VTable>
    <!-- !SECTION -->

    <VDivider />

    <!-- SECTION Pagination -->
    <VCardText class="d-flex flex-wrap justify-end gap-4 pa-2">
      <!-- 👉 Rows per page -->
      <div
        class="d-flex align-center"
        style="width: 171px;"
      >
        <span class="text-no-wrap text-sm me-3">Rows per page:</span>
        <VSelect
          v-model="rowPerPage"
          density="compact"
          class="per-page-select"
          variant="plain"
          :items="[10, 20, 30, 50]"
        />
      </div>

      <!-- 👉 Pagination and pagination meta -->
      <div class="d-flex align-center">
        <h6 class="text-sm font-weight-regular">
          {{ paginationData }}
        </h6>
      </div>
      <VPagination
        v-model="currentPage"
        size="small"
        :total-visible="1"
        :length="totalPage"
        @next="selectedRows = []"
        @prev="selectedRows = []"
      />
    </VCardText>
    <!-- !SECTION -->
  </VCard>
</template>

<style lang="scss">
#invoice-list {
  .invoice-list-status {
    inline-size: 15rem;
  }

  .invoice-list-search {
    inline-size: 12rem;
  }
}

.per-page-select {
  margin-block: auto;

  .v-field__input {
    align-items: center;
    padding: 2px;
    font-size: 14px;
  }

  .v-field__append-inner {
    align-items: center;
    padding: 0;
    margin-inline-start: -2.5rem;

    .v-icon {
      margin-inline-start: 0 !important;
    }
  }
}
</style>
