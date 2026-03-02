import type { Metadata } from 'next'
import PageHeader from '@/components/docs/PageHeader'
import ComponentTabs from '@/components/docs/ComponentTabs'
import PropsTable from '@/components/docs/PropsTable'
import { highlight } from '@/lib/highlight'
import { getInstallSteps } from '@/lib/installSteps'

export const metadata: Metadata = { title: 'Badge' }

const badgeCode = `import { Badge } from 'scratchui'

export default function Example() {
  return (
    <div className="flex items-center gap-2">
      <Badge label="New" variant="default" />
      <Badge label="12" variant="count" />
      <Badge label="Beta" variant="outline" />
      <Badge label="Deprecated" variant="danger" />
    </div>
  )
}`

const propsRows = [
  { prop: 'label', type: 'string', defaultVal: '—', description: 'Text content of the badge.' },
  { prop: 'variant', type: "'default' | 'outline' | 'count' | 'danger'", defaultVal: "'default'", description: 'Visual style of the badge.' },
  { prop: 'size', type: "'sm' | 'md'", defaultVal: "'md'", description: 'Controls text size and padding.' },
]

const BadgePreview = () => (
  <div className="flex flex-wrap items-center gap-3">
    {/* PLACEHOLDER: Replace with actual scratchUI Badge once published */}
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] bg-[#F3F4F6] text-[#0A0A0A] text-[11px] font-medium border border-[#E5E7EB]">
      New
    </span>
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#0A0A0A] text-white text-[11px] font-semibold">
      12
    </span>
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] text-[#0A0A0A] text-[11px] font-medium border border-[#0A0A0A]">
      Beta
    </span>
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] bg-red-50 text-red-700 text-[11px] font-medium border border-red-200">
      Deprecated
    </span>
  </div>
)

export default async function BadgePage() {
  const codeHtml = await highlight(badgeCode, 'tsx')
  const installSteps = getInstallSteps(
    'Badge',
    "import { Badge } from 'scratchui'\n\n<Badge label=\"New\" variant=\"default\" />"
  )

  return (
    <div>
      <PageHeader
        title="Badge"
        description="Small but mighty. Slap a number on it and suddenly everything feels important."
      />
      <ComponentTabs
        preview={<BadgePreview />}
        codeHtml={codeHtml}
        code={badgeCode}
        installSteps={installSteps}
      />
      <PropsTable rows={propsRows} />
    </div>
  )
}
