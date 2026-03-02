import type { Metadata } from 'next'
import PageHeader from '@/components/docs/PageHeader'
import ComponentTabs from '@/components/docs/ComponentTabs'
import PropsTable from '@/components/docs/PropsTable'
import { highlight } from '@/lib/highlight'
import { getInstallSteps } from '@/lib/installSteps'
import ToastPreview from './ToastPreview'

export const metadata: Metadata = { title: 'Toast' }

const toastCode = `import { useToast } from 'scratchui'

export default function Example() {
  const { toast } = useToast()

  return (
    <div className="flex gap-2">
      <button onClick={() => toast({ message: 'Changes saved.', variant: 'success' })}>
        Success
      </button>
      <button onClick={() => toast({ message: 'Something went wrong.', variant: 'error' })}>
        Error
      </button>
      <button onClick={() => toast({ message: 'Heads up.', variant: 'info' })}>
        Info
      </button>
    </div>
  )
}`

const propsRows = [
  { prop: 'message', type: 'string', defaultVal: '—', description: 'Text content of the toast notification.' },
  { prop: 'variant', type: "'default' | 'success' | 'warning' | 'danger'", defaultVal: "'default'", description: 'Visual style of the toast.' },
  { prop: 'duration', type: 'number', defaultVal: '4000', description: 'Time in milliseconds before the toast auto-dismisses.' },
  { prop: 'onClose', type: '() => void', defaultVal: '—', description: 'Called when the toast dismisses. Also shows the close button.' },
]

export default async function ToastPage() {
  const codeHtml = await highlight(toastCode, 'tsx')
  const installSteps = getInstallSteps(
    'Toast',
    "import { useToast } from 'scratchui'\n\nconst { toast } = useToast()\ntoast({ message: 'Done!', variant: 'success' })"
  )

  return (
    <div>
      <PageHeader
        title="Toast"
        description="Pops up, says something useful, disappears before it outstays its welcome."
      />
      <ComponentTabs
        preview={<ToastPreview />}
        codeHtml={codeHtml}
        code={toastCode}
        installSteps={installSteps}
      />
      <PropsTable rows={propsRows} />
    </div>
  )
}
