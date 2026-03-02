import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Theming' }

const tokens = [
  { token: '--ui-color-accent', defaultVal: '#0A0A0A', description: 'Primary action color used for buttons and active states.' },
  { token: '--ui-color-background', defaultVal: '#FAFAFA', description: 'App background color.' },
  { token: '--ui-color-surface', defaultVal: '#FFFFFF', description: 'Card and panel background.' },
  { token: '--ui-color-border', defaultVal: '#E5E7EB', description: 'Default border color.' },
  { token: '--ui-color-text-primary', defaultVal: '#0A0A0A', description: 'Primary text color.' },
  { token: '--ui-color-text-secondary', defaultVal: '#525252', description: 'Secondary / muted text.' },
  { token: '--ui-radius-btn', defaultVal: '6px', description: 'Border radius for buttons and badges.' },
  { token: '--ui-radius-card', defaultVal: '8px', description: 'Border radius for cards and panels.' },
]

const exampleCode = `:root {
  /* Override any token you like */
  --ui-color-accent: #6366F1;   /* indigo */
  --ui-radius-btn: 999px;       /* pill buttons */
  --ui-radius-card: 12px;       /* rounder cards */
}`

export default function ThemingPage() {
  return (
    <div>
      <div className="mb-8 pb-8 border-b border-[#E5E7EB]">
        <h1 className="text-[40px] font-semibold tracking-tight text-[#0A0A0A] leading-[1.2] mb-3">
          Theming
        </h1>
        <p className="text-base text-[#525252] leading-relaxed">
          scratchUI uses CSS custom properties for every design decision. Override what you want. Leave the rest alone.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-[30px] font-medium tracking-tight text-[#0A0A0A] leading-[1.2] mb-3">
          How it works
        </h2>
        <p className="text-[15px] text-[#525252] leading-relaxed mb-4">
          When you import <code className="font-mono text-[13px] bg-[#F3F4F6] px-1.5 py-0.5 rounded">scratchui/tokens</code>, a set of CSS custom properties are registered on <code className="font-mono text-[13px] bg-[#F3F4F6] px-1.5 py-0.5 rounded">:root</code>. Override them anywhere in your stylesheet.
        </p>
        <div className="rounded-[8px] border border-[#E5E7EB] bg-[#F9FAFB] overflow-x-auto">
          <pre className="p-5 text-[13px] font-mono text-[#0A0A0A] leading-[1.7]">
            <code>{exampleCode}</code>
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-[30px] font-medium tracking-tight text-[#0A0A0A] leading-[1.2] mb-4">
          Available tokens
        </h2>
        <div className="rounded-[8px] border border-[#E5E7EB] overflow-hidden overflow-x-auto">
          <table className="w-full min-w-[540px] text-[13px] border-collapse">
            <thead>
              <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
                {['Token', 'Default', 'Description'].map((col) => (
                  <th
                    key={col}
                    className="text-left px-4 py-3 text-[11px] font-semibold uppercase tracking-widest text-[#9CA3AF]"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tokens.map((row, i) => (
                <tr
                  key={row.token}
                  className={`border-b border-[#E5E7EB] last:border-b-0 ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}
                >
                  <td className="px-4 py-3">
                    <code className="font-mono text-[#0A0A0A] text-[12px]">{row.token}</code>
                  </td>
                  <td className="px-4 py-3">
                    <code className="font-mono text-[#525252] text-[12px]">{row.defaultVal}</code>
                  </td>
                  <td className="px-4 py-3 text-[#525252]">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
