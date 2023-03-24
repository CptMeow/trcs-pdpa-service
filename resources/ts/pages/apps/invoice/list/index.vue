<script setup lang="ts">
import type { Invoice } from '@/@fake-db/types'
import { useInvoiceStore } from '@/views/apps/invoice/useInvoiceStore'
import { avatarText } from '@core/utils/formatters'

// 👉 Store
const invoiceListStore = useInvoiceStore()

const searchQuery = ref('')
const dateRange = ref('')
const selectedStatus = ref()
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalInvoices = ref(0)
const invoices = ref<Invoice[]>([])
const selectedRows = ref<string[]>([])
const selectAllInvoice = ref(false)

// 👉 Fetch Invoices
watchEffect(() => {
  const [start, end] = dateRange.value ? dateRange.value.split('to') : ''

  invoiceListStore.fetchInvoices(
    {
      q: searchQuery.value,
      status: selectedStatus.value,
      perPage: rowPerPage.value,
      currentPage: currentPage.value,
      startDate: start,
      endDate: end,
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

// 👉 Invoice balance variant resolver
const resolveInvoiceBalanceVariant = (balance: string | number, total: number) => {
  if (balance === total)
    return { status: 'Unpaid', chip: { color: 'error' } }

  if (balance === 0)
    return { status: 'Paid', chip: { color: 'success' } }

  return { status: balance, chip: { variant: 'text' } }
}

// 👉 Invoice status variant resolver
const resolveInvoiceStatusVariantAndIcon = (status: string) => {
  if (status === 'Partial Payment')
    return { variant: 'warning', icon: 'bx-adjust' }
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

// 👉 Add/Remove all checkbox ids in/from array
const selectUnselectAll = () => {
  selectAllInvoice.value = !selectAllInvoice.value
  if (selectAllInvoice.value) {
    invoices.value.forEach(invoice => {
      if (!selectedRows.value.includes(`check${invoice.id}`))
        selectedRows.value.push(`check${invoice.id}`)
    })
  }
  else {
    selectedRows.value = []
  }
}

// 👉 watch if checkbox array is empty all checkbox should be uncheck
watch(selectedRows, () => {
  if (!selectedRows.value.length)
    selectAllInvoice.value = false
}, { deep: true })

// 👉 Add/Remove individual checkbox in/from array
const addRemoveIndividualCheckbox = (checkID: string) => {
  if (selectedRows.value.includes(checkID)) {
    const index = selectedRows.value.indexOf(checkID)

    selectedRows.value.splice(index, 1)
  }
  else {
    selectedRows.value.push(checkID)
    selectAllInvoice.value = true
  }
}

const computedMoreList = computed(() => {
  return (paramId: number) => ([
    { title: 'Download', value: 'download', prependIcon: 'bx-download' },
    {
      title: 'Edit',
      value: 'edit',
      prependIcon: 'bx-pencil',
      to: { name: 'apps-invoice-edit-id', params: { id: paramId } },
    },
    { title: 'Duplicate', value: 'duplicate', prependIcon: 'bx-layer' },
  ])
})
</script>

<template>
  <section v-if="invoices">
    <!-- 👉 Invoice Filters  -->
    <VCard
      title="Filters"
      class="mb-6"
    >
      <VCardText>
        <VRow>
          <!-- 👉 Status filter -->
          <VCol
            cols="12"
            md="6"
          >
            <VSelect
              v-model="selectedStatus"
              label="Select Status"
              clearable
              clear-icon="bx-x"
              :items="['Downloaded', 'Draft', 'Sent', 'Paid', 'Partial Payment', 'Past Due']"
            />
          </VCol>

          <!-- 👉 DateRange filter -->
          <VCol
            cols="12"
            md="6"
          >
            <AppDateTimePicker
              v-model="dateRange"
              label="Invoice Date"
              clear-icon="bx-x"
              clearable
              :config="{ mode: 'range' }"
            />
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <VCard id="invoice-list">
      <VCardText class="d-flex align-center flex-wrap gap-4">
        <!-- 👉 Actions  -->
        <div class="me-3">
          <VSelect
            density="compact"
            label="Actions"
            :items="['Delete', 'Edit', 'Send']"
            class="invoice-list-actions"
            :disabled="!selectedRows.length"
          />
        </div>

        <VSpacer />

        <div class="d-flex align-center flex-wrap gap-6">
          <!-- 👉 Search  -->
          <div class="invoice-list-search">
            <VTextField
              v-model="searchQuery"
              placeholder="Search Invoice"
              density="compact"
            />
          </div>

          <!-- 👉 Create invoice -->
          <VBtn :to="{ name: 'apps-invoice-add' }">
            Create invoice
          </VBtn>
        </div>
      </VCardText>

      <VDivider />

      <!-- SECTION Table -->
      <VTable class="text-no-wrap">
        <!-- 👉 Table head -->
        <thead>
          <tr>
            <!-- 👉 Check/Uncheck all checkbox -->
            <th
              scope="col"
              class="text-center"
            >
              <div style="width: 1rem;">
                <VCheckbox
                  :model-value="selectAllInvoice"
                  :indeterminate="(invoices.length !== selectedRows.length) && !!selectedRows.length"
                  @click="selectUnselectAll"
                />
              </div>
            </th>
            <th scope="col">
              #ID
            </th>
            <th
              scope="col"
            >
              <VIcon icon="bx-trending-up" />
            </th>
            <th scope="col">
              CLIENT
            </th>
            <th
              scope="col"
            >
              TOTAL
            </th>
            <th scope="col">
              DATE
            </th>
            <th
              scope="col"
            >
              BALANCE
            </th>
            <th
              scope="col"
            >
              ACTIONS
            </th>
          </tr>
        </thead>

        <!-- 👉 Table Body -->
        <tbody>
          <tr
            v-for="invoice in invoices"
            :key="invoice.id"
          >
            <!-- 👉 Individual checkbox -->
            <td>
              <div style="width: 1rem;">
                <VCheckbox
                  :id="`check${invoice.id}`"
                  :model-value="selectedRows.includes(`check${invoice.id}`)"
                  @click="addRemoveIndividualCheckbox(`check${invoice.id}`)"
                />
              </div>
            </td>

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

            <!-- 👉 Client Avatar and Email -->
            <td>
              <div class="d-flex align-center">
                <VAvatar
                  size="34"
                  :color="resolveInvoiceStatusVariantAndIcon(invoice.invoiceStatus).variant"
                  variant="tonal"
                  class="me-3"
                >
                  <VImg
                    v-if="invoice.avatar.length"
                    :src="invoice.avatar"
                  />
                  <span
                    v-else
                    class="text-sm"
                  >{{ avatarText(invoice.client.name) }}</span>
                </VAvatar>
                <div class="d-flex flex-column">
                  <h6 class="text-sm font-weight-medium mb-0">
                    {{ invoice.client.name }}
                  </h6>
                  <span class="text-caption">{{ invoice.client.companyEmail }}</span>
                </div>
              </div>
            </td>

            <!-- 👉 total -->
            <td>
              ${{ invoice.total }}
            </td>

            <!-- 👉 Date -->
            <td>
              {{ invoice.issuedDate }}
            </td>

            <!-- 👉 Balance -->
            <td class="text-center">
              <VChip
                v-bind="resolveInvoiceBalanceVariant(invoice.balance, invoice.total).chip"
                density="compact"
              >
                {{ resolveInvoiceBalanceVariant(invoice.balance, invoice.total).status }}
              </VChip>
            </td>

            <!-- 👉 Actions -->
            <td style="width: 8rem;">
              <IconBtn>
                <VIcon icon="bx-trash-alt" />
              </IconBtn>

              <IconBtn :to="{ name: 'apps-invoice-preview-id', params: { id: invoice.id } }">
                <VIcon icon="bx-show" />
              </IconBtn>

              <MoreBtn
                :menu-list="computedMoreList(invoice.id)"
                item-props
              />
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
            class="small-select"
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
  </section>
</template>

<style lang="scss">
#invoice-list {
  .invoice-list-actions {
    inline-size: 8rem;
  }

  .invoice-list-search {
    inline-size: 12rem;
  }
}

.small-select {
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
