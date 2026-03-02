import { useState, useRef, useId } from 'react'
import './Tooltip.css'

export type TooltipProps = {
  content: string
  children: React.ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
}

export function Tooltip({
  content,
  children,
  position = 'top',
  delay = 200,
}: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const id = useId()
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => {
    timer.current = setTimeout(() => setVisible(true), delay)
  }

  const hide = () => {
    if (timer.current) clearTimeout(timer.current)
    setVisible(false)
  }

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
      {visible && (
        <span className={`ui-tooltip-anchor ui-tooltip-anchor--${position}`}>
          <span id={id} role="tooltip" className="ui-tooltip">
            {content}
          </span>
        </span>
      )}
    </span>
  )
}
