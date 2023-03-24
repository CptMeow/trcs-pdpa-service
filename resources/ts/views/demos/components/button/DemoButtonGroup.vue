<script lang="ts" setup>
const toggleExclusive = ref(1)
</script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    divided
    color="primary"
    variant="outlined"
  >
    <VBtn icon="bx-align-left" />
    <VBtn icon="bx-align-middle" />
    <VBtn icon="bx-align-right" />
    <VBtn icon="bx-align-justify" />
  </VBtnToggle>
</template>
