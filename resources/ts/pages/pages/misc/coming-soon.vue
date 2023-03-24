<script setup lang="ts">
import { useGenerateImageVariant } from '@/@core/composable/useGenerateImageVariant'
import boyWithRocketDark from '@images/illustrations/boy-with-rocket-dark.png'
import boyWithRocketLight from '@images/illustrations/boy-with-rocket-light.png'

const boyWithRocket = useGenerateImageVariant(boyWithRocketLight, boyWithRocketDark)

const email = ref('')
const emailInput = ref()

onMounted(() => {
  emailInput.value.focus()
})
</script>

<template>
  <div class="misc-wrapper">
    <div>
      <ErrorHeader
        error-title="We are launching soon 🚀"
        error-description="Our website is opening soon. Please register to get notified when it's ready!"
      />

      <!-- 👉 Email input -->
      <VForm
        class="d-flex align-center justify-center flex-wrap gap-6"
        @submit.prevent="() => {}"
      >
        <VTextField
          ref="emailInput"
          v-model="email"
          placeholder="Enter your email"
          class="misc-email-input"
          density="compact"
        />
        <VBtn
          type="submit"
        >
          Notify
        </VBtn>
      </VForm>
    </div>

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 mt-12">
      <VImg
        :src="boyWithRocket"
        alt="Coming Soon"
        :max-width="500"
        class="mx-auto"
      />
    </div>
  </div>
</template>

<style lang="scss">
@use "@core-scss/template/pages/misc.scss";

.misc-email-input {
  max-inline-size: 21.875rem;
  min-inline-size: 12.5rem;
}
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
