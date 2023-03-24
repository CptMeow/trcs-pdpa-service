<script lang="ts" setup>
import type { ProfileTeamsTech } from '@/@fake-db/types'

interface Props {
  teamsData: ProfileTeamsTech[]
}

const props = defineProps<Props>()

const moreList = [
  { title: 'Share connections', value: 'Share connections' },
  { title: 'Suggest edits', value: 'Suggest edits' },
  { title: 'Report Bug', value: 'Report Bug' },
]
</script>

<template>
  <VCard title="Teams">
    <template #append>
      <div class="me-n2">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VCardText class="pb-4">
      <VList class="card-list">
        <VListItem
          v-for="data in props.teamsData"
          :key="data.title"
        >
          <template #prepend>
            <VAvatar
              size="38"
              :image="data.avatar"
            />
          </template>

          <VListItemTitle class="text-sm font-weight-semibold">
            {{ data.title }}
          </VListItemTitle>
          <VListItemSubtitle class="text-xs">
            {{ data.members }} Members
          </VListItemSubtitle>

          <template #append>
            <VChip
              :color="data.ChipColor"
              size="small"
              class="font-weight-medium"
            >
              {{ data.chipText }}
            </VChip>
          </template>
        </VListItem>

        <VListItem>
          <VListItemTitle>
            <VBtn
              block
              variant="text"
            >
              View all teams
            </VBtn>
          </VListItemTitle>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1rem;
}
</style>
