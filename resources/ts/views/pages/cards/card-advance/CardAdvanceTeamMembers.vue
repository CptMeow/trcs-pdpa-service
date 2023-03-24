<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar8 from '@images/avatars/avatar-8.png'

const teamMembers = [
  {
    profilePic: avatar1,
    name: 'Dean Hogan',
    designation: 'IOS developer',
    project: 'Zipper',
    projectIndication: 'primary',
    task: '87/135',
    progress: 65,

  },
  {
    profilePic: avatar8,
    name: 'Hilda Rice',
    designation: 'Laravel developer',
    project: 'Brandi',
    projectIndication: 'success',
    task: '340/420',
    progress: 75,
  },
  {
    profilePic: avatar5,
    name: 'Andrew O\'Brien',
    designation: 'React developer',
    project: 'Payers',
    projectIndication: 'warning',
    task: '50/82',
    progress: 55,
  },
  {
    profilePic: avatar2,
    name: 'Eleanor Price',
    designation: 'Angular developer',
    project: 'Citibank',
    projectIndication: 'error',
    task: '98/260',
    progress: 60,
  },
  {
    profilePic: avatar3,
    name: 'Carl Oliver',
    designation: 'VueJs developer',
    project: 'Aviator',
    projectIndication: 'secondary',
    task: '12/25',
    progress: 60,
  },
]

const moreList = [
  { title: 'Share', value: 'Share' },
  { title: 'Refresh', value: 'Refresh' },
  { title: 'Update', value: 'Update' },
]
</script>

<template>
  <VCard>
    <!-- SECTION Card Header and Menu -->
    <VCardItem class="pb-1">
      <!-- 👉 Title -->
      <VCardTitle>Team Members</VCardTitle>

      <!-- 👉 menu -->
      <template #append>
        <div class="me-n3 mt-n2">
          <MoreBtn :menu-list="moreList" />
        </div>
      </template>
    </VCardItem>
    <!-- !SECTION -->

    <VTable class="text-no-wrap">
      <thead>
        <tr class="text-uppercase">
          <th
            scope="col"
            class="table-spacing border-0"
          >
            Name
          </th>
          <th
            scope="col"
            class="table-spacing border-0"
          >
            Project
          </th>
          <th
            scope="col"
            class="table-spacing border-0"
          >
            Tasks
          </th>
          <th
            scope="col"
            class="table-spacing border-0 text-center"
          >
            Progress
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="member in teamMembers"
          :key="member.name"
        >
          <td class="table-spacing border-0">
            <div class="d-flex">
              <VAvatar
                size="38"
                :image="member.profilePic"
                class="me-3"
              />

              <div>
                <h6 class="text-base font-weight-medium">
                  {{ member.name }}
                </h6>
                <span class="text-sm text-disabled">{{ member.designation }}</span>
              </div>
            </div>
          </td>

          <td class="table-spacing border-0">
            <VChip
              label
              density="compact"
              :color="member.projectIndication"
            >
              {{ member.project }}
            </VChip>
          </td>

          <td class="table-spacing border-0">
            <span>{{ member.task }}</span>
          </td>

          <td class="table-spacing text-center border-0">
            <VProgressCircular
              :color="member.projectIndication"
              :model-value="member.progress"
            />
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>

<style lang="scss" scoped>
.table-spacing {
  padding-block: 0.48rem !important;
  padding-inline: 1.5rem !important;
}
</style>
