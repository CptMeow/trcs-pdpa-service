<script setup lang="ts">
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
    TotalTask: '122/240',
    progress: 78,
    hours: '18:42',
  },
  {
    logo: figma,
    name: 'Falcon Logo Design',
    project: 'Figma Project',
    TotalTask: '9/56',
    progress: 25,
    hours: '20:42',
  },
  {
    logo: vue,
    name: 'Dashboard Design',
    project: 'Vuejs Project',
    TotalTask: '290/320',
    progress: 62,
    hours: '120:87',
  },
  {
    logo: xamarin,
    name: 'Foodista mobile app',
    project: 'Xamarin Project',
    TotalTask: '7/63',
    progress: 8,
    hours: '120:87',
  },
  {
    logo: python,
    name: 'Dojo Email App',
    project: 'Python Project',
    TotalTask: '120/186',
    progress: 51,
    hours: '230:10',
  },
  {
    logo: sketch,
    name: 'Blockchain Website',
    project: 'Sketch Project',
    TotalTask: '99/109',
    progress: 92,
    hours: '342:41',
  },
  {
    logo: html5,
    name: 'Hoffman Website',
    project: 'HTML Project',
    TotalTask: '98/110',
    progress: 80,
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

const moreList = [
  { title: 'Download', value: 'Download' },
  { title: 'Delete', value: 'Delete' },
  { title: 'View', value: 'View' },
]
</script>

<template>
  <VCard title="Project List">
    <VDivider />
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
            ACTION
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
              <h6 class="text-sm font-weight-medium">
                {{ project.name }}
              </h6>
              <p class="text-xs mb-0">
                {{ project.project }}
              </p>
            </div>
          </td>

          <td class="text-high-emphasis">
            {{ project.TotalTask }}
          </td>

          <td style="min-width: 8rem;">
            <span class="text-high-emphasis">
              {{ project.progress }}%
            </span>
            <VProgressLinear
              :height="6"
              :model-value="project.progress"
              rounded
              :color="resolveUserProgressVariant(project.progress)"
            />
          </td>

          <td>
            <MoreBtn :menu-list="moreList" />
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>
