// ** Mock Adapter
import mock from '@/@fake-db/mock'

// ** Types
import type { SearchHeader, SearchItem } from '@/@fake-db/types'

const database: SearchItem[] = [
  {
    id: 1,
    url: { name: 'dashboards-analytics' },
    icon: 'bx-line-chart',
    title: 'Analytics Dashboard',
    category: 'dashboards',
  },
  {
    id: 2,
    url: { name: 'dashboards-crm' },
    icon: 'bx-cart',
    title: 'CRM Dashboard',
    category: 'dashboards',
  },
  {
    id: 3,
    url: { name: 'apps-email' },
    icon: 'bx-envelope',
    title: 'Email',
    category: 'appsPages',
  },
  {
    id: 4,
    url: { name: 'apps-chat' },
    icon: 'bx-message',
    title: 'Chat',
    category: 'appsPages',
  },
  {
    id: 5,
    url: { name: 'apps-calendar' },
    icon: 'bx-calendar-alt',
    title: 'Calendar',
    category: 'appsPages',
  },
  {
    id: 6,
    url: { name: 'apps-invoice-list' },
    icon: 'bx-list-ol',
    title: 'Invoice List',
    category: 'appsPages',
  },
  {
    id: 7,
    url: { name: 'apps-invoice-preview-id', params: { id: '5036' } },
    icon: 'bx-file',
    title: 'Invoice Preview',
    category: 'appsPages',
  },
  {
    id: 9,
    url: { name: 'apps-invoice-edit-id', params: { id: '5036' } },
    icon: 'bx-edit',
    title: 'Invoice Edit',
    category: 'appsPages',
  },
  {
    id: 11,
    url: { name: 'apps-invoice-add' },
    icon: 'bxs-file-plus',
    title: 'Invoice Add',
    category: 'appsPages',
  },
  {
    id: 12,
    url: { name: 'apps-user-list' },
    icon: 'bx-group',
    title: 'User List',
    category: 'appsPages',
  },
  {
    id: 13,
    url: { name: 'apps-user-view-id', params: { id: 21 } },
    icon: 'bx-show',
    title: 'User View - Overview',
    category: 'appsPages',
  },
  {
    id: 15,
    url: { name: 'pages-help-center' },
    icon: 'bx-help-circle',
    title: 'Help Center',
    category: 'appsPages',
  },
  {
    id: 16,
    url: { name: 'pages-user-profile-tab', params: { tab: 'profile' } },
    icon: 'bx-user-circle',
    title: 'User Profile - Profile',
    category: 'appsPages',
  },
  {
    id: 17,
    url: { name: 'pages-account-settings-tab', params: { tab: 'account' } },
    icon: 'bx-cog',
    title: 'Account Settings - Account',
    category: 'appsPages',
  },
  {
    id: 18,
    url: { name: 'pages-account-settings-tab', params: { tab: 'security' } },
    icon: 'bx-lock-open-alt',
    title: 'Account Settings - Security',
    category: 'appsPages',
  },
  {
    id: 19,
    url: { name: 'pages-account-settings-tab', params: { tab: 'billing-plans' } },
    icon: 'bx-dollar',
    title: 'Account Settings - Billing',
    category: 'appsPages',
  },
  {
    id: 20,
    url: { name: 'pages-account-settings-tab', params: { tab: 'notification' } },
    icon: 'bx-bell',
    title: 'Account Settings - Notifications',
    category: 'appsPages',
  },
  {
    id: 21,
    url: { name: 'pages-account-settings-tab', params: { tab: 'connection' } },
    icon: 'bx-link',
    title: 'Account Settings - Connections',
    category: 'appsPages',
  },
  {
    id: 22,
    url: { name: 'pages-pricing' },
    icon: 'bx-dollar',
    title: 'Pricing',
    category: 'appsPages',
  },
  {
    id: 23,
    url: { name: 'pages-faq' },
    icon: 'bx-help-circle',
    title: 'FAQ',
    category: 'appsPages',
  },
  {
    id: 24,
    url: { name: 'pages-misc-coming-soon' },
    icon: 'bx-time-five',
    title: 'Coming Soon',
    category: 'appsPages',
  },
  {
    id: 25,
    url: { name: 'pages-misc-under-maintenance' },
    icon: 'bx-cog',
    title: 'Under Maintenance',
    category: 'appsPages',
  },
  {
    id: 26,
    url: { name: 'pages-misc-not-found' },
    icon: 'bx-info-circle',
    title: 'Page Not Found - 404',
    category: 'appsPages',
  },
  {
    id: 27,
    url: { name: 'pages-misc-not-authorized' },
    icon: 'bx-user-x',
    title: 'Not Authorized - 401',
    category: 'appsPages',
  },
  {
    id: 28,
    url: { name: 'pages-misc-internal-server-error' },
    icon: 'bx-list-ul',
    title: 'Server Error - 500',
    category: 'appsPages',
  },
  {
    id: 29,
    url: { name: 'pages-authentication-login-v1' },
    icon: 'bx-log-in',
    title: 'Login V1',
    category: 'appsPages',
  },
  {
    id: 30,
    url: { name: 'pages-authentication-login-v2' },
    icon: 'bx-log-in',
    title: 'Login V2',
    category: 'appsPages',
  },
  {
    id: 31,
    url: { name: 'pages-authentication-register-v1' },
    icon: 'bx-user-plus',
    title: 'Register V1',
    category: 'appsPages',
  },
  {
    id: 32,
    url: { name: 'pages-authentication-register-v2' },
    icon: 'bx-user-plus',
    title: 'Register V2',
    category: 'appsPages',
  },
  {
    id: 33,
    icon: 'bx-envelope',
    category: 'appsPages',
    title: 'Verify Email V1',
    url: { name: 'pages-authentication-verify-email-v1' },
  },
  {
    id: 34,
    icon: 'bx-envelope',
    category: 'appsPages',
    title: 'Verify Email V2',
    url: { name: 'pages-authentication-verify-email-v2' },
  },
  {
    id: 35,
    url: { name: 'pages-authentication-forgot-password-v1' },
    icon: 'bx-lock',
    title: 'Forgot Password V1',
    category: 'appsPages',
  },
  {
    id: 36,
    url: { name: 'pages-authentication-forgot-password-v2' },
    icon: 'bx-lock',
    title: 'Forgot Password V2',
    category: 'appsPages',
  },
  {
    id: 37,
    url: { name: 'pages-authentication-reset-password-v1' },
    icon: 'bx-reset',
    title: 'Reset Password V1',
    category: 'appsPages',
  },
  {
    id: 38,
    url: { name: 'pages-authentication-reset-password-v2' },
    icon: 'bx-reset',
    title: 'Reset Password V2',
    category: 'appsPages',
  },
  {
    id: 39,
    icon: 'bx-help-circle',
    category: 'appsPages',
    title: 'Two Steps V1',
    url: { name: 'pages-authentication-two-steps-v1' },
  },
  {
    id: 40,
    icon: 'bx-help-circle',
    category: 'appsPages',
    title: 'Two Steps V2',
    url: { name: 'pages-authentication-two-steps-v2' },
  },
  {
    id: 41,
    url: { name: 'pages-typography' },
    icon: 'bx-font',
    title: 'Typography',
    category: 'userInterface',
  },
  {
    id: 42,
    url: { name: 'pages-icons' },
    icon: 'bx-crown',
    title: 'Icons',
    category: 'userInterface',
  },
  {
    id: 43,
    url: { name: 'pages-cards-card-basic' },
    icon: 'bx-card',
    title: 'Card Basic',
    category: 'userInterface',
  },
  {
    id: 44,
    url: { name: 'pages-cards-card-statistics' },
    icon: 'bx-bar-chart-square',
    title: 'Card Statistics',
    category: 'userInterface',
  },
  {
    id: 45,
    url: { name: 'pages-cards-card-gamification' },
    icon: 'bx-id-card',
    title: 'Card Gamification',
    category: 'userInterface',
  },
  {
    id: 46,
    url: { name: 'pages-cards-card-actions' },
    icon: 'bx-mouse-alt',
    title: 'Card Actions',
    category: 'userInterface',
  },
  {
    id: 47,
    url: { name: 'components-alert' },
    icon: 'bx-error',
    title: 'Alerts',
    category: 'userInterface',
  },
  {
    id: 48,
    url: { name: 'components-avatar' },
    icon: 'bx-user-circle',
    title: 'Avatars',
    category: 'userInterface',
  },
  {
    id: 49,
    url: { name: 'components-badge' },
    icon: 'bx-bell-plus',
    title: 'Badges',
    category: 'userInterface',
  },
  {
    id: 50,
    url: { name: 'components-button' },
    icon: 'bx-plus-circle',
    title: 'Buttons',
    category: 'userInterface',
  },
  {
    id: 51,
    url: { name: 'components-chip' },
    icon: 'bx-square-rounded',
    title: 'Chips',
    category: 'userInterface',
  },
  {
    id: 52,
    url: { name: 'components-dialog' },
    icon: 'bx-credit-card-front',
    title: 'Dialogs',
    category: 'userInterface',
  },
  {
    id: 53,
    url: { name: 'components-list' },
    icon: 'bx-list-ul',
    title: 'List',
    category: 'userInterface',
  },
  {
    id: 54,
    url: { name: 'components-menu' },
    icon: 'bx-menu',
    title: 'Menu',
    category: 'userInterface',
  },
  {
    id: 55,
    url: { name: 'components-pagination' },
    icon: 'bx-last-page',
    title: 'Pagination',
    category: 'userInterface',
  },
  {
    id: 56,
    url: { name: 'components-progress-circular' },
    icon: 'bx-loader-circle',
    title: 'Progress Circular',
    category: 'userInterface',
  },
  {
    id: 83,
    url: { name: 'components-progress-linear' },
    icon: 'bx-loader-circle',
    title: 'Progress Linear',
    category: 'userInterface',
  },
  {
    id: 57,
    url: { name: 'components-expansion-panel' },
    icon: 'bx-vertical-center',
    title: 'Expansion Panel',
    category: 'userInterface',
  },
  {
    id: 58,
    url: { name: 'components-snackbar' },
    icon: 'bx-message-dots',
    title: 'Snackbar',
    category: 'userInterface',
  },
  {
    id: 59,
    url: { name: 'components-tabs' },
    icon: 'bx-server',
    title: 'Tabs',
    category: 'userInterface',
  },
  {
    id: 60,
    url: { name: 'components-timeline' },
    icon: 'bx-objects-horizontal-left',
    title: 'Timeline',
    category: 'userInterface',
  },
  {
    id: 61,
    url: { name: 'components-tooltip' },
    icon: 'bx-message-alt-edit',
    title: 'Tooltip',
    category: 'userInterface',
  },
  {
    id: 62,
    url: { name: 'forms-textfield' },
    icon: 'bx-text',
    title: 'TextField',
    category: 'formsTables',
  },
  {
    id: 63,
    url: { name: 'forms-select' },
    icon: 'bx-list-ul',
    title: 'Select',
    category: 'formsTables',
  },
  {
    id: 64,
    url: { name: 'forms-checkbox' },
    icon: 'bx-check-square',
    title: 'Checkbox',
    category: 'formsTables',
  },
  {
    id: 65,
    url: { name: 'forms-radio' },
    icon: 'bx-radio-circle-marked',
    title: 'Radio',
    category: 'formsTables',
  },
  {
    id: 66,
    url: { name: 'forms-combobox' },
    icon: 'bx-checkbox-checked',
    title: 'Combobox',
    category: 'formsTables',
  },
  {
    id: 67,
    url: { name: 'forms-date-time-picker' },
    icon: 'bx-calendar',
    title: 'Date Time picker',
    category: 'formsTables',
  },
  {
    id: 68,
    url: { name: 'forms-textarea' },
    icon: 'bx-credit-card-front',
    title: 'Textarea',
    category: 'formsTables',
  },
  {
    id: 70,
    url: { name: 'forms-switch' },
    icon: 'bx-toggle-right',
    title: 'Switch',
    category: 'formsTables',
  },
  {
    id: 71,
    url: { name: 'forms-file-input' },
    icon: 'bx-arrow-from-bottom',
    title: 'File Input',
    category: 'formsTables',
  },
  {
    id: 72,
    url: { name: 'forms-rating' },
    icon: 'bx-star',
    title: 'Form Rating',
    category: 'formsTables',
  },
  {
    id: 73,
    url: { name: 'forms-slider' },
    icon: 'bx-slider',
    title: 'Slider',
    category: 'formsTables',
  },
  {
    id: 74,
    url: { name: 'forms-range-slider' },
    icon: 'bx-slider',
    title: 'Range Slider',
    category: 'formsTables',
  },
  {
    id: 75,
    url: { name: 'forms-form-layouts' },
    icon: 'bx-cube',
    title: 'Form Layouts',
    category: 'formsTables',
  },
  {
    id: 76,
    url: { name: 'forms-form-validation' },
    icon: 'bx-check-circle',
    title: 'Form Validation',
    category: 'formsTables',
  },
  {
    id: 77,
    url: { name: 'charts-apex-chart' },
    icon: 'bx-line-chart',
    title: 'Apex Chart',
    category: 'chartsMisc',
  },
  {
    id: 78,
    url: { name: 'charts-chartjs' },
    icon: 'bx-chart',
    title: 'ChartJS',
    category: 'chartsMisc',
  },
  {
    id: 79,
    url: { name: 'access-control' },
    icon: 'bx-shield',
    title: 'Access Control (ACL)',
    category: 'chartsMisc',
  },
  {
    id: 80,
    url: { name: 'pages-dialog-examples' },
    icon: 'bx-credit-card-front',
    title: 'Dialog Examples',
    category: 'appsPages',
  },
  {
    id: 81,
    url: { name: 'forms-custom-input' },
    icon: 'bx-list-check',
    title: 'Custom Input',
    category: 'formsTables',
  },
  {
    id: 82,
    url: { name: 'forms-autocomplete' },
    icon: 'bx-align-left',
    title: 'Autocomplete',
    category: 'formsTables',
  },
  {
    id: 83,
    url: { name: 'pages-cards-card-widgets' },
    icon: 'bx-bar-chart-square',
    title: 'Card Widgets',
    category: 'userInterface',
  },
  {
    id: 84,
    url: { name: 'pages-cards-card-advance' },
    icon: 'bx-collection',
    title: 'Card Advance',
    category: 'userInterface',
  },
  {
    id: 85,
    url: { name: 'dashboards-ecommerce' },
    icon: 'bxs-analyse',
    title: 'Dashboard eCommerce',
    category: 'dashboards',
  },
]

