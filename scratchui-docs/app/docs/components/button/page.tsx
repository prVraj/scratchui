import type { Metadata } from 'next'
import PageHeader from '@/components/docs/PageHeader'
import ComponentTabs from '@/components/docs/ComponentTabs'
import PropsTable from '@/components/docs/PropsTable'
import { highlight } from '@/lib/highlight'
import { getInstallSteps } from '@/lib/installSteps'
import ButtonPreview from './ButtonPreview'

export const metadata: Metadata = { title: 'Button' }

const buttonCode = `import { Button } from 'scratchui'

export default function Example() {
  return (
    <div className="flex items-center gap-3">
      <Button variant="primary" label="Save changes" />
      <Button variant="secondary" label="Cancel" />
      <Button variant="ghost" label="Learn more" />
    </div>
  )
}`

const propsRows = [
  { prop: 'label', type: 'string', defaultVal: '—', description: 'The text displayed inside the button.' },
  { prop: 'variant', type: "'primary' | 'secondary' | 'ghost' | 'danger'", defaultVal: "'primary'", description: 'Visual style of the button.' },
  { prop: 'size', type: "'sm' | 'md' | 'lg'", defaultVal: "'md'", description: 'Size preset controlling padding and font size.' },
  { prop: 'disabled', type: 'boolean', defaultVal: 'false', description: 'Prevents interaction and dims the button.' },
  { prop: 'loading', type: 'boolean', defaultVal: 'false', description: 'Shows a spinner and disables interaction.' },
  { prop: 'leftIcon', type: 'ReactNode', defaultVal: '—', description: 'Icon rendered to the left of the label.' },
  { prop: 'rightIcon', type: 'ReactNode', defaultVal: '—', description: 'Icon rendered to the right of the label.' },
  { prop: 'onClick', type: '() => void', defaultVal: '—', description: 'Callback fired when the button is clicked.' },
]

export default async function ButtonPage() {
  const codeHtml = await highlight(buttonCode, 'tsx')
  const installSteps = getInstallSteps(
    'Button',
    "import { Button } from 'scratchui'\n\n<Button label=\"Save changes\" variant=\"primary\" />"
  )

  return (
    <div>
      <PageHeader
        title="Button"
        description="The one component every app needs. Ours doesn't judge what you put inside it."
      />
      <ComponentTabs
        preview={<ButtonPreview />}
        codeHtml={codeHtml}
        code={buttonCode}
        installSteps={installSteps}
      />
      <PropsTable rows={propsRows} />
    </div>
  )
}
