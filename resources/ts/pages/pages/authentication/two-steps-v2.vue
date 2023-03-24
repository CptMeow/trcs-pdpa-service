<script setup lang="ts">
import { useGenerateImageVariant } from '@/@core/composable/useGenerateImageVariant'
import girlVerifyPasswordDark from '@images/illustrations/girl-verify-password-dark.png'
import girlVerifyPasswordLight from '@images/illustrations/girl-verify-password-light.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const girlVerifyPassword = useGenerateImageVariant(girlVerifyPasswordLight, girlVerifyPasswordDark)
</script>

<template>
  <div>
    <VRow
      class="auth-wrapper"
      no-gutters
    >
      <VCol
        md="8"
        class="d-none d-md-flex"
      >
        <!-- illustration -->
        <div class="position-relative w-100 pa-8">
          <div class="d-flex align-center justify-center w-100 h-100">
            <VImg
              max-width="700"
              :src="girlVerifyPassword"
              class="auth-illustration"
            />
          </div>
        </div>
      </VCol>

      <VCol
        cols="12"
        md="4"
        class="auth-card-v2 d-flex align-center justify-center"
        style="background-color: rgb(var(--v-theme-surface));"
      >
        <VCard
          flat
          :max-width="500"
          class="mt-12 mt-sm-0 pa-6"
        >
          <VCardItem class="justify-start">
            <template #prepend>
              <div class="d-flex">
                <VNodeRenderer :nodes="themeConfig.app.logo" />
              </div>
            </template>

            <VCardTitle class="auth-title">
              {{ themeConfig.app.title }}
            </VCardTitle>
          </VCardItem>

          <VCardText>
            <h6 class="text-h6 mb-1">
              Two Step Verification 💬
            </h6>
            <p class="mb-1">
              We sent a verification code to your mobile. Enter the code from the mobile in the field below.
            </p>
            <h6 class="text-base font-weight-semibold">
              ******1234
            </h6>
          </VCardText>

          <VCardText>
            <VForm @submit.prevent="() => {}">
              <VRow>
                <!-- email -->
                <VCol cols="12">
                  <AppOtpInput />
                </VCol>

                <!-- reset password -->
                <VCol cols="12">
                  <VBtn
                    block
                    type="submit"
                  >
                    Verify my account
                  </VBtn>
                </VCol>

                <!-- back to login -->
                <VCol cols="12">
                  <div class="d-flex justify-center align-center flex-wrap">
                    <span class="me-1">Didn't get the code?</span>
                    <a href="#">Resend</a>
                  </div>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
