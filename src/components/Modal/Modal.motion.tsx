/**
 * ModalMotion — animated variant of Modal
 *
 * Animations:
 *  - Backdrop: fades in opacity 0 → 1 on open (350ms ease-out), reverses on close (250ms ease-in)
 *  - Panel: scales from 0.95 → 1 with spring easing on open, reverses on close
 *
 * To customize panel spring: change --ui-ease-spring in tokens.css (mirrored as [0.34,1.56,0.64,1])
 * To customize backdrop timing: change --ui-duration-slow in tokens.css
 */
import { useEffect, useRef, useId } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'motion/react'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import type { ModalProps } from './Modal'
import './Modal.css'

export function ModalMotion({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeOnOverlayClick = true,
}: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const titleId = useId()

  useFocusTrap(panelRef, isOpen)

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="ui-modal-overlay"
          onClick={closeOnOverlayClick ? onClose : undefined}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.35, ease: [0, 0, 0.2, 1] } }}
          exit={{ opacity: 0, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal
            aria-labelledby={titleId}
            className={`ui-modal ui-modal--${size}`}
            onClick={e => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] } }}
            exit={{ scale: 0.95, opacity: 0, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } }}
          >
            <div className="ui-modal__header">
              <h2 id={titleId} className="ui-modal__title">{title}</h2>
              <button className="ui-modal__close" onClick={onClose} aria-label="Close dialog">✕</button>
            </div>
            <div className="ui-modal__body">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
