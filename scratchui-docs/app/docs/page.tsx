import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Introduction' }

const installSteps = [
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
    code: "import { Button } from 'scratchui'\n\n<Button label=\"Click me\" variant=\"primary\" />",
    lang: 'tsx',
    hint: "That's it. You're done. Go tell your PM it's shipped.",
  },
]

export default function DocsIntro() {
  return (
    <div>
      {/* Page title */}
      <div className="mb-8 pb-8 border-b border-[#E5E7EB]">
        <h1 className="text-[40px] font-semibold tracking-tight text-[#0A0A0A] leading-[1.2] mb-3">
          Introduction
        </h1>
        <p className="text-base text-[#525252] leading-relaxed">
          Welcome to scratchUI — a minimal, zero-dependency React component library with two modes: Static and Motion.
        </p>
      </div>

      {/* What is scratchUI */}
      <section className="mb-10">
        <h2 className="text-[30px] font-medium tracking-tight text-[#0A0A0A] leading-[1.2] mb-4">
          What is scratchUI?
        </h2>
        <p className="text-[15px] text-[#525252] leading-relaxed mb-4">
          scratchUI is a React component library built for developers who care about craft. It ships two variants of every component — a Static version that just works, and a Motion version with tasteful animations powered by Motion One.
        </p>
        <p className="text-[15px] text-[#525252] leading-relaxed">
          There are no peer dependencies to wrestle with, no config files to fill out, and no bloated runtime to ship to your users. Import one CSS file. Use components. Ship product.
        </p>
      </section>

      {/* Highlights */}
      <section className="mb-10">
        <h2 className="text-[30px] font-medium tracking-tight text-[#0A0A0A] leading-[1.2] mb-4">
          What&apos;s included
        </h2>
        <ul className="space-y-2">
          {[
            'Static + Motion variants for every component',
            'Design tokens via CSS custom properties — override anything',
            'Accessibility built in, not bolted on',
            'Zero runtime dependencies',
            'Full TypeScript support',
            'Works with Next.js, Vite, and any React setup',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[15px] text-[#525252]">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#0A0A0A] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Quick start */}
      <section className="mb-10">
        <h2 className="text-[30px] font-medium tracking-tight text-[#0A0A0A] leading-[1.2] mb-6">
          Quick Start
        </h2>
        <div className="space-y-6">
          {installSteps.map((s) => (
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

      {/* Next step */}
      <div className="pt-4 border-t border-[#E5E7EB]">
        <p className="text-[15px] text-[#525252]">
          Ready to actually click something?{' '}
          <Link
            href="/docs/components/button"
            className="text-[#0A0A0A] font-medium underline underline-offset-2 hover:no-underline"
          >
            Start with Button →
          </Link>
        </p>
      </div>
    </div>
  )
}
