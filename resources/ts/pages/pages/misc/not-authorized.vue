<script setup lang="ts">
import { useGenerateImageVariant } from '@/@core/composable/useGenerateImageVariant'
import girlWithLaptopDark from '@images/illustrations/girl-with-laptop-dark.png'
import girlWithLaptopLight from '@images/illustrations/girl-with-laptop-light.png'

const girlWithLaptop = useGenerateImageVariant(girlWithLaptopLight, girlWithLaptopDark)
</script>

<template>
  <div class="misc-wrapper">
    <ErrorHeader
      error-title="You are not authorized! 🔐"
      error-description="You don't have permission to access this page. Go Home!"
    />

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
      <VImg
        :src="girlWithLaptop"
        alt="Coming Soon"
        :max-width="500"
        class="mx-auto"
      />
      <VBtn
        to="/"
        class="mt-10"
      >
        Back to Home
      </VBtn>
    </div>
  </div>
</template>

<style lang="scss">
@use "@core-scss/template/pages/misc.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
