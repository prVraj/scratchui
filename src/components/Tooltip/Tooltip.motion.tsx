/**
 * TooltipMotion — animated variant of Tooltip
 *
 * Animations:
 *  - Show: fades in + scales from 0.95 → 1 (150ms ease-out)
 *  - Hide: fades out + scales back to 0.95 (100ms ease-in)
 *  - The anchor wrapper handles directional offset so scale has no conflict
 *
 * To customize show timing: change --ui-duration-fast in tokens.css
 * To customize hide timing: change --ui-duration-instant in tokens.css
 */
import { useState, useRef, useId } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { TooltipProps } from './Tooltip'
import './Tooltip.css'

export function TooltipMotion({
  content,
  children,
  position = 'top',
  delay = 200,
}: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const id = useId()
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => { timer.current = setTimeout(() => setVisible(true), delay) }
  const hide = () => { if (timer.current) clearTimeout(timer.current); setVisible(false) }

  return (
    <span className="ui-tooltip-root">
      <span
        aria-describedby={visible ? id : undefined}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
      >
        {children}
      </span>
      <AnimatePresence>
        {visible && (
          <span className={`ui-tooltip-anchor ui-tooltip-anchor--${position}`}>
            <motion.span
              id={id}
              role="tooltip"
              className="ui-tooltip"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                enter: { duration: 0.15, ease: [0, 0, 0.2, 1] },
                exit:  { duration: 0.1,  ease: [0.4, 0, 1, 1] },
              }}
            >
              {content}
            </motion.span>
          </span>
        )}
      </AnimatePresence>
    </span>
  )
}
