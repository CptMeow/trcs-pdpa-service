<script lang="ts" setup>
import UserInvoiceTable from './UserInvoiceTable.vue'

// Images
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import figma from '@images/icons/project-icons/figma.png'
import html5 from '@images/icons/project-icons/html5.png'
import python from '@images/icons/project-icons/python.png'
import react from '@images/icons/project-icons/react.png'
import sketch from '@images/icons/project-icons/sketch.png'
import vue from '@images/icons/project-icons/vue.png'
import xamarin from '@images/icons/project-icons/xamarin.png'

const projects = [
  {
    logo: react,
    name: 'BGC eCommerce App',
    project: 'React Project',
    totalTask: '122/240',
    progress: 78,
    hours: '18:42',
  },
  {
    logo: figma,
    name: 'Falcon Logo Design',
    project: 'Figma Project',
    totalTask: '09/56',
    progress: 18,
    hours: '20:42',
  },
  {
    logo: vue,
    name: 'Dashboard Design',
    project: 'Vuejs Project',
    totalTask: '290/320',
    progress: 62,
    hours: '120:87',
  },
  {
    logo: xamarin,
    name: 'Foodista mobile app',
    project: 'Xamarin Project',
    totalTask: '290/320',
    progress: 8,
    hours: '120:87',
  },
  {
    logo: python,
    name: 'Dojo Email App',
    project: 'Python Project',
    totalTask: '120/186',
    progress: 49,
    hours: '230:10',
  },
  {
    logo: sketch,
    name: 'Blockchain Website',
    project: 'Sketch Project',
    totalTask: '99/109',
    progress: 92,
    hours: '342:41',
  },
  {
    logo: html5,
    name: 'Hoffman Website',
    project: 'HTML Project',
    totalTask: '98/110',
    progress: 88,
    hours: '12:45',
  },
]

const resolveUserProgressVariant = (progress: number) => {
  if (progress <= 25)
    return 'error'
  if (progress > 25 && progress <= 50)
    return 'warning'
  if (progress > 50 && progress <= 75)
    return 'primary'
  if (progress > 75 && progress <= 100)
    return 'success'

  return 'secondary'
}
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Project List">
        <VDivider />
        <!-- 👉 project List table -->
        <VTable class="text-no-wrap">
          <thead>
            <tr>
              <th scope="col">
                PROJECT
              </th>
              <th scope="col">
                TOTAL TASK
              </th>
              <th scope="col">
                PROGRESS
              </th>
              <th scope="col">
                HOURS
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="project in projects"
              :key="project.name"
            >
              <td class="d-flex align-center">
                <VAvatar
                  :size="34"
                  class="me-3"
                  :image="project.logo"
                />
                <div>
                  <p class="font-weight-medium mb-0 text-high-emphasis">
                    {{ project.name }}
                  </p>
                  <p class="text-xs text-medium-emphasis mb-0">
                    {{ project.project }}
                  </p>
                </div>
              </td>

              <td>
                <span class="text-high-emphasis">{{ project.totalTask }}</span>
              </td>

              <td>
                <span>{{ project.progress }}%</span>
                <VProgressLinear
                  :height="6"
                  :model-value="project.progress"
                  rounded
                  :color="resolveUserProgressVariant(project.progress)"
                />
              </td>

              <td class="text-medium-emphasis">
                {{ project.hours }}
              </td>
            </tr>
          </tbody>
        </VTable>
      </VCard>
    </VCol>

    <VCol cols="12">
      <!-- 👉 Activity timeline -->
      <VCard title="User Activity Timeline">
        <VCardText>
          <VTimeline
            density="compact"
            align="start"
            truncate-line="start"
            class="v-timeline-density-compact"
            line-inset="12"
          >
            <VTimelineItem
              dot-color="error"
              size="x-small"
            >
              <div class="d-flex justify-space-between align-center flex-wrap">
                <h4 class="text-base font-weight-semibold me-1 mb-3">
                  12 Invoices have been paid
                </h4>
                <span class="text-sm text-disabled text-no-wrap">12 min ago</span>
              </div>
              <p class="mb-2">
                Invoices have been paid to the company
              </p>
              <div class="d-flex align-center mt-2">
                <VIcon
                  color="error"
                  icon="bxs-file-pdf"
                  size="24"
                  class="me-3"
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
                <h4 class="text-base font-weight-semibold me-1 mb-3">
                  Meeting with john
                </h4>
                <span class="text-sm text-disabled text-no-wrap">45 min ago</span>
              </div>

              <p class="mb-1">
                React Project meeting with john @10:15am
              </p>

              <div class="d-flex align-center mt-3">
                <VAvatar
                  size="34"
                  class="me-2"
                  :image="avatar2"
                />
                <div>
                  <h6 class="text-sm font-weight-semibold mb-0">
                    John Doe (Client)
                  </h6>
                  <span>CEO of Kelly Group</span>
                </div>
              </div>
            </VTimelineItem>

            <VTimelineItem
              dot-color="info"
              size="x-small"
            >
              <div class="d-flex justify-space-between align-center flex-wrap">
                <h4 class="text-base font-weight-semibold me-1 mb-3">
                  Create a new react project for client
                </h4>
                <span class="text-sm text-disabled text-no-wrap">2 day ago</span>
              </div>
              <p>
                5 team members in a project
              </p>
              <div class="d-flex align-center">
                <div class="v-avatar-group me-4">
                  <VAvatar :size="44">
                    <VImg :src="avatar1" />
                    <VTooltip
                      activator="parent"
                      location="top"
                    >
                      John Doe
                    </VTooltip>
                  </VAvatar>

                  <VAvatar :size="44">
                    <VImg :src="avatar4" />
                    <VTooltip
                      activator="parent"
                      location="top"
                    >
                      Vivian Padilla
                    </VTooltip>
                  </VAvatar>

                  <VAvatar :size="44">
                    <VImg :src="avatar5" />
                    <VTooltip
                      activator="parent"
                      location="top"
                    >
                      Scott Wells
                    </VTooltip>
                  </VAvatar>

                  <VAvatar :size="44">
                    <VImg :src="avatar6" />
                    <VTooltip
                      activator="parent"
                      location="top"
                    >
                      Angel Bishop
                    </VTooltip>
                  </VAvatar>
                </div>
                <div class="d-flex flex-column">
                  <span class="font-weight-semibold text-high-emphasis">
                    Create a new project for client
                  </span>
                  <span>
                    5 team members in a project
                  </span>
                </div>
              </div>
            </VTimelineItem>

            <VTimelineItem
              dot-color="success"
              size="x-small"
            >
              <div class="d-flex justify-space-between align-center flex-wrap">
                <h4 class="text-base font-weight-semibold me-1 mb-3">
                  12 Create invoices for client
                </h4>
                <span class="text-sm text-disabled text-no-wrap">5 day ago</span>
              </div>
              <p class="mb-0">
                Weekly review of freshly prepared design for our new app.
              </p>
            </VTimelineItem>
          </VTimeline>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <UserInvoiceTable />
    </VCol>
  </VRow>
</template>
