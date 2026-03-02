import type { Metadata } from 'next'
import PageHeader from '@/components/docs/PageHeader'
import ComponentTabs from '@/components/docs/ComponentTabs'
import PropsTable from '@/components/docs/PropsTable'
import { highlight } from '@/lib/highlight'
import { getInstallSteps } from '@/lib/installSteps'
import TabsPreview from './TabsPreview'

export const metadata: Metadata = { title: 'Tabs' }

const tabsCode = `import { Tabs } from 'scratchui'

export default function Example() {
  return (
    <Tabs defaultValue="overview">
      <Tabs.List>
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="details">Details</Tabs.Trigger>
        <Tabs.Trigger value="changelog">Changelog</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="overview">Overview content here.</Tabs.Content>
      <Tabs.Content value="details">Details content here.</Tabs.Content>
      <Tabs.Content value="changelog">Changelog content here.</Tabs.Content>
    </Tabs>
  )
}`

const propsRows = [
  { prop: 'defaultValue', type: 'string', defaultVal: '—', description: 'The tab active by default (uncontrolled).' },
  { prop: 'value', type: 'string', defaultVal: '—', description: 'Controlled active tab value.' },
  { prop: 'onValueChange', type: '(value: string) => void', defaultVal: '—', description: 'Called when the active tab changes.' },
  { prop: 'orientation', type: "'horizontal' | 'vertical'", defaultVal: "'horizontal'", description: 'Layout direction of the tab list.' },
]

export default async function TabsPage() {
  const codeHtml = await highlight(tabsCode, 'tsx')
  const installSteps = getInstallSteps(
    'Tabs',
    "import { Tabs } from 'scratchui'\n\n<Tabs defaultValue=\"overview\">\n  <Tabs.List>\n    <Tabs.Trigger value=\"overview\">Overview</Tabs.Trigger>\n  </Tabs.List>\n  <Tabs.Content value=\"overview\">Content</Tabs.Content>\n</Tabs>"
  )

  return (
    <div>
      <PageHeader
        title="Tabs"
        description="Keeps related things together without the existential dread of a page reload."
      />
      <ComponentTabs
        preview={<TabsPreview />}
        codeHtml={codeHtml}
        code={tabsCode}
        installSteps={installSteps}
      />
      <PropsTable rows={propsRows} />
    </div>
  )
}
