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
  { prop: 'defaultValue', type: 'string', defaultVal: '—', description: 'The item open by default (uncontrolled).' },
  { prop: 'value', type: 'string | null', defaultVal: '—', description: 'Controlled open item value.' },
  { prop: 'onValueChange', type: '(value: string | null) => void', defaultVal: '—', description: 'Called when the open item changes.' },
  { prop: 'type', type: "'single' | 'multiple'", defaultVal: "'single'", description: 'Whether one or multiple items can be open at once.' },
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
