import { useId } from 'react'
import './Input.css'

export type InputProps = {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  variant?: 'default' | 'error' | 'success'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  hint?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export function Input({
  label,
  placeholder,
  value,
  onChange,
  variant = 'default',
  size = 'md',
  disabled = false,
  hint,
  error,
  leftIcon,
  rightIcon,
}: InputProps) {
  const id = useId()
  const descId = `${id}-desc`
  const hasDesc = !!(hint || error)
  const activeVariant = error ? 'error' : variant

  return (
    <div className={`ui-input-root ui-input-root--${activeVariant} ui-input-root--${size}`}>
      {label && (
        <label className="ui-input-label" htmlFor={id}>{label}</label>
      )}
      <div className="ui-input-wrap">
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
