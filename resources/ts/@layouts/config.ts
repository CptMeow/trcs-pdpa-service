import { breakpointsVuetify } from '@vueuse/core'
import { AppContentLayoutNav, ContentWidth, FooterType, NavbarType } from '@layouts/enums'
import type { Config } from '@layouts/types'

export const config: Config = {
  app: {
    title: 'title',
    logo: h('img', { src: '/src/assets/logo.svg' }),

    // logo: () => h('img', { src: 'assets/colored-logo.png' }, null),
    contentWidth: ref(ContentWidth.Boxed),
    contentLayoutNav: ref(AppContentLayoutNav.Vertical),
    overlayNavFromBreakpoint: breakpointsVuetify.md,
    enableI18n: true,
    isRtl: ref(false),
  },
  navbar: {
    type: ref(NavbarType.Sticky),
    navbarBlur: ref(true),
  },
  footer: { type: ref(FooterType.Static) },
  verticalNav: {
    isVerticalNavCollapsed: ref(false),
    defaultNavItemIconProps: { icon: 'bx-circle' },
  },
  horizontalNav: {
    type: ref('sticky'),
  },
  icons: {
    chevronDown: { icon: 'bx-chevron-down' },
    chevronRight: { icon: 'bx-chevron-right' },
    close: { icon: 'bx-x' },
    verticalNavPinned: { icon: 'bx-radio-circle-marked' },
    verticalNavUnPinned: { icon: 'bx-radio-circle' },
    sectionTitlePlaceholder: { icon: 'bx-minus' },
  },
}
