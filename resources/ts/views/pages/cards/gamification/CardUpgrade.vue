<script setup lang="ts">
import { useGenerateImageVariant } from '@/@core/composable/useGenerateImageVariant'
import upgradeAccountLaunchDark from '@images/misc/upgrade-account-launch-dark.png'
import upgradeAccountLaunchLight from '@images/misc/upgrade-account-launch-light.png'

const upgradeAccountLaunch = useGenerateImageVariant(upgradeAccountLaunchLight, upgradeAccountLaunchDark)
</script>

<template>
  <VCard
    class="position-relative"
  >
    <VRow>
      <VCol
        cols="12"
        xs="6"
        sm="4"
      >
        <VImg
          :src="upgradeAccountLaunch"
          :width="118"
          class="launch-illustration flip-in-rtl"
        />
      </VCol>
      <VCol
        cols="12"
        xs="6"
        sm="8"
      >
        <VCardItem class="text-end text-sm-center pb-2">
          <VCardTitle> Upgrade Account</VCardTitle>
          <VCardSubtitle>Add 15 team Members</VCardSubtitle>
        </VCardItem>

        <VCardText class="text-end text-sm-center">
          <h5 class="text-2xl font-weight-semibold text-info">
            $199
          </h5>
          <p class="text-sm mb-3">
            20% OFF
          </p>
          <VBtn
            size="small"
            color="info"
          >
            Upgrade
          </VBtn>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss">
.launch-illustration {
  position: absolute;
  inline-size: 3rem;
  inset-block-end: 0;
  inset-inline-start: 1.5rem;
}
</style>
