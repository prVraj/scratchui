import './Card.css'

export type CardProps = {
  children: React.ReactNode
  variant?: 'default' | 'bordered' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  onClick?: () => void
}

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  onClick,
}: CardProps) {
  const interactive = !!onClick

  return (
    <div
      className={`ui-card ui-card--${variant} ui-card--pad-${padding}${interactive ? ' ui-card--interactive' : ''}`}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onClick={onClick}
      onKeyDown={interactive
        ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() }
        : undefined}
    >
      {children}
    </div>
  )
}
