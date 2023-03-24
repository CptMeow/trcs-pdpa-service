<script setup lang="ts">
import sittingGirlWithLaptopDark from '@images/illustrations/sitting-girl-with-laptop-dark.png'
import sittingGirlWithLaptopLight from '@images/illustrations/sitting-girl-with-laptop-light.png'

import { useGenerateImageVariant } from '@/@core/composable/useGenerateImageVariant'

const sittingGirlWithLaptop = useGenerateImageVariant(sittingGirlWithLaptopLight, sittingGirlWithLaptopDark)
</script>

<template>
  <VCard>
    <VRow no-gutters>
      <VCol
        cols="12"
        sm="4"
        class="text-center"
      >
        <img
          :src="sittingGirlWithLaptop"
          :class="$vuetify.display.xs ? 'mt-4 mb-n2' : 'position-absolute'"
          alt="sitting girl with laptop"
          height="173"
          width="244"
          class="sitting-girl-illustration flip-in-rtl"
        >
      </VCol>
      <VCol
        cols="12"
        sm="8"
        class="d-flex justify-center"
      >
        <div>
          <VCardItem>
            <VCardTitle class="text-md-h5 flex-wrap text-primary">
              <span class="me-1">Welcome back Anna! </span>
            </VCardTitle>
          </VCardItem>

          <VCardText>
            <p>
              You have 12 task to finish today,
              <br>
              Your already completed 189 task good job.
            </p>
            <VChip
              color="primary"
              label
              density="compact"
              class="mb-4"
            >
              78%  OF TARGET
            </VChip>
          </VCardText>
        </div>
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.sitting-girl-illustration {
  inset-block-end: 0;
  inset-inline-start: 2.5rem;
}
</style>