// ** GET Search Data
// eslint-disable-next-line sonarjs/cognitive-complexity
mock.onGet('/app-bar/search').reply(config => {
  const { q = '' } = config.params
  const queryLowered = q.toLowerCase()

  const exactData: { [k: string]: SearchItem[] } = {
    dashboards: [],
    appsPages: [],
    userInterface: [],
    formsTables: [],
    chartsMisc: [],
  }

  const includeData: { [k: string]: SearchItem[] } = {
    dashboards: [],
    appsPages: [],
    userInterface: [],
    formsTables: [],
    chartsMisc: [],
  }

  database.forEach(obj => {
    const isMatched = obj.title.toLowerCase().startsWith(queryLowered)
    if (isMatched && exactData[obj.category].length < 5)
      exactData[obj.category].push(obj)
  })

  database.forEach(obj => {
    const isMatched
      = !obj.title.toLowerCase().startsWith(queryLowered) && obj.title.toLowerCase().includes(queryLowered)

    if (isMatched && includeData[obj.category].length < 5)
      includeData[obj.category].push(obj)
  })

  const categoriesCheck: string[] = []

  Object.keys(exactData).forEach(category => {
    if (exactData[category].length > 0)
      categoriesCheck.push(category)
  })
  if (categoriesCheck.length === 0) {
    Object.keys(includeData).forEach(category => {
      if (includeData[category].length > 0)
        categoriesCheck.push(category)
    })
  }

  const resultsLength = categoriesCheck.length === 1 ? 5 : 3

  const mergedData: (SearchItem | SearchHeader)[] = []

  Object.keys(exactData).forEach(element => {
    if (exactData[element].length || includeData[element].length) {
      const r: (SearchItem | SearchHeader)[] = exactData[element].concat(includeData[element]).slice(0, resultsLength)

      r.unshift({ header: element, title: element })

      mergedData.push(...r)
    }
  })

  return [200, [...mergedData]]
})
