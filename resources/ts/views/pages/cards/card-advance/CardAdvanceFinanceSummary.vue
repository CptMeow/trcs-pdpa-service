<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle class="mb-1">
        Finance Summary
      </VCardTitle>
      <VCardSubtitle>Check out each Column for more details</VCardSubtitle>

      <template #append>
        <VAvatar
          size="48"
          color="primary"
          variant="tonal"
        >
          <VIcon
            size="28"
            icon="bx-dollar"
          />
        </VAvatar>
      </template>
    </VCardItem>

    <VCardText class="pt-3">
      <VRow class="gap-y-1">
        <VCol
          cols="12"
          sm="6"
        >
          <p class="text-sm mb-1">
            Annual Companies Taxes
          </p>
          <h6 class="text-base font-weight-regular">
            $50,000
          </h6>
        </VCol>

        <VCol
          cols="12"
          sm="6"
        >
          <p class="text-sm mb-1">
            Next Tax Review Date
          </p>
          <h6 class="text-base font-weight-regular">
            July 24, 2022
          </h6>
        </VCol>

        <VCol
          cols="12"
          sm="6"
        >
          <p class="text-sm mb-1">
            Average Product Price
          </p>
          <h6 class="text-base font-weight-regular">
            $85.50
          </h6>
        </VCol>

        <VCol>
          <p class="text-sm">
            Next Tax Review Date
          </p>
          <div
            class="d-flex align-center gap-3 w-100"
            style="width: 130px;"
          >
            <VProgressLinear
              color="primary"
              :model-value="78"
              :height="8"
              rounded
              rounded-bar
            />
            <span>78%</span>
          </div>
        </VCol>

        <VCol
          cols="12"
          sm="6"
        >
          <div class="v-avatar-group">
            <VAvatar
              :size="42"
              :image="avatar1"
            />
            <VAvatar
              :size="42"
              :image="avatar2"
            />
            <VAvatar
              :size="42"
              :image="avatar3"
            />
            <VAvatar
              :size="42"
              :image="avatar4"
            />
          </div>
        </VCol>

        <VCol>
          <VChip
            label
            color="primary"
            density="compact"
            class="mt-2"
          >
            5 days Ago
          </VChip>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
