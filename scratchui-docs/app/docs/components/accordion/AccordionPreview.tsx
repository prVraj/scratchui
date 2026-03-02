'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const items = [
  {
    id: 'q1',
    question: 'What is scratchUI?',
    answer: 'A minimal React component library. Two modes, zero drama.',
  },
  {
    id: 'q2',
    question: 'Is it production ready?',
    answer: "It's ready when you are.",
  },
  {
    id: 'q3',
    question: 'Do I need to know Tailwind?',
    answer: "Nope. Pure CSS. Your existing styles won't cry.",
  },
]

export default function AccordionPreview() {
  const [open, setOpen] = useState<string | null>('q1')

  return (
    /* PLACEHOLDER: Replace with actual scratchUI Accordion once published */
    <div className="w-full max-w-sm divide-y divide-[#E5E7EB] border border-[#E5E7EB] rounded-[8px] overflow-hidden">
      {items.map((item) => {
        const isOpen = open === item.id
        return (
          <div key={item.id}>
            <button
              onClick={() => setOpen(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-[#F9FAFB] transition-colors"
            >
              <span className="text-[13px] font-medium text-[#0A0A0A]">{item.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className="shrink-0 ml-3 inline-flex"
              >
                <ChevronDown size={16} className="text-[#9CA3AF]" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="px-4 pb-4 text-[13px] text-[#525252] leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
