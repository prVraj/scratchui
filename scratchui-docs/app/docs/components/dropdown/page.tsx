import type { Metadata } from 'next'
import PageHeader from '@/components/docs/PageHeader'
import ComponentTabs from '@/components/docs/ComponentTabs'
import PropsTable from '@/components/docs/PropsTable'
import { highlight } from '@/lib/highlight'
import { getInstallSteps } from '@/lib/installSteps'
import DropdownPreview from './DropdownPreview'

export const metadata: Metadata = { title: 'Dropdown' }

const dropdownCode = `import { Dropdown } from 'scratchui'

export default function Example() {
  return (
    <Dropdown trigger={<button>Options</button>}>
      <Dropdown.Item onClick={() => console.log('edit')}>Edit</Dropdown.Item>
      <Dropdown.Item onClick={() => console.log('share')}>Share</Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Item variant="danger" onClick={() => console.log('delete')}>
        Delete
      </Dropdown.Item>
    </Dropdown>
  )
}`

const propsRows = [
  { prop: 'trigger', type: 'ReactNode', defaultVal: '—', description: 'Element that opens the dropdown on click.' },
  { prop: 'children', type: 'ReactNode', defaultVal: '—', description: 'Dropdown items. Use Dropdown.Item and Dropdown.Separator.' },
  { prop: 'align', type: "'left' | 'right'", defaultVal: "'left'", description: 'Alignment of the menu relative to the trigger.' },
  { prop: 'closeOnSelect', type: 'boolean', defaultVal: 'true', description: 'Whether clicking an item closes the dropdown.' },
]

export default async function DropdownPage() {
  const codeHtml = await highlight(dropdownCode, 'tsx')
  const installSteps = getInstallSteps(
    'Dropdown',
    "import { Dropdown } from 'scratchui'\n\n<Dropdown trigger={<button>Options</button>}>\n  <Dropdown.Item>Edit</Dropdown.Item>\n</Dropdown>"
  )

  return (
    <div>
      <PageHeader
        title="Dropdown"
        description="A list that hides until it's needed. Introvert energy. Maximum usefulness."
      />
      <ComponentTabs
        preview={<DropdownPreview />}
        codeHtml={codeHtml}
        code={dropdownCode}
        installSteps={installSteps}
      />
      <PropsTable rows={propsRows} />
    </div>
  )
}
