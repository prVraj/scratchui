import { useState, useId } from 'react'
import './Accordion.css'

export type AccordionItem = {
  title: string
  content: React.ReactNode
}

export type AccordionProps = {
  items: AccordionItem[]
  allowMultiple?: boolean
  defaultOpen?: number[]
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
}: AccordionProps) {
  const [open, setOpen] = useState<Set<number>>(new Set(defaultOpen))
  const id = useId()

  const toggle = (idx: number) => {
    setOpen(prev => {
      const next = new Set(prev)
      if (next.has(idx)) {
        next.delete(idx)
      } else {
        if (!allowMultiple) next.clear()
        next.add(idx)
      }
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
          <div key={i} className={`ui-accordion__item${isOpen ? ' ui-accordion__item--open' : ''}`}>
            <button
              id={headerId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="ui-accordion__header"
              onClick={() => toggle(i)}
            >
              <span>{item.title}</span>
              <span className="ui-accordion__chevron" aria-hidden>▾</span>
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className="ui-accordion__panel"
              >
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
