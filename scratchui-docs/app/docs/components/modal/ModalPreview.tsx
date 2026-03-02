'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export default function ModalPreview() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center justify-center">
      {/* PLACEHOLDER: Replace with actual scratchUI Modal once published */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="px-4 py-2 bg-[#0A0A0A] text-white text-[13px] rounded-[6px] font-medium"
      >
        Open modal
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Modal panel */}
            <motion.div
              key="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-[8px] border border-[#E5E7EB] shadow-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 id="modal-title" className="text-[22px] font-medium text-[#0A0A0A]">
                  Confirm action
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close modal"
                  className="text-[#9CA3AF] hover:text-[#0A0A0A] transition-colors mt-0.5"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-[15px] text-[#525252] leading-relaxed mb-6">
                Are you sure you want to do this? It demands your full attention and blocks everything else — just like that one teammate in standups.
              </p>
              <div className="flex gap-3 justify-end">
                <motion.button
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-2 text-[13px] text-[#525252] border border-[#E5E7EB] rounded-[6px] hover:bg-[#F9FAFB] transition-colors"
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-2 text-[13px] bg-[#0A0A0A] text-white rounded-[6px]"
                >
                  Confirm
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
