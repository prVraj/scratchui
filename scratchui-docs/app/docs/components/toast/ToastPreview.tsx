'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface Toast {
  id: number
  variant: 'success' | 'error' | 'warning' | 'info'
  message: string
}

const DURATION = 4000
const MAX_VISIBLE = 4

const variantStyles = {
  success: { fill: 'bg-green-100', text: 'text-green-700', x: 'text-green-500 hover:text-green-700' },
  error:   { fill: 'bg-red-100',   text: 'text-red-700',   x: 'text-red-400 hover:text-red-600'   },
  warning: { fill: 'bg-orange-100',text: 'text-orange-700',x: 'text-orange-400 hover:text-orange-600' },
  info:    { fill: 'bg-blue-100',  text: 'text-blue-700',  x: 'text-blue-400 hover:text-blue-600'  },
}

// Isolated component so the draining fill animation is tied to mount lifecycle
function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: () => void }) {
  const v = variantStyles[toast.variant]
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 60, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 60, scale: 0.96 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[12px] bg-white border border-[#E5E7EB] shadow-sm"
    >
      {/* Draining fill — starts full width, shrinks to 0 from right → disappears = toast gone */}
      <motion.div
        className={`absolute inset-0 ${v.fill}`}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        style={{ transformOrigin: 'left center' }}
        transition={{ duration: DURATION / 1000, ease: 'linear' }}
      />

      {/* Content sits on top of the fill */}
      <div className="relative z-10 flex items-center justify-between px-4 py-3.5 gap-3 min-h-[52px]">
        <span className={`text-[13px] font-semibold leading-snug ${v.text}`}>
          {toast.message}
        </span>
        <button
          onClick={onDismiss}
          aria-label="Dismiss"
          className={`shrink-0 text-lg leading-none transition-colors ${v.x}`}
        >
          ×
        </button>
      </div>
    </motion.div>
  )
}

let toastId = 0

const BUTTONS = [
  { label: 'Success', variant: 'success' as const, msg: 'Build succeeded. Celebrate accordingly.' },
  { label: 'Error',   variant: 'error'   as const, msg: 'Linting your vibes...'                  },
  { label: 'Warning', variant: 'warning' as const, msg: 'Merging conflicts with reality.'          },
  { label: 'Info',    variant: 'info'    as const, msg: 'Running rm -rf node_modules (again).'    },
]

export default function ToastPreview() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (variant: Toast['variant'], message: string) => {
    const id = ++toastId
    setToasts((prev) => [...prev, { id, variant, message }])
    setTimeout(() => dismiss(id), DURATION)
  }

  const dismiss = (id: number) =>
    setToasts((prev) => prev.filter((t) => t.id !== id))

  // Show only the most recent MAX_VISIBLE, stack-peek the rest
  const visibleToasts = toasts.slice(-MAX_VISIBLE)
  const hiddenCount = Math.max(0, toasts.length - MAX_VISIBLE)

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* Trigger buttons */}
      <div className="flex flex-wrap gap-2 justify-center">
        {BUTTONS.map((b) => (
          <motion.button
            key={b.label}
            onClick={() => addToast(b.variant, b.msg)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="px-3 py-1.5 text-[13px] rounded-[6px] font-medium border border-[#E5E7EB] bg-white text-[#525252] hover:bg-[#F9FAFB] transition-colors"
          >
            {b.label}
          </motion.button>
        ))}
      </div>

      {/* Toast stack — fixed bottom-right */}
      <div className="fixed bottom-6 right-6 z-50 w-[360px]">
        <div className="relative flex flex-col gap-2">

          {/* Ghost peek cards behind the stack (appear when > MAX_VISIBLE) */}
          <AnimatePresence>
            {hiddenCount > 1 && (
              <motion.div
                key="ghost-2"
                initial={{ opacity: 0, scaleX: 0.88 }}
                animate={{ opacity: 0.45, scaleX: 0.88 }}
                exit={{ opacity: 0, scaleX: 0.88 }}
                aria-hidden="true"
                className="absolute -top-5 inset-x-0 h-14 rounded-[12px] bg-[#F3F4F6] border border-[#E5E7EB]"
                style={{ zIndex: -2 }}
              />
            )}
            {hiddenCount > 0 && (
              <motion.div
                key="ghost-1"
                initial={{ opacity: 0, scaleX: 0.94 }}
                animate={{ opacity: 0.65, scaleX: 0.94 }}
                exit={{ opacity: 0, scaleX: 0.94 }}
                aria-hidden="true"
                className="absolute -top-2.5 inset-x-0 h-14 rounded-[12px] bg-[#EBEBEB] border border-[#E5E7EB]"
                style={{ zIndex: -1 }}
              />
            )}
          </AnimatePresence>

          {/* Actual toasts */}
          <AnimatePresence mode="popLayout">
            {visibleToasts.map((t) => (
              <ToastItem key={t.id} toast={t} onDismiss={() => dismiss(t.id)} />
            ))}
          </AnimatePresence>

        </div>
      </div>
    </div>
  )
}
