'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const tabs = [
  { id: 'overview',  label: 'Overview',  content: 'High-level summary of the thing. You know, the gist.'         },
  { id: 'details',   label: 'Details',   content: 'The nitty-gritty. Scroll carefully — details are lurking.'     },
  { id: 'settings',  label: 'Settings',  content: 'Toggle things. Break things. Toggle them back.'                },
]

export default function TabsPreview() {
  const [active, setActive] = useState('overview')
  const [direction, setDirection] = useState(1)
  const currentIndex = tabs.findIndex((t) => t.id === active)
  const current = tabs[currentIndex]

  const handleSelect = (id: string) => {
    const nextIndex = tabs.findIndex((t) => t.id === id)
    setDirection(nextIndex > currentIndex ? 1 : -1)
    setActive(id)
  }

  return (
    /* PLACEHOLDER: Replace with actual scratchUI Tabs once published */
    <div className="w-full max-w-sm">
      {/* Tab list with sliding indicator */}
      <div className="relative flex border-b border-[#E5E7EB]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleSelect(tab.id)}
            className="relative px-4 py-2.5 text-[13px] font-medium transition-colors"
            style={{ color: active === tab.id ? '#0A0A0A' : '#9CA3AF' }}
          >
            {tab.label}
            {/* Sliding underline via layoutId */}
            {active === tab.id && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A0A0A]"
                style={{ borderRadius: 2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Animated tab content */}
      <div className="relative overflow-hidden pt-4 min-h-[40px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.p
            key={active}
            custom={direction}
            initial={{ opacity: 0, x: direction * 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="text-[13px] text-[#525252] leading-relaxed"
          >
            {current?.content}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  )
}
