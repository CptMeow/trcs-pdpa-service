<script setup lang="ts">
interface Props {
  title: string
  color?: string
  icon: string
  stats: string
  change: number
  subtitle: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
})

const isPositive = controlledComputed(() => props.change, () => Math.sign(props.change) === 1)
</script>

<template>
  <VCard>
    <VCardText class="d-flex align-center">
      <h6 class="text-base font-weight-regular">
        {{ props.title }}
      </h6>

      <VSpacer />

      <!-- more btn -->
      <VBtn
        variant="text"
        append-icon="bx-chevron-down"
        color="medium-emphasis"
        size="small"
      >
        Today
        <VMenu activator="parent">
          <VList>
            <VListItem
              v-for="(item, index) in ['Yesterday', 'Last Week', 'Last Month']"
              :key="index"
              :value="index"
            >
              <VListItemTitle>{{ item }}</VListItemTitle>
            </VListItem>
          </VList>
        </VMenu>
      </VBtn>
    </VCardText>

    <VCardText>
      <div
        v-if="props.change"
        class="d-flex align-center flex-column"
      >
        <VAvatar
          v-if="props.icon"
          size="40"
          variant="tonal"
          :color="props.color"
          class="mb-3"
          :style="`box-shadow: rgb(var(--v-theme-${props.color}), 0.04) 0 0 0 5px;`"
        >
          <VIcon
            :icon="props.icon"
            size="24"
          />
        </VAvatar>

        <span class="text-h5 mb-1">{{ props.stats }}</span>
        <span class="text-sm mb-3">{{ props.subtitle }}</span>
        <span :class="isPositive ? 'text-success' : 'text-error'">
          {{ Math.abs(props.change) }}%
          <VIcon
            size="20"
            :icon="isPositive ? 'bx-chevron-up' : 'bx-chevron-down'"
          />
        </span>
      </div>
    </VCardText>
  </VCard>
</template>
