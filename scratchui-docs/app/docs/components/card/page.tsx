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
  { prop: 'variant', type: "'default' | 'bordered' | 'elevated'", defaultVal: "'default'", description: 'Visual style of the card.' },
  { prop: 'padding', type: "'none' | 'sm' | 'md' | 'lg'", defaultVal: "'md'", description: 'Internal padding of the card.' },
  { prop: 'onClick', type: '() => void', defaultVal: '—', description: 'Makes the card interactive (adds role="button").' },
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
