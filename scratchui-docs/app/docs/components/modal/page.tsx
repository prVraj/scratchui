import type { Metadata } from 'next'
import PageHeader from '@/components/docs/PageHeader'
import ComponentTabs from '@/components/docs/ComponentTabs'
import PropsTable from '@/components/docs/PropsTable'
import { highlight } from '@/lib/highlight'
import { getInstallSteps } from '@/lib/installSteps'
import ModalPreview from './ModalPreview'

export const metadata: Metadata = { title: 'Modal' }

const modalCode = `import { Modal } from 'scratchui'
import { useState } from 'react'

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header>
          <Modal.Title>Confirm action</Modal.Title>
        </Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to proceed?</p>
        </Modal.Content>
        <Modal.Footer>
          <button onClick={() => setOpen(false)}>Cancel</button>
          <button onClick={() => setOpen(false)}>Confirm</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}`

const propsRows = [
  { prop: 'open', type: 'boolean', defaultVal: 'false', description: 'Controls whether the modal is visible.' },
  { prop: 'onClose', type: '() => void', defaultVal: '—', description: 'Called when the modal should close (backdrop click, Escape key).' },
  { prop: 'children', type: 'ReactNode', defaultVal: '—', description: 'Modal content. Use Modal.Header, Modal.Content, Modal.Footer.' },
  { prop: 'size', type: "'sm' | 'md' | 'lg'", defaultVal: "'md'", description: 'Controls the max-width of the modal.' },
  { prop: 'closeOnBackdrop', type: 'boolean', defaultVal: 'true', description: 'Whether clicking the backdrop closes the modal.' },
]

export default async function ModalPage() {
  const codeHtml = await highlight(modalCode, 'tsx')
  const installSteps = getInstallSteps(
    'Modal',
    "import { Modal } from 'scratchui'\n\n<Modal open={open} onClose={() => setOpen(false)}>\n  <Modal.Content>Hello</Modal.Content>\n</Modal>"
  )

  return (
    <div>
      <PageHeader
        title="Modal"
        description="It demands attention and blocks everything else. Just like that one teammate in standups."
      />
      <ComponentTabs
        preview={<ModalPreview />}
        codeHtml={codeHtml}
        code={modalCode}
        installSteps={installSteps}
      />
      <PropsTable rows={propsRows} />
    </div>
  )
}
