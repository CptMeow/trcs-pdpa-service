<script setup lang="ts">
import trophy from '@images/misc/trophy.png'
</script>

<template>
  <VCard>
    <VCardItem class="pb-1">
      <VCardTitle>Congratulations <strong>Katie!</strong> 🎉</VCardTitle>
      <VCardSubtitle>Best seller of the month</VCardSubtitle>
    </VCardItem>

    <VCardText>
      <h5 class="text-2xl font-weight-medium text-primary">
        $42.8k
      </h5>
      <p class="text-sm mb-3">
        78% of target 🚀
      </p>
      <VBtn size="small">
        View Sales
      </VBtn>
    </VCardText>

    <!-- Trophy -->
    <VImg
      :src="trophy"
      :width="92"
      class="trophy"
    />
  </VCard>
</template>

<style lang="scss">
.trophy {
  position: absolute;
  inline-size: 5.188rem;
  inset-block-end: 0;
  inset-inline-end: 2rem;
}
</style>
