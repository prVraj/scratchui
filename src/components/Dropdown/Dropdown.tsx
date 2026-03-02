import { useState, useRef, useId, useEffect } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useKeyboardNavigation } from '../../hooks/useKeyboardNavigation'
import './Dropdown.css'

export type DropdownItem = {
  label: string
  value: string
  icon?: React.ReactNode
  disabled?: boolean
}

export type DropdownProps = {
  trigger: React.ReactNode
  items: DropdownItem[]
  onSelect: (value: string) => void
  position?: 'bottom-left' | 'bottom-right'
}

export function Dropdown({ trigger, items, onSelect, position = 'bottom-left' }: DropdownProps) {
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
      {open && (
        <ul
          ref={menuRef}
          id={menuId}
          role="menu"
          className={`ui-dropdown__menu ui-dropdown__menu--${position}`}
          onKeyDown={(e) => { if (e.key === 'Escape') { setOpen(false); return } handleKeyDown(e) }}
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
        </ul>
      )}
    </div>
  )
}
