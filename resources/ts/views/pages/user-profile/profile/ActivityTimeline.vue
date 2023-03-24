<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'

const users = [
  { avatar: avatar1, name: 'John Doe' },
  { avatar: avatar4, name: 'Jennie O\'Brien' },
  { avatar: avatar5, name: 'Peter Humber' },
  { avatar: avatar6, name: 'Angel Bishop' },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <template #prepend>
        <VIcon icon="bx-line-chart" />
      </template>

      <VCardTitle>Activity Timeline</VCardTitle>
    </VCardItem>

    <VCardText>
      <VTimeline
        density="compact"
        align="start"
        truncate-line="start"
        :line-inset="12"
        class="v-timeline-density-compact"
      >
        <VTimelineItem
          dot-color="error"
          size="x-small"
        >
          <div class="d-flex justify-space-between align-center flex-wrap">
            <h4 class="text-base font-weight-semibold me-1 mb-1">
              12 Invoices have been paid
            </h4>
            <span class="text-sm text-disabled text-no-wrap">Wednesday</span>
          </div>
          <p class="text-sm mt-2 mb-0">
            Invoices have been paid to the company.
          </p>
          <div class="d-flex align-center mt-1">
            <VIcon
              color="error"
              icon="bxs-file-pdf"
              size="26"
              class="me-2"
            />
            <h6 class="font-weight-semibold text-sm">
              Invoices.pdf
            </h6>
          </div>
        </VTimelineItem>

        <VTimelineItem
          dot-color="primary"
          size="x-small"
        >
          <div class="d-flex justify-space-between align-center flex-wrap">
            <h4 class="text-base font-weight-semibold me-1 mb-1">
              Meeting With John
            </h4>
            <span class="text-sm text-disabled text-no-wrap">45 min ago</span>
          </div>

          <p class="text-sm mt-2 mb-0">
            Project meeting with john @10:15am
          </p>

          <div class="d-flex align-center mt-1">
            <VAvatar
              size="34"
              class="me-2"
              :image="avatar1"
            />
            <div>
              <h6 class="text-sm font-weight-semibold mb-0">
                John Doe (Client)
              </h6>
              <span class="text-sm">Project meeting with john @10:15am</span>
            </div>
          </div>
        </VTimelineItem>

        <VTimelineItem
          dot-color="info"
          size="x-small"
        >
          <div class="d-flex justify-space-between align-center flex-wrap">
            <h4 class="text-base font-weight-semibold me-1 mb-1">
              Create a new vue project for client
            </h4>
            <span class="text-sm text-disabled text-no-wrap">2 day ago</span>
          </div>
          <p class="text-sm mb-0">
            5 team members in project
          </p>
          <div class="v-avatar-group">
            <VAvatar
              v-for="user in users"
              :key="user.name"
              size="40"
            >
              <VImg :src="user.avatar" />
              <VTooltip
                activator="parent"
                location="top"
              >
                {{ user.name }}
              </VTooltip>
            </VAvatar>
          </div>
        </VTimelineItem>

        <VTimelineItem
          dot-color="success"
          size="x-small"
        >
          <div class="d-flex justify-space-between flex-wrap">
            <h4 class="text-base font-weight-semibold me-1 mb-3">
              12 Create invoices for client
            </h4>
            <span class="text-sm text-disabled text-no-wrap">September, 30</span>
          </div>
          <p class="text-sm mb-0">
            Weekly review of freshly prepared design for our new app.
          </p>
        </VTimelineItem>
      </VTimeline>
    </VCardText>
  </VCard>
</template>
