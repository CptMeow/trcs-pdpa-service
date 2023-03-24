<script lang="ts" setup>
const recentDevices = ref(
  [
    {
      type: 'New for you',
      email: true,
      browser: false,
      app: false,
    },
    {
      type: 'Account activity',
      email: false,
      browser: true,
      app: true,
    },
    {
      type: 'A new browser used to sign in',
      email: true,
      browser: true,
      app: true,
    },
    {
      type: 'A new device is linked',
      email: false,
      browser: true,
      app: false,
    },
  ],
)

const selectedNotification = ref('Only when I\'m online')
</script>

<template>
  <VCard title="Recent Devices">
    <VCardText>
      We need permission from your browser to show notifications.
      <a href="javascript:void(0)">Request Permission</a>
    </VCardText>

    <VCardText>
      <VTable class="text-no-wrap border rounded mb-5">
        <thead>
          <tr>
            <th scope="col">
              Type
            </th>
            <th scope="col">
              ✉️  Email
            </th>
            <th scope="col">
              🖥  Browser
            </th>
            <th scope="col">
              👩🏻‍💻  App
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="device in recentDevices"
            :key="device.type"
          >
            <td class="text-high-emphasis">
              {{ device.type }}
            </td>
            <td>
              <VCheckbox v-model="device.email" />
            </td>
            <td>
              <VCheckbox v-model="device.browser" />
            </td>
            <td>
              <VCheckbox v-model="device.app" />
            </td>
          </tr>
        </tbody>
      </VTable>
    </VCardText>

    <VCardText>
      <VForm @submit.prevent="() => {}">
        <p class="text-base font-weight-medium">
          When should we send you notifications?
        </p>

        <VRow>
          <VCol
            cols="12"
            sm="6"
          >
            <VSelect
              v-model="selectedNotification"
              mandatory
              :items="['Only when I\'m online', 'Anytime']"
            />
          </VCol>
        </VRow>

        <div class="d-flex flex-wrap gap-4 mt-6">
          <VBtn type="submit">
            Save Changes
          </VBtn>
          <VBtn
            color="secondary"
            variant="tonal"
            type="reset"
          >
            Reset
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
