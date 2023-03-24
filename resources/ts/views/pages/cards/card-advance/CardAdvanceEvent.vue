<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import event from '@images/cards/event.png'

const moreList = [
  { title: 'Share', value: 'Share' },
  { title: 'Refresh', value: 'Refresh' },
  { title: 'Update', value: 'Update' },
]

const tags = [
  { title: 'TECHNICAL', color: 'success' },
  { title: 'EXCEL', color: 'primary' },
  { title: 'ACCOUNT', color: 'info' },
]

const avatarGroups = [
  { img: avatar1, name: 'John Doe' },
  { img: avatar2, name: 'Jennie o\'brien' },
  { img: avatar3, name: 'Peter Harper' },
  { img: avatar4, name: 'Vivian Padilla' },
]
</script>

<template>
  <VCard
    title="Olivia Shared Event"
    subtitle="07 Sep 2020 at 10:30 AM"
  >
    <template #prepend>
      <VAvatar :image="avatar1" />
    </template>

    <template #append>
      <div class="me-n3 mt-n8">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VImg
      cover
      height="180"
      :src="event"
    />
    <VCardText class="position-relative">
      <div class="event-date text-center rounded elevation-8">
        <h6 class="text-h6">
          12
        </h6>
        <span class="text-sm text-primary font-weight-semibold">Mar</span>
      </div>

      <h6 class="text-h6 mt-4">
        How To Excel In A Technical…
      </h6>
      <div class="d-flex gap-2 flex-wrap mt-1">
        <VChip
          v-for=" tag in tags"
          :key="tag.title"
          label
          :color="tag.color"
          density="compact"
        >
          {{ tag.title }}
        </VChip>
      </div>

      <div class="d-flex align-center justify-space-between mt-4">
        <div class="v-avatar-group">
          <VAvatar
            v-for="avatar in avatarGroups"
            :key="avatar.name"
            :size="38"
          >
            <VImg :src="avatar.img" />
            <VTooltip
              activator="parent"
              location="top"
            >
              {{ avatar.name }}
            </VTooltip>
          </VAvatar>
        </div>

        <VBtn>Join Now</VBtn>
      </div>
    </VCardText>

    <VCardActions class="align-center gap-8 text-disabled px-6">
      <div class="d-flex ">
        <VIcon
          size="22"
          icon="bx-heart"
          class="me-2"
        />
        <span>
          236
        </span>
      </div>
      <div>
        <VIcon
          size="22"
          icon="bx-chat"
          class="me-2"
        />
        <span>
          12
        </span>
      </div>
    </VCardActions>
  </VCard>
</template>

<style lang="scss">
.event-date {
  position: absolute;
  padding: 0.6rem;
  background-color: rgb(var(--v-theme-surface));
  block-size: 64px;
  inline-size: 58px;
  inset-block-start: -2rem;

  h6 {
    line-height: normal;
  }
}
</style>
