<script lang="ts" setup>
import type { ProfileHeader } from '@/@fake-db/types'
import axios from '@axios'

const profileHeaderData = ref<ProfileHeader>()

const fetchHeaderData = () => {
  axios.get('/pages/profile-header').then(response => {
    profileHeaderData.value = response.data
  })
}

fetchHeaderData()
</script>

<template>
  <VCard v-if="profileHeaderData">
    <VImg
      :src="profileHeaderData.coverImg"
      min-height="125"
      max-height="250"
      cover
    />

    <VCardText class="d-flex align-bottom flex-sm-row flex-column justify-center gap-x-6 mt-n2">
      <div class="d-flex h-0">
        <VAvatar
          size="120"
          :image="profileHeaderData.profileImg"
          class="user-profile-avatar mx-auto"
        />
      </div>

      <div class="user-profile-info w-100 mt-16 pt-6 pt-sm-0 mt-sm-0">
        <h5 class="text-h5 text-center text-sm-start font-weight-medium mb-3">
          {{ profileHeaderData.fullName }}
        </h5>

        <div class="d-flex align-center justify-center justify-sm-space-between flex-wrap gap-4">
          <div class="d-flex flex-wrap justify-center justify-sm-start flex-grow-1 gap-3">
            <span class="d-flex align-center">
              <VIcon
                size="24"
                icon="bx-color-fill"
                class="me-2"
              />
              <span class="font-weight-semibold">
                {{ profileHeaderData.designation }}
              </span>
            </span>

            <span class="d-flex align-center">
              <VIcon
                size="24"
                icon="bx-map"
                class="me-2"
              />
              <span class="font-weight-semibold">
                {{ profileHeaderData.location }}
              </span>
            </span>

            <span class="d-flex align-center">
              <VIcon
                size="24"
                icon="bx-calendar-alt"
                class="me-2"
              />
              <span class="font-weight-semibold">
                {{ profileHeaderData.joiningDate }}
              </span>
            </span>
          </div>

          <VBtn prepend-icon="bx-user-check">
            Connected
          </VBtn>
        </div>
      </div>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
.user-profile-avatar {
  border: 4px solid rgb(var(--v-theme-surface));
  border-radius: 8px;
  background-color: rgb(var(--v-theme-surface)) !important;
  inset-block-start: -2.5rem;
}
</style>
