import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const url = process.argv[2] || 'http://localhost:5173/'
const out = process.argv[3] || 'screenshots/latest.png'
const w = Number(process.argv[4] || 1440)
const h = Number(process.argv[5] || 900)

mkdirSync('screenshots', { recursive: true })

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 2 })
const page = await ctx.newPage()
const errors = []
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`))
page.on('console', (m) => { if (m.type() === 'error') errors.push(`console.error: ${m.text()}`) })

await page.goto(url, { waitUntil: 'networkidle' })
await page.waitForTimeout(400)
await page.screenshot({ path: resolve(out), fullPage: false })
await browser.close()

if (errors.length) {
  console.error('---PAGE_ERRORS---')
  errors.forEach((e) => console.error(e))
}
console.log(`Saved ${out} (${w}x${h})`)
