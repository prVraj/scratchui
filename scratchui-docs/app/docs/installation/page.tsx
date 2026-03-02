import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Installation' }

const steps = [
  {
    step: 1,
    title: 'Install the package',
    code: 'npm install scratchui',
    lang: 'bash',
    hint: 'One package. No peer dependency essay required.',
  },
  {
    step: 2,
    title: 'Import the tokens',
    code: "// In your app root (layout.tsx or main.tsx)\nimport 'scratchui/tokens'",
    lang: 'tsx',
    hint: 'CSS custom properties wired up. Design system: unlocked.',
  },
  {
    step: 3,
    title: 'Use a component',
    code: "import { Button } from 'scratchui'\n\nexport default function App() {\n  return <Button label=\"Click me\" variant=\"primary\" />\n}",
    lang: 'tsx',
    hint: "That's it. You're done. Go tell your PM it's shipped.",
  },
]

const frameworks = [
  { name: 'Next.js', note: 'Works with App Router and Pages Router. Import tokens in layout.tsx.' },
  { name: 'Vite + React', note: 'Import tokens in main.tsx. No config needed.' },
  { name: 'Remix', note: 'Import tokens in root.tsx. Works out of the box.' },
]

export default function InstallationPage() {
  return (
    <div>
      <div className="mb-8 pb-8 border-b border-[#E5E7EB]">
        <h1 className="text-[40px] font-semibold tracking-tight text-[#0A0A0A] leading-[1.2] mb-3">
          Installation
        </h1>
        <p className="text-base text-[#525252] leading-relaxed">
          Get scratchUI running in your project in under two minutes. Probably faster if you already have your terminal open.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-[30px] font-medium tracking-tight text-[#0A0A0A] leading-[1.2] mb-6">
          Quick install
        </h2>
        <div className="space-y-6">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-4">
              <div className="shrink-0 w-6 h-6 rounded-full bg-[#0A0A0A] flex items-center justify-center mt-0.5">
                <span className="text-[11px] font-semibold text-white">{s.step}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[18px] font-medium text-[#0A0A0A] mb-3">{s.title}</h3>
                <div className="rounded-[8px] border border-[#E5E7EB] bg-[#F9FAFB] overflow-x-auto">
                  <pre className="p-4 text-[13px] font-mono text-[#0A0A0A] leading-[1.7]">
                    <code>{s.code}</code>
                  </pre>
                </div>
                <p className="mt-2 text-[13px] italic text-[#9CA3AF]">{s.hint}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-[30px] font-medium tracking-tight text-[#0A0A0A] leading-[1.2] mb-4">
          Framework support
        </h2>
        <div className="rounded-[8px] border border-[#E5E7EB] overflow-hidden">
          {frameworks.map((fw, i) => (
            <div
              key={fw.name}
              className={`flex items-start gap-4 px-4 py-3.5 ${
                i < frameworks.length - 1 ? 'border-b border-[#E5E7EB]' : ''
              } ${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}`}
            >
              <span className="text-[13px] font-medium text-[#0A0A0A] w-32 shrink-0">{fw.name}</span>
              <span className="text-[13px] text-[#525252]">{fw.note}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
