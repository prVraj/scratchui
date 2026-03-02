import './Badge.css'

export type BadgeProps = {
  label: string
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'outline'
  size?: 'sm' | 'md'
  dot?: boolean
  'aria-label'?: string
}

export function Badge({
  label,
  variant = 'default',
  size = 'md',
  dot = false,
  'aria-label': ariaLabel,
}: BadgeProps) {
  return (
    <span
      className={`ui-badge ui-badge--${variant} ui-badge--${size}`}
      aria-label={ariaLabel}
    >
      {dot && <span className="ui-badge__dot" aria-hidden />}
      {label}
    </span>
  )
}
