'use client'

import { useState } from 'react'
import ComponentPreview from './ComponentPreview'
import CodeBlock from './CodeBlock'

type Tab = 'preview' | 'code' | 'installation'

interface InstallStep {
  step: number
  title: string
  code: string
  lang: string
  hint: string
}

interface ComponentTabsProps {
  preview: React.ReactNode
  codeHtml: string
  code: string
  installSteps: InstallStep[]
}

const TABS: { id: Tab; label: string }[] = [
  { id: 'preview', label: 'Preview' },
  { id: 'code', label: 'Code' },
  { id: 'installation', label: 'Installation' },
]

export default function ComponentTabs({
  preview,
  codeHtml,
  code,
  installSteps,
}: ComponentTabsProps) {
  const [active, setActive] = useState<Tab>('preview')

  return (
    <div className="mb-10">
      {/* Tab bar */}
      <div className="flex gap-1 border-b border-[#E5E7EB] mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-2.5 text-[13px] font-medium border-b-2 -mb-px transition-colors ${
              active === tab.id
                ? 'border-[#0A0A0A] text-[#0A0A0A]'
                : 'border-transparent text-[#9CA3AF] hover:text-[#525252]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Preview */}
      {active === 'preview' && (
        <ComponentPreview>{preview}</ComponentPreview>
      )}

      {/* Code */}
      {active === 'code' && (
        <CodeBlock html={codeHtml} code={code} />
      )}

      {/* Installation */}
      {active === 'installation' && (
        <div className="space-y-6">
          {installSteps.map((s) => (
            <div key={s.step} className="flex gap-4">
              {/* Step number badge */}
              <div className="shrink-0 w-6 h-6 rounded-full bg-[#0A0A0A] flex items-center justify-center mt-0.5">
                <span className="text-[11px] font-semibold text-white">{s.step}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[18px] font-medium text-[#0A0A0A] mb-3 leading-[1.4]">
                  {s.title}
                </h3>
                <div className="rounded-[8px] border border-[#E5E7EB] bg-[#F9FAFB] overflow-x-auto">
                  <pre className="p-4 text-[13px] font-mono text-[#0A0A0A] leading-[1.7]">
                    <code>{s.code}</code>
                  </pre>
                </div>
                {s.hint && (
                  <p className="mt-2 text-[13px] italic text-[#9CA3AF]">{s.hint}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
