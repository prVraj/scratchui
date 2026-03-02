'use client'

import { motion } from 'motion/react'

export default function CardPreview() {
  return (
    /* PLACEHOLDER: Replace with actual scratchUI Card once published */
    <motion.div
      whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="w-full max-w-sm rounded-[8px] border border-[#E5E7EB] bg-white shadow-sm overflow-hidden cursor-pointer"
    >
      <div className="px-5 pt-5 pb-4 border-b border-[#E5E7EB]">
        <h3 className="text-[15px] font-medium text-[#0A0A0A] mb-1">You actually read this</h3>
        <p className="text-[13px] text-[#9CA3AF]">Most developers skip card demos. You&apos;re different. Respect.</p>
      </div>
      <div className="px-5 py-4 text-[13px] text-[#525252]">
        Cards are just boxes, but intentional ones. Hover me to feel the lift.
      </div>
      <div className="px-5 pb-5 pt-3 border-t border-[#E5E7EB]">
        <motion.button
          whileHover={{ x: 3 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="text-[13px] font-medium text-[#0A0A0A] inline-flex items-center gap-1"
        >
          Learn more →
        </motion.button>
      </div>
    </motion.div>
  )
}
