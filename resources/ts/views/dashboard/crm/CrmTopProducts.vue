<script setup lang="ts">
import appleIPhone from '@images/cards/apple-iPhone.png'
import beatsHeadphone from '@images/cards/beats-headphone.png'
import desktopWarning from '@images/cards/desktop-warning.png'
import fitbitWatch from '@images/cards/fitbit-watch.png'
import googlePixel from '@images/cards/google-pixel.png'
import hpEnvy from '@images/cards/hp-envy.png'
import microsoftSurface from '@images/cards/microsoft-surface.png'
import onePlusNordError from '@images/cards/oneplus-nord-error.png'
import oneplusNordSuccess from '@images/cards/oneplus-nord-success.png'
import xiaomiBand from '@images/cards/xiaomi-band.png'

const sales = [
  {
    title: 'Oneplus Nord',
    subtitle: 'Oneplus',
    amount: '$98,348',
    logo: onePlusNordError,
  },
  {
    title: 'Smart Band 4',
    subtitle: 'Xiaomi',
    amount: '$15,459',
    logo: xiaomiBand,
  },
  {
    title: 'Surface Pro X',
    subtitle: 'Microsoft',
    amount: '$4,589',
    logo: microsoftSurface,
  },
  {
    title: 'iPhone 13',
    subtitle: 'Apple',
    amount: '$84,345',
    logo: appleIPhone,
  },
  {
    title: 'Bluetooth Earphone',
    subtitle: 'Beats',
    amount: '$10,3748',
    logo: beatsHeadphone,
  },
]

const volumes = [
  {
    subtitle: 'HP',
    amount: '12.4k',
    title: 'ENVY Laptop',
    differenceNumber: 12.4,
    logo: hpEnvy,
  },
  {
    title: 'Apple',
    amount: '74.9k',
    subtitle: 'iMac Pro',
    differenceNumber: -8.5,
    logo: desktopWarning,
  },
  {
    amount: '4.4k',
    subtitle: 'Fitbit',
    title: 'Smart Watch',
    differenceNumber: 17.6,
    logo: fitbitWatch,
  },
  {
    amount: '12.34k',
    subtitle: 'Oneplus',
    title: 'Oneplus Nord',
    differenceNumber: 13.9,
    logo: oneplusNordSuccess,
  },
  {
    amount: '8.65k',
    title: 'Pixel 4a',
    subtitle: 'Google',
    differenceNumber: -11.8,
    logo: googlePixel,
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
    <VRow no-gutters>
      <VCol
        cols="12"
        sm="6"
        :class="$vuetify.display.smAndUp ? 'border-e' : 'border-b'"
      >
        <VCardItem>
          <VCardTitle>Top Products by <span class="text-primary">Sales</span></VCardTitle>

          <template #append>
            <div class="me-n3 mt-n2">
              <MoreBtn :menu-list="moreList" />
            </div>
          </template>
        </VCardItem>

        <VCardText class="pt-6">
          <VList class="card-list">
            <VListItem
              v-for="item in sales"
              :key="item.logo"
            >
              <template #prepend>
                <VAvatar
                  start
                  rounded
                  :image="item.logo"
                />
              </template>

              <VListItemTitle class="mb-1">
                {{ item.title }}
              </VListItemTitle>
              <VListItemSubtitle class="text-disabled">
                {{ item.subtitle }}
              </VListItemSubtitle>

              <template #append>
                <VListItemAction class="text-medium-emphasis">
                  {{ item.amount }}
                </VListItemAction>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCol>

      <VCol
        cols="12"
        sm="6"
      >
        <VCardItem>
          <VCardTitle>Top Products by <span class="text-primary">Volume</span></VCardTitle>

          <template #append>
            <div class="me-n3 mt-n2">
              <MoreBtn :menu-list="moreList" />
            </div>
          </template>
        </VCardItem>

        <VCardText class="pt-6">
          <VList class="card-list">
            <VListItem
              v-for="item in volumes"
              :key="item.logo"
            >
              <template #prepend>
                <VAvatar
                  start
                  rounded
                  :image="item.logo"
                />
              </template>

              <VListItemTitle class="mb-1">
                {{ item.title }}
              </VListItemTitle>
              <VListItemSubtitle class="text-disabled">
                {{ item.subtitle }}
              </VListItemSubtitle>

              <template #append>
                <VListItemAction>
                  <span class="text-medium-emphasis me-2">{{ item.amount }}</span>
                  <VChip
                    label
                    density="compact"
                    :color="item.differenceNumber > 0 ? 'success' : 'error'"
                  >
                    {{ item.differenceNumber }}%
                  </VChip>
                </VListItemAction>
              </template>
            </VListItem>
          </VList>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1.85rem;
}
</style>
