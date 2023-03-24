<script setup lang="ts">
import avatar4 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar1 from '@images/avatars/avatar-4.png'
import avatar2 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-7.png'
import avatar5 from '@images/avatars/avatar-8.png'

const employeeList = [
  {
    title: 'Alberta',
    avatar: avatar1,
    totalHours: 138,
    completedHours: 100,
    chartValue: 85,
    chartColor: 'secondary',
    designation: 'UI Designer',
  },
  {
    chartValue: 70,
    totalHours: 149,
    completedHours: 121,
    title: 'Conference call',
    avatar: avatar2,
    chartColor: 'warning',
    designation: 'Branding',
  },
  {
    chartValue: 25,
    totalHours: 160,
    completedHours: 112,
    chartColor: 'primary',
    title: 'Meeting with Mark',
    avatar: avatar3,
    designation: 'iOS Developer',
  },
  {
    chartValue: 75,
    totalHours: 166,
    chartColor: 'error',
    completedHours: 125,
    title: 'Meeting in Oakland',
    avatar: avatar4,
    designation: 'iOS Developer',
  },
  {
    totalHours: 89,
    chartValue: 60,
    completedHours: 76,
    chartColor: 'info',
    title: 'Call with Hilda',
    avatar: avatar5,
    designation: 'Product Designer',
  },
  {
    totalHours: 45,
    chartValue: 45,
    completedHours: 22,
    chartColor: 'warning',
    title: 'Meeting with Carl',
    avatar: avatar6,
    designation: 'PHP Developer',
  },
]

const moreList = [
  { title: 'Share', value: 'Share' },
  { title: 'Refresh', value: 'Refresh' },
  { title: 'Update', value: 'Update' },
]
</script>

<template>
  <VCard title="Employee List">
    <template #append>
      <div class="me-n3 mt-n2">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VCardText>
      <VList
        lines="two"
        class="meeting-schedule-list card-list"
      >
        <VListItem
          v-for="employee in employeeList"
          :key="employee.title"
          class="flex-wrap"
        >
          <!-- 👉 Avatar  -->
          <template #prepend>
            <VAvatar
              rounded
              :size="38"
              :image="employee.avatar"
              class="me-3"
            />
          </template>

          <!-- 👉 Title and Subtitle -->
          <VListItemTitle>
            {{ employee.title }}
          </VListItemTitle>

          <VListItemSubtitle class="text-disabled">
            <span>{{ employee.designation }}</span>
          </VListItemSubtitle>

          <!-- 👉 Business Types -->
          <template #append>
            <p class="d-sm-none d-md-block text-sm mb-0 me-4">
              <span>{{ employee.completedHours }}h:</span>
              <span class="text-medium-emphasis ms-1">{{ employee.totalHours }}h</span>
            </p>
            <VProgressCircular
              :model-value="employee.chartValue"
              :color="employee.chartColor"
            />
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 1.85rem;
}
</style>

<style lang="scss">
.meeting-schedule-list {
  .v-list-item__append {
    block-size: 100%;
  }
}
</style>
