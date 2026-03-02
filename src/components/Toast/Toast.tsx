import { useEffect } from 'react'
import './Toast.css'

export type ToastProps = {
  message: string
  variant?: 'default' | 'success' | 'warning' | 'danger'
  duration?: number
  onClose?: () => void
}

export function Toast({
  message,
  variant = 'default',
  duration = 4000,
  onClose,
}: ToastProps) {
  useEffect(() => {
    if (!duration || !onClose) return
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div
      className={`ui-toast ui-toast--${variant}`}
      role="alert"
      aria-live="polite"
    >
      <span className="ui-toast__message">{message}</span>
      {onClose && (
        <button
          className="ui-toast__close"
          onClick={onClose}
          aria-label="Dismiss notification"
        >
          ✕
        </button>
      )}
    </div>
  )
}
