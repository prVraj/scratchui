/**
 * DropdownMotion — animated variant of Dropdown
 *
 * Animations:
 *  - Open:  menu fades in and slides from y: -8px → 0 (200ms ease-out)
 *  - Close: reverses — fades out and slides back to y: -8px (150ms ease-in)
 *
 * To customize open timing: change --ui-duration-base in tokens.css
 * To customize close timing: change --ui-duration-fast in tokens.css
 */
import { useState, useRef, useId, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation'
import type { DropdownProps } from './Dropdown'
import './Dropdown.css'

export function DropdownMotion({ trigger, items, onSelect, position = 'bottom-left' }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)
  const menuId = useId()

  useClickOutside(ref, () => setOpen(false))

  const { focusedIndex, setFocusedIndex, handleKeyDown } = useKeyboardNavigation(
    items.map(i => i.value),
    (val) => {
      const item = items.find(i => i.value === val)
      if (item && !item.disabled) { onSelect(val); setOpen(false) }
    }
  )

  useEffect(() => {
    if (open && menuRef.current) {
      const first = menuRef.current.querySelector<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"])')
      first?.focus()
    }
  }, [open])

  return (
    <div className="ui-dropdown" ref={ref}>
      <div onClick={() => setOpen(o => !o)}>{trigger}</div>
      <AnimatePresence>
        {open && (
          <motion.ul
            ref={menuRef}
            id={menuId}
            role="menu"
            className={`ui-dropdown__menu ui-dropdown__menu--${position}`}
            onKeyDown={(e) => { if (e.key === 'Escape') { setOpen(false); return } handleKeyDown(e) }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              default: { duration: 0.2, ease: [0, 0, 0.2, 1] },
              exit:    { duration: 0.15, ease: [0.4, 0, 1, 1] },
            }}
          >
            {items.map((item, i) => (
              <li
                key={item.value}
                role="menuitem"
                tabIndex={item.disabled ? -1 : 0}
                aria-disabled={item.disabled}
                className={`ui-dropdown__item${item.disabled ? ' ui-dropdown__item--disabled' : ''}${i === focusedIndex ? ' ui-dropdown__item--focused' : ''}`}
                onClick={() => { if (!item.disabled) { onSelect(item.value); setOpen(false) } }}
                onMouseEnter={() => { if (!item.disabled) setFocusedIndex(i) }}
              >
                {item.icon && <span className="ui-dropdown__icon" aria-hidden>{item.icon}</span>}
                {item.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
