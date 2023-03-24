<script lang="ts" setup>
import type { ProfileConnections } from '@/@fake-db/types'

interface Props {
  connectionsData: ProfileConnections[]
}

const props = defineProps<Props>()

const moreList = [
  { title: 'Share connections', value: 'Share connections' },
  { title: 'Suggest edits', value: 'Suggest edits' },
  { title: 'Report Bug', value: 'Report Bug' },
]
</script>

<template>
  <VCard title="Connection">
    <template #append>
      <div class="me-n2">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VCardText class="pb-4">
      <VList class="card-list">
        <VListItem
          v-for="data in props.connectionsData"
          :key="data.name"
        >
          <template #prepend>
            <VAvatar
              size="38"
              :image="data.avatar"
            />
          </template>

          <VListItemTitle class="text-sm font-weight-semibold">
            {{ data.name }}
          </VListItemTitle>
          <VListItemSubtitle class="text-xs">
            {{ data.connections }} Connections
          </VListItemSubtitle>

          <template #append>
            <VBtn
              icon
              size="36"
              class="rounded"
              :variant="data.isFriend ? 'elevated' : 'outlined' "
            >
              <VIcon
                size="24"
                icon="bx-user"
              />
            </VBtn>
          </template>
        </VListItem>

        <VListItem>
          <VListItemTitle>
            <VBtn
              block
              variant="text"
            >
              View all connections
            </VBtn>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 16px;
}
</style>
