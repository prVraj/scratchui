import './Button.css'

export type ButtonProps = {
  label: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick?: () => void
}

export function Button({
  label,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`ui-btn ui-btn--${variant} ui-btn--${size}`}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      onClick={onClick}
    >
      {leftIcon && <span className="ui-btn__icon" aria-hidden>{leftIcon}</span>}
      {loading && <span className="ui-btn__spinner" aria-hidden />}
      <span>{label}</span>
      {rightIcon && <span className="ui-btn__icon" aria-hidden>{rightIcon}</span>}
    </button>
  )
}
