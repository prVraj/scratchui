import type { Metadata } from 'next'
import PageHeader from '@/components/docs/PageHeader'
import ComponentTabs from '@/components/docs/ComponentTabs'
import PropsTable from '@/components/docs/PropsTable'
import { highlight } from '@/lib/highlight'
import { getInstallSteps } from '@/lib/installSteps'
import TooltipPreview from './TooltipPreview'

export const metadata: Metadata = { title: 'Tooltip' }

const tooltipCode = `import { Tooltip } from 'scratchui'

export default function Example() {
  return (
    <div className="flex items-center gap-4">
      <Tooltip content="Saves your work. Hopefully.">
        <button>Save</button>
      </Tooltip>
      <Tooltip content="Cannot be undone. We checked.">
        <button>Delete</button>
      </Tooltip>
    </div>
  )
}`

const propsRows = [
  { prop: 'content', type: 'string', defaultVal: '—', description: 'Text shown inside the tooltip.' },
  { prop: 'children', type: 'ReactNode', defaultVal: '—', description: 'The element that triggers the tooltip on hover/focus.' },
  { prop: 'position', type: "'top' | 'bottom' | 'left' | 'right'", defaultVal: "'top'", description: 'Where the tooltip appears relative to the trigger.' },
  { prop: 'delay', type: 'number', defaultVal: '200', description: 'Delay in ms before tooltip appears.' },
]

export default async function TooltipPage() {
  const codeHtml = await highlight(tooltipCode, 'tsx')
  const installSteps = getInstallSteps(
    'Tooltip',
    "import { Tooltip } from 'scratchui'\n\n<Tooltip content=\"Helpful hint\">\n  <button>Hover me</button>\n</Tooltip>"
  )

  return (
    <div>
      <PageHeader
        title="Tooltip"
        description="Explains the obvious for people who hover. Every UI has at least twelve of these."
      />
      <ComponentTabs
        preview={<TooltipPreview />}
        codeHtml={codeHtml}
        code={tooltipCode}
        installSteps={installSteps}
      />
      <PropsTable rows={propsRows} />
    </div>
  )
}
