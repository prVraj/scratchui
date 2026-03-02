// scratchUI — Main Entry Point
// Developer imports tokens once in their app root:
//   import 'scratchUI/tokens'
// Then imports components:
//   import { Button, ButtonMotion } from 'scratchUI'

import './tokens/tokens.css'

// ─────────────────────────────────────────────────────────────────────────────
// Components — Static
// ─────────────────────────────────────────────────────────────────────────────
export { Button }         from './components/Button'
export { Badge }          from './components/Badge'
export { Input }          from './components/Input'
export { Card }           from './components/Card'
export { Tooltip }        from './components/Tooltip'
export { Toast }          from './components/Toast'
export { Dropdown }       from './components/Dropdown'
export { Modal }          from './components/Modal'
export { Tabs }           from './components/Tabs'
export { Accordion }      from './components/Accordion'

// ─────────────────────────────────────────────────────────────────────────────
// Components — Motion
// ─────────────────────────────────────────────────────────────────────────────
export { ButtonMotion }    from './components/Button'
export { BadgeMotion }     from './components/Badge'
export { InputMotion }     from './components/Input'
export { CardMotion }      from './components/Card'
export { TooltipMotion }   from './components/Tooltip'
export { ToastMotion }     from './components/Toast'
export { DropdownMotion }  from './components/Dropdown'
export { ModalMotion }     from './components/Modal'
export { TabsMotion }      from './components/Tabs'
export { AccordionMotion } from './components/Accordion'

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
export type { ButtonProps }    from './components/Button'
export type { BadgeProps }     from './components/Badge'
export type { InputProps }     from './components/Input'
export type { CardProps }      from './components/Card'
export type { TooltipProps }   from './components/Tooltip'
export type { ToastProps }     from './components/Toast'
export type { DropdownProps, DropdownItem }  from './components/Dropdown'
export type { ModalProps }     from './components/Modal'
export type { TabsProps, Tab } from './components/Tabs'
export type { AccordionProps, AccordionItem } from './components/Accordion'
