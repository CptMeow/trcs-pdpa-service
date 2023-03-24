<script setup lang="ts">
const moreList = [
  { title: 'Share', value: 'Share' },
  { title: 'Refresh', value: 'Refresh' },
  { title: 'Update', value: 'Update' },
]

const selectedPaymentMethod = ref('paypal')
const cardNumber = ref('')
const expiryDate = ref('')
const cvvCode = ref('')
const name = ref('')
const isCardSaved = ref(true)
</script>

<template>
  <VCard title="Payment Data">
    <template #append>
      <div>
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VCardText>
      <span class="text-sm">Price</span>
      <div class="d-flex align-center gap-2 mb-4">
        <h1 class="text-h6 text-primary">
          $455.60
        </h1>
        <VChip
          label
          color="primary"
          density="compact"
        >
          35% OFF
        </VChip>
      </div>

      <VForm @submit.prevent="() => {}">
        <p class="text-sm mb-2">
          Choose payment method:
        </p>
        <VRow>
          <!-- 👉 Radio Group -->
          <VCol cols="12">
            <VRadioGroup v-model="selectedPaymentMethod">
              <VRow>
                <VCol
                  cols="12"
                  sm="6"
                >
                  <VRadio
                    label="Paypal"
                    value="paypal"
                    class="border rounded px-3"
                  />
                </VCol>
                <VCol
                  cols="12"
                  sm="6"
                >
                  <VRadio
                    label="Credit Card"
                    value="credit-card"
                    class="border rounded px-3"
                  />
                </VCol>
              </VRow>
            </VRadioGroup>
          </VCol>

          <VCol cols="12">
            <VTextField
              v-model="cardNumber"
              density="compact"
              placeholder="Card Number"
              type="number"
            />
          </VCol>

          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="expiryDate"
              placeholder="Expiry Date"
              density="compact"
            />
          </VCol>

          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="cvvCode"
              placeholder="CVV Code"
              density="compact"
              type="number"
            />
          </VCol>

          <VCol cols="12">
            <VTextField
              v-model="name"
              placeholder=" Name"
              density="compact"
            />
          </VCol>

          <VCol cols="12">
            <VCheckbox
              v-model="isCardSaved"
              label="Save Card?"
            />
          </VCol>

          <VCol cols="12">
            <VBtn
              block
              type="submit"
            >
              Add Card
            </VBtn>
          </VCol>
        </VRow>
      </VForm>
    </VCardText>
  </VCard>
</template>
