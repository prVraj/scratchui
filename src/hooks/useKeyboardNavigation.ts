// Usage: useKeyboardNavigation(items, onSelect)
// Manages arrow-key focus through a list and fires onSelect on Enter/Space.
// Used by Dropdown and Tabs.

import { useState, useCallback } from 'react'

export function useKeyboardNavigation(
  items: string[],
  onSelect: (value: string) => void
) {
  const [focusedIndex, setFocusedIndex] = useState(0)

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setFocusedIndex(i => (i + 1) % items.length)
          break
        case 'ArrowUp':
          e.preventDefault()
          setFocusedIndex(i => (i - 1 + items.length) % items.length)
          break
        case 'Enter':
        case ' ':
          e.preventDefault()
          if (items[focusedIndex] !== undefined) {
            onSelect(items[focusedIndex])
          }
          break
        case 'Escape':
          setFocusedIndex(0)
          break
      }
    },
    [items, focusedIndex, onSelect]
  )

  return { focusedIndex, setFocusedIndex, handleKeyDown }
}
