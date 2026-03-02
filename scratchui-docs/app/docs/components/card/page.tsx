import type { Metadata } from 'next'
import PageHeader from '@/components/docs/PageHeader'
import ComponentTabs from '@/components/docs/ComponentTabs'
import PropsTable from '@/components/docs/PropsTable'
import { highlight } from '@/lib/highlight'
import { getInstallSteps } from '@/lib/installSteps'
import CardPreview from './CardPreview'

export const metadata: Metadata = { title: 'Card' }

const cardCode = `import { Card } from 'scratchui'

export default function Example() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Getting Started</Card.Title>
        <Card.Description>Everything you need to know in one place.</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Your main content goes here.</p>
      </Card.Content>
      <Card.Footer>
        <button>Read more →</button>
      </Card.Footer>
    </Card>
  )
}`

const propsRows = [
  { prop: 'children', type: 'ReactNode', defaultVal: '—', description: 'Content rendered inside the card.' },
  { prop: 'className', type: 'string', defaultVal: '—', description: 'Additional class names for the root element.' },
  { prop: 'shadow', type: "'none' | 'sm' | 'md'", defaultVal: "'sm'", description: 'Shadow depth of the card.' },
  { prop: 'bordered', type: 'boolean', defaultVal: 'true', description: 'Whether to show the border.' },
]

export default async function CardPage() {
  const codeHtml = await highlight(cardCode, 'tsx')
  const installSteps = getInstallSteps(
    'Card',
    "import { Card } from 'scratchui'\n\n<Card>\n  <Card.Header>\n    <Card.Title>Title</Card.Title>\n  </Card.Header>\n  <Card.Content>Content</Card.Content>\n</Card>"
  )

  return (
    <div>
      <PageHeader
        title="Card"
        description="A box. A beautiful, purposeful, well-padded box. The Swiss Army knife of layout."
      />
      <ComponentTabs
        preview={<CardPreview />}
        codeHtml={codeHtml}
        code={cardCode}
        installSteps={installSteps}
      />
      <PropsTable rows={propsRows} />
    </div>
  )
}
