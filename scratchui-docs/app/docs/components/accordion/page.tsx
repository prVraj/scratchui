import type { Metadata } from 'next'
import PageHeader from '@/components/docs/PageHeader'
import ComponentTabs from '@/components/docs/ComponentTabs'
import PropsTable from '@/components/docs/PropsTable'
import { highlight } from '@/lib/highlight'
import { getInstallSteps } from '@/lib/installSteps'
import AccordionPreview from './AccordionPreview'

export const metadata: Metadata = { title: 'Accordion' }

const accordionCode = `import { Accordion } from 'scratchui'

export default function Example() {
  return (
    <Accordion defaultValue="q1">
      <Accordion.Item value="q1">
        <Accordion.Trigger>Does it have any dependencies?</Accordion.Trigger>
        <Accordion.Content>
          Zero. Just import scratchui and the tokens.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="q2">
        <Accordion.Trigger>Can I use it with Next.js?</Accordion.Trigger>
        <Accordion.Content>
          Yes. Works wherever React works.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
}`

const propsRows = [
  { prop: 'items', type: 'AccordionItem[]', defaultVal: '—', description: 'Array of items: { title, content }.' },
  { prop: 'allowMultiple', type: 'boolean', defaultVal: 'false', description: 'Whether multiple items can be open at once.' },
  { prop: 'defaultOpen', type: 'number[]', defaultVal: '[]', description: 'Indexes of items that start open.' },
]

export default async function AccordionPage() {
  const codeHtml = await highlight(accordionCode, 'tsx')
  const installSteps = getInstallSteps(
    'Accordion',
    "import { Accordion } from 'scratchui'\n\n<Accordion defaultValue=\"q1\">\n  <Accordion.Item value=\"q1\">\n    <Accordion.Trigger>Question</Accordion.Trigger>\n    <Accordion.Content>Answer</Accordion.Content>\n  </Accordion.Item>\n</Accordion>"
  )

  return (
    <div>
      <PageHeader
        title="Accordion"
        description="Collapses content like a dream. Opens when asked. Doesn't talk back."
      />
      <ComponentTabs
        preview={<AccordionPreview />}
        codeHtml={codeHtml}
        code={accordionCode}
        installSteps={installSteps}
      />
      <PropsTable rows={propsRows} />
    </div>
  )
}
