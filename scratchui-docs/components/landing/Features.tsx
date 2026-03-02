'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import {
  Layers,
  Smartphone,
  Zap,
  Globe,
  Shield,
  GitBranch,
} from 'lucide-react'

const features = [
  {
    icon: Layers,
    label: 'Two Modes',
    description: 'Static and Motion variants for every component. Ship the simple one now, impress with the animated one later.',
  },
  {
    icon: Smartphone,
    label: 'HIG Inspired',
    description: 'Interactions follow Apple\'s Human Interface Guidelines. Precise, tactile, and respectful of user attention.',
  },
  {
    icon: Zap,
    label: 'Zero Config',
    description: 'One CSS import. Override design tokens if you like. There is nothing else to configure.',
  },
  {
    icon: Globe,
    label: 'Framework Ready',
    description: 'Works in Next.js, Vite, and any React setup. No special adapters, no hidden requirements.',
  },
  {
    icon: Shield,
    label: 'Fully Typed',
    description: 'Complete TypeScript support out of the box. Props, variants, and event handlers are all typed.',
  },
  {
    icon: GitBranch,
    label: 'Open Source',
    description: 'MIT licensed. Use it in personal projects, client work, or commercial products without restriction.',
  },
]

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 px-6 border-t border-[#E5E7EB]">
      <div className="max-w-[1024px] mx-auto">
        <div className="mb-14 max-w-[480px]">
          <h2 className="text-[30px] font-medium tracking-tight text-[#0A0A0A] leading-[1.2] mb-3">
            Everything you need.
            <br />
            Nothing you don&apos;t.
          </h2>
          <p className="text-[15px] text-[#525252] leading-relaxed">
            scratchUI is built on the belief that a great component library should stay out of your way.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, ease: 'easeOut', delay: i * 0.06 }}
              className="p-6 rounded-[8px] border border-[#E5E7EB] bg-white"
            >
              <f.icon size={18} className="text-[#0A0A0A] mb-4" strokeWidth={1.5} />
              <h3 className="text-[18px] font-medium text-[#0A0A0A] mb-1.5">{f.label}</h3>
              <p className="text-[14px] text-[#525252] leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
