/**
 * BadgeMotion — animated variant of Badge
 *
 * Animations:
 *  - Mount: scales from 0.8 → 1 with spring easing, fades in simultaneously (250ms)
 *
 * To customize timing: change --ui-duration-base in tokens.css
 * To customize spring feel: change --ui-ease-spring in tokens.css
 *   (spring cubic-bezier is mirrored below as [0.34, 1.56, 0.64, 1])
 */
import { motion } from 'motion/react'
import type { BadgeProps } from './Badge'
import './Badge.css'

export function BadgeMotion({
  label,
  variant = 'default',
  size = 'md',
  dot = false,
  'aria-label': ariaLabel,
}: BadgeProps) {
  return (
    <motion.span
      className={`ui-badge ui-badge--${variant} ui-badge--${size}`}
      aria-label={ariaLabel}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {dot && <span className="ui-badge__dot" aria-hidden />}
      {label}
    </motion.span>
  )
}
