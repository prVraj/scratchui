/**
 * InputMotion — animated variant of Input
 *
 * Animations:
 *  - Label shift: translates up -2px and mutes color when focused or filled (150ms ease-standard)
 *  - Error shake: horizontal keyframe shake on the input wrapper when `error` prop appears (400ms)
 *
 * To customize label shift timing: change --ui-duration-fast in tokens.css
 * To customize shake: change --ui-duration-slow in tokens.css
 */
import { useId, useState, useEffect, useRef } from 'react'
import { motion, animate } from 'motion/react'
import type { InputProps } from './Input'
import './Input.css'

export function InputMotion({
  label, placeholder, value, onChange,
  variant = 'default', size = 'md', disabled = false,
  hint, error, leftIcon, rightIcon,
}: InputProps) {
  const id = useId()
  const descId = `${id}-desc`
  const hasDesc = !!(hint || error)
  const activeVariant = error ? 'error' : variant
  const [focused, setFocused] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const floated = focused || !!value

  useEffect(() => {
    if (error && wrapRef.current) {
      animate(
        wrapRef.current,
        { x: [0, -6, 6, -4, 4, -2, 2, 0] },
        { duration: 0.4, ease: 'easeInOut' }
      )
    }
  }, [error])

  return (
    <div className={`ui-input-root ui-input-root--${activeVariant} ui-input-root--${size}`}>
      {label && (
        <motion.label
          className="ui-input-label"
          htmlFor={id}
          animate={{
            y: floated ? -1 : 0,
            color: floated ? 'var(--ui-color-muted)' : 'var(--ui-color-text)',
          }}
          transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          {label}
        </motion.label>
      )}
      <div className="ui-input-wrap" ref={wrapRef}>
        {leftIcon && <span className="ui-input-icon ui-input-icon--left" aria-hidden>{leftIcon}</span>}
        <input
          id={id}
          className="ui-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={activeVariant === 'error' || undefined}
          aria-describedby={hasDesc ? descId : undefined}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {rightIcon && <span className="ui-input-icon ui-input-icon--right" aria-hidden>{rightIcon}</span>}
      </div>
      {hasDesc && (
        <span id={descId} className={`ui-input-desc${error ? ' ui-input-desc--error' : ''}`}>
          {error ?? hint}
        </span>
      )}
    </div>
  )
}
