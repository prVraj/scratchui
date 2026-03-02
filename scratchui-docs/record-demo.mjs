/**
 * scratchUI demo video recorder
 * Records all component animations and saves to /tmp/scratchui-demo.webm
 */

import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

const BASE = 'http://localhost:3000'
const OUT_DIR = '/tmp/scratchui-video'
mkdirSync(OUT_DIR, { recursive: true })

const browser = await chromium.launch({ headless: true })
const ctx = await browser.newContext({
  viewport: { width: 1280, height: 800 },
  recordVideo: { dir: OUT_DIR, size: { width: 1280, height: 800 } },
  deviceScaleFactor: 2,
})
const page = await ctx.newPage()

const wait = (ms) => page.waitForTimeout(ms)

// ─── Helpers ───────────────────────────────────────────────────────────────

async function scrollTo(y) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'smooth' }), y)
  await wait(600)
}

async function goTo(path, label) {
  console.log(`→ ${label}`)
  await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' })
  await wait(500)
}

// ─── 1. Landing page ───────────────────────────────────────────────────────

await goTo('/', 'Landing — hero')
await wait(1800)           // hero animations play

await scrollTo(700)        // features section
await wait(1200)
await scrollTo(1500)       // component strip
await wait(1000)

// Hover a component strip card
const firstCard = page.locator('.shrink-0.w-\\[220px\\]').first()
if (await firstCard.isVisible()) {
  await firstCard.hover()
  await wait(600)
}

await scrollTo(2400)       // CTA section
await wait(1000)

// ─── 2. Docs intro ─────────────────────────────────────────────────────────

await goTo('/docs', 'Docs — introduction')
await wait(800)
await scrollTo(400)
await wait(600)

// ─── 3. Button ─────────────────────────────────────────────────────────────

await goTo('/docs/components/button', 'Button')
await wait(600)

// Hover & tap each button variant
for (const text of ['Save changes', 'Cancel', 'Learn more']) {
  const btn = page.getByRole('button', { name: text }).first()
  if (await btn.isVisible()) {
    await btn.hover()
    await wait(350)
    await btn.click()
    await wait(350)
  }
}

// ─── 4. Card ───────────────────────────────────────────────────────────────

await goTo('/docs/components/card', 'Card')
await wait(600)
const card = page.locator('.cursor-pointer').first()
if (await card.isVisible()) {
  await card.hover()
  await wait(700)
}

// ─── 5. Tabs ───────────────────────────────────────────────────────────────

await goTo('/docs/components/tabs', 'Tabs')
await wait(600)
for (const label of ['Details', 'Changelog', 'Overview']) {
  const tab = page.getByRole('button', { name: label }).first()
  if (await tab.isVisible()) {
    await tab.click()
    await wait(500)
  }
}

// ─── 6. Accordion ──────────────────────────────────────────────────────────

await goTo('/docs/components/accordion', 'Accordion')
await wait(600)
for (const q of [
  'Can I use it with Next.js?',
  'Is it accessible?',
  'Does it have any dependencies?',
]) {
  const trigger = page.getByRole('button', { name: q }).first()
  if (await trigger.isVisible()) {
    await trigger.click()
    await wait(600)
  }
}

// ─── 7. Dropdown ───────────────────────────────────────────────────────────

await goTo('/docs/components/dropdown', 'Dropdown')
await wait(600)
const dropdownBtn = page.getByRole('button', { name: /Options/ }).first()
if (await dropdownBtn.isVisible()) {
  await dropdownBtn.click()
  await wait(700)
  const editItem = page.getByRole('menuitem', { name: 'Edit' })
  if (await editItem.isVisible()) {
    await editItem.hover()
    await wait(400)
  }
  await dropdownBtn.click()
  await wait(400)
  // Open again to show close animation
  await dropdownBtn.click()
  await wait(500)
  await page.keyboard.press('Escape')
  await wait(500)
}

// ─── 8. Modal ──────────────────────────────────────────────────────────────

await goTo('/docs/components/modal', 'Modal')
await wait(600)
const openBtn = page.getByRole('button', { name: 'Open modal' }).first()
if (await openBtn.isVisible()) {
  await openBtn.click()
  await wait(900)
  const cancelBtn = page.getByRole('button', { name: 'Cancel' }).first()
  if (await cancelBtn.isVisible()) {
    await cancelBtn.hover()
    await wait(400)
    await cancelBtn.click()
    await wait(600)
  }
  // Open again, confirm
  await openBtn.click()
  await wait(800)
  const confirmBtn = page.getByRole('button', { name: 'Confirm' }).first()
  if (await confirmBtn.isVisible()) {
    await confirmBtn.click()
    await wait(600)
  }
}

// ─── 9. Toast ──────────────────────────────────────────────────────────────

await goTo('/docs/components/toast', 'Toast')
await wait(600)

// Fire all 4 types
for (const label of ['Success', 'Error', 'Warning', 'Info']) {
  const btn = page.getByRole('button', { name: label }).first()
  if (await btn.isVisible()) {
    await btn.click()
    await wait(500)
  }
}
await wait(1000) // show the stack

// Fire 2 more to trigger the ghost peek cards
await page.getByRole('button', { name: 'Success' }).first().click()
await wait(400)
await page.getByRole('button', { name: 'Error' }).first().click()
await wait(1800) // watch toasts drain and disappear

// ─── 10. Tooltip ───────────────────────────────────────────────────────────

await goTo('/docs/components/tooltip', 'Tooltip')
await wait(600)

for (const name of ['Save', 'Delete', 'Info']) {
  const btn = page.getByRole('button', { name }).first()
  if (await btn.isVisible()) {
    await btn.hover()
    await wait(700)
  }
}
// move away
await page.mouse.move(640, 400)
await wait(400)

// ─── 11. Badge & Input ─────────────────────────────────────────────────────

await goTo('/docs/components/badge', 'Badge')
await wait(800)
await goTo('/docs/components/input', 'Input')
await wait(800)

// ─── Wrap up ───────────────────────────────────────────────────────────────

await wait(800)
console.log('✓ Recording complete — saving video...')
await ctx.close()
await browser.close()

// Find the recorded file
import { readdirSync } from 'fs'
const files = readdirSync(OUT_DIR).filter(f => f.endsWith('.webm'))
if (files.length > 0) {
  const src = `${OUT_DIR}/${files[0]}`
  const dest = '/tmp/scratchui-demo.webm'
  const { execSync } = await import('child_process')
  execSync(`cp "${src}" "${dest}"`)
  console.log(`\n✓ Video saved → ${dest}`)
  console.log(`  Open with: open "${dest}"`)
} else {
  console.log('No video file found in', OUT_DIR)
}
