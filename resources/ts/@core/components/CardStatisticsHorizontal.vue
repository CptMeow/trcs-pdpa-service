<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
  color?: string
  icon: string
  stats: string
  change: number
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
})

const isPositive = controlledComputed(() => props.change, () => Math.sign(props.change) === 1)
</script>

<template>
  <VCard>
    <VCardText class="d-flex justify-space-between align-start">
      <div>
        <span>{{ props.title }}</span>
        <div class="d-flex align-center flex-wrap gap-2">
          <span class="text-h6">{{ props.stats }}</span>
          <div
            v-if="props.change"
            :class="`${isPositive ? 'text-success' : 'text-error'}`"
          >
            <span class="text-sm">({{ (isPositive ? '+' : '-') + Math.abs(props.change) }}%)</span>
          </div>
        </div>
        <span class="text-sm">{{ props.subtitle }}</span>
      </div>

      <VAvatar
        size="40"
        rounded
        :color="props.color"
        variant="tonal"
      >
        <VIcon
          :icon="props.icon"
          size="24"
        />
      </VAvatar>
    </VCardText>
  </VCard>
</template>
