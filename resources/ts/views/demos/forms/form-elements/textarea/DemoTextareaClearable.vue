<script setup lang="ts">
const textareaValue = ref('This is clearable text.')
</script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="bx-x-circle"
    label="Text"
  />
</template>
