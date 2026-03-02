// scratchUI dev preview — wire components here as each phase completes.
import { useState } from 'react'
import { Button, ButtonMotion } from '../src/components/Button'
import { Badge, BadgeMotion } from '../src/components/Badge'
import { Input, InputMotion } from '../src/components/Input'
import { Card, CardMotion } from '../src/components/Card'
import { Tooltip, TooltipMotion } from '../src/components/Tooltip'
import { Toast, ToastMotion } from '../src/components/Toast'
import { Dropdown, DropdownMotion } from '../src/components/Dropdown'
import { Modal, ModalMotion } from '../src/components/Modal'
import { Tabs, TabsMotion } from '../src/components/Tabs'
import { Accordion, AccordionMotion } from '../src/components/Accordion'

const section = (title: string) => (
  <h2 style={{ fontFamily: 'var(--ui-font-family)', fontSize: 'var(--ui-font-size-md)', fontWeight: 600, margin: '2rem 0 1rem', borderBottom: '1px solid var(--ui-color-border)', paddingBottom: '0.5rem' }}>
    {title}
  </h2>
)

const row = { display: 'flex', gap: '12px', flexWrap: 'wrap' as const, alignItems: 'center', marginBottom: '12px' }

const dropdownItems = [
  { label: 'Edit', value: 'edit' },
  { label: 'Duplicate', value: 'duplicate' },
  { label: 'Archive', value: 'archive' },
  { label: 'Delete', value: 'delete', disabled: true },
]

