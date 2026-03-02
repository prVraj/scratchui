/**
 * TabsMotion — animated variant of Tabs
 * Animations:
 *  - Indicator: slides between tabs using layoutId — follows active tab smoothly (250ms spring)
 *  - Panel content: fades in/out on tab switch via AnimatePresence (150ms)
 * To customize indicator spring: change --ui-ease-spring in tokens.css (mirrored as [0.34,1.56,0.64,1])
 * To customize content fade: change --ui-duration-fast in tokens.css
 */
import { useState, useRef, useId } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import type { TabsProps } from './Tabs'
import './Tabs.css'

export function TabsMotion({ tabs, defaultValue, onChange }: TabsProps) {
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

  const activeTab = tabs.find(t => t.value === active)
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
            {active === tab.value && (
              <motion.span
                className="ui-tabs__indicator"
                layoutId={`${id}-indicator`}
                transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
              />
            )}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          id={`${id}-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${active}`}
          className="ui-tabs__panel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: [0, 0, 0.2, 1] }}
        >
          {activeTab?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
