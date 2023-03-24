<script setup lang="ts">
import type { SearchHeader, SearchItem } from '@/@fake-db/types'
import axios from '@axios'
import { useThemeConfig } from '@core/composable/useThemeConfig'

interface Suggestion {
  icon: string
  title: string
  url: object
}
const { appContentLayoutNav } = useThemeConfig()

interface SuggestionGroup {
  title: string
  content: Suggestion[]
}

defineOptions({
  inheritAttrs: false,
})

// 👉 Is App Search Bar Visible
const isAppSearchBarVisible = ref(false)

// 👉 Default suggestions
const suggestionGroups: SuggestionGroup[] = [
  {
    title: 'Popular Searches',
    content: [
      { icon: 'bx-bar-chart', title: 'Analytics', url: { name: 'dashboards-analytics' } },
      { icon: 'bx-doughnut-chart', title: 'CRM', url: { name: 'dashboards-crm' } },
      { icon: 'bx-file-blank', title: 'Invoice List', url: { name: 'apps-invoice-list' } },
      { icon: 'bx-group', title: 'User List', url: { name: 'apps-user-list' } },
    ],
  },
  {
    title: 'Apps & Pages',
    content: [
      { icon: 'bx-calendar', title: 'Calendar', url: { name: 'apps-calendar' } },
      { icon: 'bx-file-blank', title: 'Invoice Add', url: { name: 'apps-invoice-add' } },
      { icon: 'bx-dollar', title: 'Pricing', url: { name: 'pages-pricing' } },
      { icon: 'bx-cog', title: 'Account Settings', url: { name: 'pages-account-settings-tab', params: { tab: 'account' } } },
    ],
  },
  {
    title: 'User Interface',
    content: [
      { icon: 'bx-text', title: 'Typography', url: { name: 'pages-typography' } },
      { icon: 'bx-square-rounded', title: 'Tabs', url: { name: 'components-tabs' } },
      { icon: 'bxs-hand-up', title: 'Buttons', url: { name: 'components-button' } },
      { icon: 'bxs-keyboard', title: 'Statistics', url: { name: 'pages-cards-card-statistics' } },
    ],
  },
  {
    title: 'Popular Searches',
    content: [
      { icon: 'bx-list-ul', title: 'Select', url: { name: 'forms-select' } },
      { icon: 'bx-check-square', title: 'Combobox', url: { name: 'forms-combobox' } },
      { icon: 'bx-calendar', title: 'Date & Time Picker', url: { name: 'forms-date-time-picker' } },
      { icon: 'bx-star', title: 'Rating', url: { name: 'forms-rating' } },
    ],
  },
]

// 👉 No Data suggestion
const noDataSuggestions: Suggestion[] = [
  {
    title: 'Analytics Dashboard',
    icon: 'bx-cart',
    url: { name: 'dashboards-analytics' },
  },
  {
    title: 'Account Settings',
    icon: 'bx-user',
    url: { name: 'pages-account-settings-tab', params: { tab: 'account' } },
  },
  {
    title: 'Pricing Page',
    icon: 'bx-dollar',
    url: { name: 'pages-pricing' },
  },
]

const searchQuery = ref('')
const searchResult = ref<(SearchItem | SearchHeader)[]>([])
const router = useRouter()

// 👉 fetch search result API
watchEffect(() => {
  axios.get('/app-bar/search', {
    params: {
      q: searchQuery.value,
    },
  }).then(response => {
    searchResult.value = response.data
  })
})

// 👉 redirect the selected page
const redirectToSuggestedOrSearchedPage = (selected: Suggestion) => {
  router.push(selected.url)

  isAppSearchBarVisible.value = false
  searchQuery.value = ''
}

const LazyAppBarSearch = defineAsyncComponent(() => import('@core/components/AppBarSearch.vue'))
</script>

<template>
  <div
    class="d-flex align-center cursor-pointer"
    v-bind="$attrs"
    style="user-select: none;"
    @click="isAppSearchBarVisible = !isAppSearchBarVisible"
  >
    <!-- 👉 Search Trigger button -->
    <IconBtn class="me-1">
      <VIcon
        size="22"
        icon="bx-search"
      />
    </IconBtn>

    <span
      v-if="appContentLayoutNav === 'vertical'"
      class="d-none d-md-flex align-center text-disabled"
    >
      <span class="me-3">Search</span>
      <span class="meta-key">&#8984;K</span>
    </span>
  </div>

  <!-- 👉 App Bar Search -->
  <LazyAppBarSearch
    v-model:isDialogVisible="isAppSearchBarVisible"
    v-model:search-query="searchQuery"
    :search-results="searchResult"
    :suggestions="suggestionGroups"
    :no-data-suggestion="noDataSuggestions"
    @item-selected="redirectToSuggestedOrSearchedPage"
  >
    <!--
      <template #suggestions>
      use this slot if you want to override default suggestions
      </template>
    -->

    <!--
      <template #noData>
      use this slot to change the view of no data section
      </template>
    -->

    <!--
      <template #searchResult="{ item }">
      use this slot to change the search item
      </template>
    -->
  </LazyAppBarSearch>
</template>

<style lang="scss" scoped>
@use "@styles/variables/_vuetify.scss";

.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>
