import type { Metadata } from 'next'
import PageHeader from '@/components/docs/PageHeader'
import ComponentTabs from '@/components/docs/ComponentTabs'
import PropsTable from '@/components/docs/PropsTable'
import { highlight } from '@/lib/highlight'
import { getInstallSteps } from '@/lib/installSteps'

export const metadata: Metadata = { title: 'Input' }

const inputCode = `import { Input } from 'scratchui'

export default function Example() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <Input placeholder="Email address" type="email" />
      <Input placeholder="Password" type="password" />
      <Input placeholder="Search..." disabled />
    </div>
  )
}`

const propsRows = [
  { prop: 'type', type: 'string', defaultVal: "'text'", description: 'HTML input type attribute.' },
  { prop: 'placeholder', type: 'string', defaultVal: '—', description: 'Placeholder text shown when empty.' },
  { prop: 'value', type: 'string', defaultVal: '—', description: 'Controlled value of the input.' },
  { prop: 'onChange', type: '(e: ChangeEvent) => void', defaultVal: '—', description: 'Change handler for controlled usage.' },
  { prop: 'disabled', type: 'boolean', defaultVal: 'false', description: 'Prevents interaction.' },
  { prop: 'error', type: 'string', defaultVal: '—', description: 'Error message shown below the input.' },
  { prop: 'label', type: 'string', defaultVal: '—', description: 'Label rendered above the input.' },
]

const InputPreview = () => (
  <div className="flex flex-col gap-4 w-full max-w-sm">
    <div className="flex flex-col gap-1">
      <label className="text-[13px] font-medium text-[#0A0A0A]">Email address</label>
      <input
        type="email"
        placeholder="you@somewhere.com"
        className="px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-[6px] bg-white text-[#0A0A0A] placeholder-[#9CA3AF] outline-none focus:border-[#0A0A0A] transition-colors w-full"
        readOnly
      />
    </div>
    <div className="flex flex-col gap-1">
      <input
        type="email"
        defaultValue="notanemail"
        className="px-3 py-2 text-[13px] border border-[#DC2626] rounded-[6px] bg-white text-[#0A0A0A] outline-none w-full"
        readOnly
      />
      <span className="text-[12px] text-[#DC2626]">{"That doesn't look right"}</span>
    </div>
    <div className="flex flex-col gap-1">
      <input
        placeholder="Read only, like your manager's mind"
        disabled
        className="px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-[6px] bg-[#F9FAFB] text-[#9CA3AF] placeholder-[#D1D5DB] outline-none cursor-not-allowed w-full"
      />
    </div>
  </div>
)

export default async function InputPage() {
  const codeHtml = await highlight(inputCode, 'tsx')
  const installSteps = getInstallSteps(
    'Input',
    "import { Input } from 'scratchui'\n\n<Input placeholder=\"Email address\" type=\"email\" />"
  )

  return (
    <div>
      <PageHeader
        title="Input"
        description="Where users type things. Where dreams are entered. Where passwords are forgotten."
      />
      <ComponentTabs
        preview={<InputPreview />}
        codeHtml={codeHtml}
        code={inputCode}
        installSteps={installSteps}
      />
      <PropsTable rows={propsRows} />
    </div>
  )
}
