<script setup lang="ts">
import briefcase from '@images/cards/briefcase.png'
import logoCreditCard2 from '@images/cards/logo-credit-card-2.png'
import logoMastercardSmall from '@images/cards/logo-mastercard-small.png'

const savedCards = [
  {
    logo: logoMastercardSmall,
    type: 'Credit card',
    number: '2566 xxxx xxxx 8908',
  },
  {
    logo: logoCreditCard2,
    type: 'Credit card',
    number: '8990 xxxx xxxx 6852',
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
    <!-- SECTION Card Header and Menu -->
    <VCardItem>
      <!-- 👉 Title -->
      <VCardTitle>Upgrade Your Plan</VCardTitle>

      <!-- 👉 menu -->
      <template #append>
        <div class="me-n3 mt-n2">
          <MoreBtn :menu-list="moreList" />
        </div>
      </template>
    </VCardItem>
    <!-- !SECTION -->

    <VCardText>
      <p>
        Please make the payment to start enjoying all the features of our premium plan as soon as possible.
      </p>

      <!-- SECTION Upgrade plan banner -->
      <div class="plan-upgrade-banner pa-3 d-flex rounded align-center mb-4">
        <VAvatar
          rounded
          size="40"
          class="plan-details me-2 border-opacity-100 border-primary me-3"
        >
          <VImg
            :src="briefcase"
            alt="briefcase"
            height="40"
            width="40"
          />
        </VAvatar>

        <div class="d-flex flex-column">
          <p class="text-base font-weight-medium mb-0">
            Business
          </p>
          <span class="text-primary text-xs">Upgrade Plan</span>
        </div>
        <VSpacer />
        <div class="d-flex align-center">
          <sup>
            <h6 class="text-xs font-weight-regular">$</h6>
          </sup>
          <span class="text-h5">2,124</span>
          <sub>
            <h6 class="text-sm font-weight-regular">/Year</h6>
          </sub>
        </div>
      </div>
      <!-- !SECTION -->

      <!-- SECTION Payment Details -->
      <h6 class="text-h6 mb-4">
        Payment details
      </h6>
      <VList class="card-list pt-1">
        <VListItem
          v-for="card in savedCards"
          :key="card.logo"
          class="mb-3"
        >
          <!-- 👉 Avatar -->
          <template #prepend>
            <VAvatar
              rounded
              start
              :size="45"
              :image="card.logo"
            />
          </template>

          <!-- 👉 Title and Subtitle -->

          <VListItemTitle class="text-sm font-weight-medium mb-1">
            {{ card.type }}
          </VListItemTitle>
          <VListItemSubtitle class="text-xs">
            {{ card.number }}
          </VListItemSubtitle>

          <!-- 👉 Action -->
          <template #append>
            <VListItemAction>
              <VTextField
                density="compact"
                label="CVV"
                style="width: 5rem;"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <!-- 👉 Add Payment  -->
        <VListItem class="mb-3">
          <a
            href="javascript:void(0)"
            class="text-sm font-weight-semibold"
          >Add Payment Method</a>
        </VListItem>
      </VList>
      <!-- !SECTION -->

      <!-- 👉 Email -->
      <VForm class="mt-4">
        <VRow>
          <VCol cols="12">
            <VTextField
              density="compact"
              placeholder="Email Address"
              class="mb-3"
            />

            <VBtn block>
              Process To Payment
            </VBtn>
          </VCol>
        </VRow>
      </VForm>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.plan-upgrade-banner {
  border: 1px solid rgb(var(--v-theme-primary));
}

.card-list {
  --v-card-list-gap: 0;
}
</style>
