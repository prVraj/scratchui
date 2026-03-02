/**
 * ButtonMotion — animated variant of Button
 *
 * Animations:
 *  - Mount:  fades in opacity 0 → 1 over 150ms (ease-out)
 *  - Press:  scales down to 0.97 on tap/click, springs back on release
 *
 * To customize timing: change --ui-duration-fast in tokens.css
 * To customize spring return: change --ui-ease-spring in tokens.css
 * To disable press scale: remove the `whileTap` prop
 */
import { motion } from 'motion/react'
import type { ButtonProps } from './Button'
import './Button.css'

export function ButtonMotion({
  label,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  onClick,
}: ButtonProps) {
  const isInert = disabled || loading

  return (
    <motion.button
      className={`ui-btn ui-btn--${variant} ui-btn--${size}`}
      disabled={isInert}
      aria-busy={loading || undefined}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15, ease: [0, 0, 0.2, 1] }}
      whileTap={isInert ? undefined : { scale: 0.97, transition: { duration: 0.1, ease: [0, 0, 0.2, 1] } }}
    >
      {leftIcon && <span className="ui-btn__icon" aria-hidden>{leftIcon}</span>}
      {loading && <span className="ui-btn__spinner" aria-hidden />}
      <span>{label}</span>
      {rightIcon && <span className="ui-btn__icon" aria-hidden>{rightIcon}</span>}
    </motion.button>
  )
}
