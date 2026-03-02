export interface NavItem {
  title: string
  href: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const navigation: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Theming', href: '/docs/theming' },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Badge', href: '/docs/components/badge' },
      { title: 'Input', href: '/docs/components/input' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Modal', href: '/docs/components/modal' },
      { title: 'Toast', href: '/docs/components/toast' },
      { title: 'Dropdown', href: '/docs/components/dropdown' },
      { title: 'Tooltip', href: '/docs/components/tooltip' },
      { title: 'Tabs', href: '/docs/components/tabs' },
      { title: 'Accordion', href: '/docs/components/accordion' },
    ],
  },
]
