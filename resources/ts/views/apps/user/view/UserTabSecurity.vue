<script setup lang="ts">
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const smsVerificationNumber = ref('+1(968) 819-2547')
const isTwoFactorDialogOpen = ref(false)

const recentDevices = [
  {
    browser: 'Chrome on Windows',
    logo: 'bxl-windows',
    color: 'info',
    device: 'Dell XPS 15',
    location: 'United States',
    activity: '10, Jan 2020 20:07',
  },
  {
    browser: 'Chrome on MacOS',
    logo: 'bxl-apple',
    color: 'secondary',
    device: 'Apple iMac',
    location: 'Mayotte',
    activity: '11, Jan 2020 12:10',
  },
  {
    browser: 'Chrome on Android',
    logo: 'bxl-android',
    color: 'success',
    device: 'Google Pixel 3a',
    location: 'Ghana',
    activity: '11, Jan 2020 10:16',
  },
  {
    browser: 'Chrome on iPhone',
    logo: 'bx-mobile',
    color: 'primary',
    device: 'Apple iPhone XR',
    location: 'Mauritania',
    activity: '12, Jan 2020 8:29',
  },
  {
    browser: 'Chrome on Windows',
    logo: 'bxl-windows',
    color: 'info',
    device: 'HP Spectre 360',
    location: 'Switzerland',
    activity: '20, July 2021 21:01',
  },
  {
    browser: 'Chrome on MacOS',
    logo: 'bxl-apple',
    color: 'secondary',
    device: 'Apple Mac Book Pro',
    location: 'Dubai',
    activity: '21, July 2021 12:22',
  },
]
</script>

<template>
  <VRow>
    <VCol cols="12">
      <!-- 👉 Change password -->
      <VCard title="Change Password">
        <VCardText>
          <VAlert
            variant="tonal"
            color="warning"
            class="mb-4"
          >
            <VAlertTitle class="mb-1">
              Ensure that these requirements are met
            </VAlertTitle>
            <span class="text-sm">Minimum 8 characters long, uppercase & symbol</span>
          </VAlert>

          <VForm @submit.prevent="() => {}">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  label="New Password"
                  :type="isNewPasswordVisible ? 'text' : 'password'"
                  density="compact"
                  :append-inner-icon="isNewPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  label="Confirm Password"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  density="compact"
                  :append-inner-icon="isConfirmPasswordVisible ? 'bx-hide' : 'bx-show'"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <VBtn type="submit">
                  Change Password
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Two step verification -->
      <VCard
        title="Two-step verification"
        subtitle="Keep your account secure with authentication step."
      >
        <VCardText>
          <div>
            <h4 class="font-weight-semibold mb-1">
              SMS
            </h4>
            <VTextField
              variant="underlined"
              density="compact"
              readonly
              :model-value="smsVerificationNumber"
            >
              <template #append-inner>
                <IconBtn variant="plain">
                  <VIcon
                    icon="bx-edit-alt"
                    @click="isTwoFactorDialogOpen = true"
                  />
                </IconBtn>
                <IconBtn variant="plain">
                  <VIcon icon="bx-trash-alt" />
                </IconBtn>
              </template>
            </VTextField>
          </div>

          <p class="mb-0 mt-4">
            Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. <a
              href="javascript:void(0)"
              class="text-decoration-none"
            >Learn more</a>.
          </p>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Recent devices -->
      <VCard title="Recent devices">
        <VDivider />
        <VTable class="text-no-wrap">
          <thead>
            <tr>
              <th scope="col">
                BROWSER
              </th>
              <th scope="col">
                DEVICE
              </th>
              <th scope="col">
                LOCATION
              </th>
              <th scope="col">
                RECENT ACTIVITY
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="device in recentDevices"
              :key="device.browser"
            >
              <td>
                <div class="d-flex align-center">
                  <VIcon
                    :size="22"
                    :icon="device.logo"
                    :color="device.color"
                    class="me-2"
                  />
                  <span class="text-base text-high-emphasis">
                    {{ device.browser }}
                  </span>
                </div>
              </td>

              <td class="text-medium-emphasis">
                {{ device.device }}
              </td>

              <td class="text-medium-emphasis">
                {{ device.location }}
              </td>

              <td class="text-medium-emphasis">
                {{ device.activity }}
              </td>
            </tr>
          </tbody>
        </VTable>
      </VCard>
    </VCol>
  </VRow>

  <!-- 👉 Enable One Time Password Dialog -->
  <TwoFactorAuthDialog
    v-model:isDialogVisible="isTwoFactorDialogOpen"
    :sms-code="smsVerificationNumber"
  />
</template>
