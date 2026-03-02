/**
 * CardMotion — animated variant of Card
 *
 * Animations:
 *  - Hover lift: translates up 2px when interactive (onClick is provided), 250ms ease-standard
 *    CSS handles the matching box-shadow deepening transition
 *
 * To customize lift distance: change the `y` value in whileHover below
 * To customize timing: change --ui-duration-base in tokens.css
 */
import { motion } from 'motion/react'
import type { CardProps } from './Card'
import './Card.css'

export function CardMotion({
  children,
  variant = 'default',
  padding = 'md',
  onClick,
}: CardProps) {
  const interactive = !!onClick

  return (
    <motion.div
      className={`ui-card ui-card--${variant} ui-card--pad-${padding}${interactive ? ' ui-card--interactive' : ''}`}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={onClick}
      onKeyDown={interactive
        ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() }
        : undefined}
      whileHover={interactive ? { y: -2 } : undefined}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
