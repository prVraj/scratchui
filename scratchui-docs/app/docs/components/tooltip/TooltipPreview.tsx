'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface TooltipProps {
  content: string
  children: React.ReactNode
}

function Tooltip({ content, children }: TooltipProps) {
  const [visible, setVisible] = useState(false)

  return (
    <div
      className="relative inline-flex flex-col items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {/* Tooltip bubble */}
      <AnimatePresence>
        {visible && (
          <motion.div
            role="tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute bottom-full mb-2.5 z-20 pointer-events-none"
          >
            <div className="relative px-3 py-1.5 bg-[#0A0A0A] text-white text-[11px] rounded-[6px] whitespace-nowrap shadow-md">
              {content}
              {/* Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#0A0A0A]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger element */}
      {children}
    </div>
  )
}

export default function TooltipPreview() {
  return (
    /* PLACEHOLDER: Replace with actual scratchUI Tooltip once published */
    <div className="flex items-end gap-6 pb-4">
      <Tooltip content="You found the tooltip. Achievement unlocked.">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-4 py-2 border border-[#E5E7EB] text-[13px] text-[#525252] rounded-[6px] hover:bg-[#F9FAFB] transition-colors"
        >
          Hover me
        </motion.button>
      </Tooltip>

      <Tooltip content="Cannot be undone. We checked.">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-4 py-2 border border-red-200 text-red-700 text-[13px] rounded-[6px] hover:bg-red-50 transition-colors"
        >
          Delete
        </motion.button>
      </Tooltip>
    </div>
  )
}