export default function App() {
  const [inputVal, setInputVal] = useState('')
  const [inputError, setInputError] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [showToastMotion, setShowToastMotion] = useState(false)
  const [toastVariant, setToastVariant] = useState<'default' | 'success' | 'warning' | 'danger'>('default')
  const [showModal, setShowModal] = useState(false)
  const [showModalMotion, setShowModalMotion] = useState(false)

  return (
    <div style={{ padding: 'var(--ui-space-8)', fontFamily: 'var(--ui-font-family)', color: 'var(--ui-color-text)', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: 'var(--ui-font-size-xl)', fontWeight: 600, marginBottom: '0.25rem' }}>scratchUI</h1>
      <p style={{ color: 'var(--ui-color-muted)', fontSize: 'var(--ui-font-size-sm)', marginBottom: '1rem' }}>All 10 components — Static + Motion variants</p>

      {section('Button — Static')}
      <div style={row}>
        <Button label="Primary" variant="primary" />
        <Button label="Secondary" variant="secondary" />
        <Button label="Ghost" variant="ghost" />
        <Button label="Danger" variant="danger" />
        <Button label="Disabled" variant="primary" disabled />
        <Button label="Loading" variant="primary" loading />
      </div>

      {section('Button — Motion')}
      <div style={row}>
        <ButtonMotion label="Primary" variant="primary" />
        <ButtonMotion label="Secondary" variant="secondary" />
        <ButtonMotion label="Ghost" variant="ghost" />
        <ButtonMotion label="Danger" variant="danger" />
      </div>

      {section('Badge')}
      <div style={row}>
        <Badge label="Default" />
        <Badge label="Success" variant="success" dot />
        <Badge label="Warning" variant="warning" dot />
        <Badge label="Danger" variant="danger" dot />
        <Badge label="Outline" variant="outline" />
        <BadgeMotion label="Spring in" variant="success" dot />
      </div>

      {section('Input')}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
        <Input label="Email" placeholder="you@example.com" value={inputVal} onChange={e => setInputVal(e.target.value)} hint="We'll never share your email." />
        <Input label="Error state" placeholder="Enter value" error="This field is required." />
        <InputMotion label="Label floats on focus" placeholder="Focus me" value={inputVal} onChange={e => setInputVal(e.target.value)} />
        <InputMotion label="Shake on error" placeholder="Trigger shake below" error={inputError} />
        <Button label="Toggle error shake" size="sm" variant="secondary" onClick={() => setInputError(e => e ? '' : 'Something went wrong!')} />
      </div>

      {section('Card')}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        <Card variant="default"><p style={{ margin: 0 }}>Default</p></Card>
        <Card variant="bordered"><p style={{ margin: 0 }}>Bordered</p></Card>
        <CardMotion variant="elevated" onClick={() => {}}><p style={{ margin: 0 }}>Motion — hover to lift</p></CardMotion>
      </div>

      {section('Tooltip — Static')}
      <div style={row}>
        <Tooltip content="Top tooltip" position="top"><Button label="Top" variant="secondary" /></Tooltip>
        <Tooltip content="Bottom tooltip" position="bottom"><Button label="Bottom" variant="secondary" /></Tooltip>
        <Tooltip content="Left tooltip" position="left"><Button label="Left" variant="secondary" /></Tooltip>
        <Tooltip content="Right tooltip" position="right"><Button label="Right" variant="secondary" /></Tooltip>
      </div>

      {section('Tooltip — Motion')}
      <div style={row}>
        <TooltipMotion content="Fades + scales in" position="top"><Button label="Hover me" variant="primary" /></TooltipMotion>
        <TooltipMotion content="With delay (500ms)" position="bottom" delay={500}><Button label="Slow delay" variant="secondary" /></TooltipMotion>
        <TooltipMotion content="Right side" position="right"><Badge label="Hover badge" variant="outline" /></TooltipMotion>
      </div>

      {section('Toast — Static')}
      <div style={row}>
        {(['default', 'success', 'warning', 'danger'] as const).map(v => (
          <Button key={v} label={`${v} toast`} size="sm" variant="secondary"
            onClick={() => { setToastVariant(v); setShowToast(true) }} />
        ))}
      </div>
      {showToast && <Toast message="This is a toast notification." variant={toastVariant} onClose={() => setShowToast(false)} />}

      {section('Toast — Motion')}
      <div style={row}>
        <Button label="Show motion toast" size="sm" variant="primary" onClick={() => setShowToastMotion(true)} />
        <Button label="Success motion toast" size="sm" variant="secondary" onClick={() => { setToastVariant('success'); setShowToastMotion(true) }} />
      </div>
      {showToastMotion && <ToastMotion key={String(showToastMotion)} message="Slides in from bottom-right!" variant={toastVariant} onClose={() => setShowToastMotion(false)} />}

      {section('Dropdown — Static')}
      <div style={row}>
        <Dropdown
          trigger={<Button label="Open menu ▾" variant="secondary" />}
          items={dropdownItems}
          onSelect={(v) => alert(`Selected: ${v}`)}
        />
        <Dropdown
          trigger={<Button label="Right-align ▾" variant="ghost" />}
          items={dropdownItems}
          onSelect={(v) => alert(`Selected: ${v}`)}
          position="bottom-right"
        />
      </div>

      {section('Dropdown — Motion')}
      <div style={row}>
        <DropdownMotion
          trigger={<Button label="Animated menu ▾" variant="primary" />}
          items={dropdownItems}
          onSelect={(v) => alert(`Selected: ${v}`)}
        />
      </div>

      {section('Modal — Static')}
      <div style={row}>
        <Button label="Open sm modal" size="sm" variant="secondary" onClick={() => setShowModal(true)} />
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Confirm action" size="sm">
        <p style={{ margin: '0 0 1rem' }}>Are you sure you want to proceed? This action cannot be undone.</p>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <Button label="Cancel" variant="secondary" size="sm" onClick={() => setShowModal(false)} />
          <Button label="Confirm" variant="primary" size="sm" onClick={() => setShowModal(false)} />
        </div>
      </Modal>

      {section('Modal — Motion')}
      <div style={row}>
        <Button label="Open motion modal" variant="primary" onClick={() => setShowModalMotion(true)} />
      </div>
      <ModalMotion isOpen={showModalMotion} onClose={() => setShowModalMotion(false)} title="Animated modal" size="md">
        <p style={{ margin: '0 0 1rem' }}>This modal fades in with a spring scale. Press Escape or click outside to close.</p>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
          <Button label="Got it" variant="primary" onClick={() => setShowModalMotion(false)} />
        </div>
      </ModalMotion>

      {section('Tabs — Static')}
      <Tabs
        tabs={[
          { label: 'Overview', value: 'overview', content: <p>Overview content. Arrow keys navigate between tabs.</p> },
          { label: 'Details',  value: 'details',  content: <p>Details content. Active tab has a bottom indicator.</p> },
          { label: 'Settings', value: 'settings', content: <p>Settings content. Press Home/End to jump to first/last tab.</p> },
        ]}
        defaultValue="overview"
      />

      {section('Tabs — Motion')}
      <TabsMotion
        tabs={[
          { label: 'Overview', value: 'overview', content: <p>Indicator slides between tabs. Content fades in.</p> },
          { label: 'Details',  value: 'details',  content: <p>The underline glides with spring easing.</p> },
          { label: 'Settings', value: 'settings', content: <p>Content transitions with a 150ms fade.</p> },
        ]}
        defaultValue="overview"
      />

      {section('Accordion — Static')}
      <Accordion
        items={[
          { title: 'What is scratchUI?', content: <p>A minimal HIG-inspired React component library with Static and Motion variants.</p> },
          { title: 'Zero dependencies?', content: <p>Just React and Motion One. No Tailwind, no Radix, no CSS-in-JS.</p> },
          { title: 'How do I customize it?', content: <p>Override tokens in your own CSS — <code>--ui-color-primary</code>, <code>--ui-radius-md</code>, etc.</p> },
        ]}
        defaultOpen={[0]}
      />

      {section('Accordion — Motion')}
      <AccordionMotion
        allowMultiple
        items={[
          { title: 'Height animates open/close', content: <p>The panel height transitions from 0 → auto smoothly (300ms ease-standard).</p> },
          { title: 'Chevron rotates 180°', content: <p>The ▾ flips to ▴ when open, driven by Motion's animate prop.</p> },
          { title: 'allowMultiple = true here', content: <p>Multiple items can be open simultaneously. Try opening all three.</p> },
        ]}
        defaultOpen={[0]}
      />
    </div>
  )
}
