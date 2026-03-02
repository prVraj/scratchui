import { useState, useRef, useId } from 'react'
import './Tabs.css'

export type Tab = {
  label: string
  value: string
  content: React.ReactNode
}

export type TabsProps = {
  tabs: Tab[]
  defaultValue?: string
  onChange?: (value: string) => void
}

export function Tabs({ tabs, defaultValue, onChange }: TabsProps) {
  const [active, setActive] = useState(defaultValue ?? tabs[0]?.value)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const id = useId()

  const select = (value: string) => { setActive(value); onChange?.(value) }

  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    const n = tabs.length
    const moves: Record<string, number> = {
      ArrowRight: (idx + 1) % n,
      ArrowLeft:  (idx - 1 + n) % n,
      Home:       0,
      End:        n - 1,
    }
    const next = moves[e.key]
    if (next === undefined) return
    e.preventDefault()
    select(tabs[next].value)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="ui-tabs">
      <div role="tablist" className="ui-tabs__list">
        {tabs.map((tab, i) => (
          <button
            key={tab.value}
            ref={el => { tabRefs.current[i] = el }}
            role="tab"
            id={`${id}-tab-${tab.value}`}
            aria-selected={active === tab.value}
            aria-controls={`${id}-panel-${tab.value}`}
            tabIndex={active === tab.value ? 0 : -1}
            className={`ui-tabs__tab${active === tab.value ? ' ui-tabs__tab--active' : ''}`}
            onClick={() => select(tab.value)}
            onKeyDown={e => handleKeyDown(e, i)}
          >
            {tab.label}
            {active === tab.value && <span className="ui-tabs__indicator" />}
          </button>
        ))}
      </div>
      {tabs.map(tab => (
        <div
          key={tab.value}
          id={`${id}-panel-${tab.value}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${tab.value}`}
          className="ui-tabs__panel"
          hidden={active !== tab.value}
        >
          {tab.content}
        </div>
      ))}
    </div>
  )
}
