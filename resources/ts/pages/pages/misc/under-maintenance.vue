<script setup lang="ts">
import { useGenerateImageVariant } from '@/@core/composable/useGenerateImageVariant'
import girlDoingYogaDark from '@images/illustrations/girl-doing-yoga-dark.png'
import girlDoingYogaLight from '@images/illustrations/girl-doing-yoga-light.png'

const girlDoingYoga = useGenerateImageVariant(girlDoingYogaLight, girlDoingYogaDark)
</script>

<template>
  <div class="misc-wrapper">
    <ErrorHeader
      error-title="Under Maintenance! 🚧"
      error-description="Sorry for the inconvenience but we're performing some maintenance at the moment"
    />

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
      <VImg
        :src="girlDoingYoga"
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
