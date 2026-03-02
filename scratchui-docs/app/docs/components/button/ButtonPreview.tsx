'use client'

import { motion } from 'motion/react'

const variants = [
  {
    label: 'Save changes',
    className: 'bg-[#0A0A0A] text-white',
  },
  {
    label: 'Cancel',
    className: 'bg-white text-[#0A0A0A] border border-[#E5E7EB]',
  },
  {
    label: 'Learn more',
    className: 'text-[#525252] hover:bg-[#F3F4F6]',
  },
]

export default function ButtonPreview() {
  return (
    /* PLACEHOLDER: Replace with actual scratchUI Button once published */
    <div className="flex flex-wrap items-center gap-3">
      {variants.map((v) => (
        <motion.button
          key={v.label}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className={`px-4 py-2 text-[13px] rounded-[6px] font-medium ${v.className}`}
        >
          {v.label}
        </motion.button>
      ))}
    </div>
  )
}
