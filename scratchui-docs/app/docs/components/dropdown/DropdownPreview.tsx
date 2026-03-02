'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Edit, Copy, Archive, Trash2 } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const items = [
  { icon: Edit,    label: 'Edit',      danger: false },
  { icon: Copy,    label: 'Duplicate', danger: false },
  { icon: Archive, label: 'Archive',   danger: false },
  { icon: Trash2,  label: 'Delete',    danger: true  },
]

export default function DropdownPreview() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="relative inline-block" ref={ref}>
      <motion.button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="menu"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E7EB] bg-white text-[13px] text-[#0A0A0A] rounded-[6px] font-medium"
      >
        Options
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="inline-flex"
        >
          <ChevronDown size={14} />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, scale: 0.95, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -6 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top left' }}
            className="absolute top-full mt-1.5 left-0 w-44 bg-white border border-[#E5E7EB] rounded-[8px] shadow-md py-1 z-20"
          >
            {items.map((item, i) => (
              <motion.button
                key={item.label}
                role="menuitem"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.15 }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 text-[13px] hover:bg-[#F9FAFB] transition-colors text-left ${
                  item.danger ? 'text-red-600' : 'text-[#0A0A0A]'
                }`}
              >
                <item.icon size={14} />
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
