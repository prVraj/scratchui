/**
 * AccordionMotion — animated variant of Accordion
 * Animations:
 *  - Panel height: animates 0 → auto on open, auto → 0 on close (300ms ease-standard)
 *  - Chevron: rotates 0 → 180deg when open, returns on close (250ms ease-standard)
 * To customize timing: change --ui-duration-base in tokens.css
 * To customize easing: change --ui-ease-standard in tokens.css (mirrored as [0.4,0,0.2,1])
 */
import { useState, useId } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { AccordionProps } from './Accordion'
import './Accordion.css'

export function AccordionMotion({
  items,
  allowMultiple = false,
  defaultOpen = [],
}: AccordionProps) {
  const [open, setOpen] = useState<Set<number>>(new Set(defaultOpen))
  const id = useId()

  const toggle = (idx: number) => {
    setOpen(prev => {
      const next = new Set(prev)
      if (next.has(idx)) { next.delete(idx) }
      else { if (!allowMultiple) next.clear(); next.add(idx) }
      return next
    })
  }
  return (
    <div className="ui-accordion">
      {items.map((item, i) => {
        const isOpen = open.has(i)
        const headerId = `${id}-header-${i}`
        const panelId  = `${id}-panel-${i}`

        return (
          <div key={i} className="ui-accordion__item">
            <button
              id={headerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="ui-accordion__header"
              onClick={() => toggle(i)}
            >
              <span>{item.title}</span>
              <motion.span
                className="ui-accordion__chevron"
                aria-hidden
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                style={{ display: 'inline-block' }}
              >
                ▾
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className="ui-accordion__panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
