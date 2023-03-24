<template>
  <VTabs
    next-icon="bx-right-arrow-alt"
    prev-icon="bx-left-arrow-alt"
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
