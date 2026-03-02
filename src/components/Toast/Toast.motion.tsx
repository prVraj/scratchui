/**
 * ToastMotion — animated variant of Toast
 *
 * Animations:
 *  - Enter: slides in from bottom-right (x: 24, y: 8 → 0) with spring (350ms)
 *  - Exit:  fades out with slight scale down (scale 1 → 0.95) (250ms ease-in)
 *  - Manages its own visible state — calls onClose after exit animation completes
 *
 * To customize enter spring: change --ui-ease-spring in tokens.css
 * To customize exit timing: change --ui-duration-base in tokens.css
 */
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { ToastProps } from './Toast'
import './Toast.css'

export function ToastMotion({
  message,
  variant = 'default',
  duration = 4000,
  onClose,
}: ToastProps) {
  const [visible, setVisible] = useState(true)

  const dismiss = () => setVisible(false)

  useEffect(() => {
    if (!duration) return
    const timer = setTimeout(dismiss, duration)
    return () => clearTimeout(timer)
  }, [duration])

  return (
    <AnimatePresence onExitComplete={onClose}>
      {visible && (
        <motion.div
          className={`ui-toast ui-toast--${variant}`}
          role="alert"
          aria-live="polite"
          initial={{ opacity: 0, x: 24, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 4 }}
          transition={{
            default: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] },
            exit:    { duration: 0.25, ease: [0.4, 0, 1, 1] },
          }}
        >
          <span className="ui-toast__message">{message}</span>
          {onClose && (
            <button
              className="ui-toast__close"
              onClick={dismiss}
              aria-label="Dismiss notification"
            >
              ✕
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
