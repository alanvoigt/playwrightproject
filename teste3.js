const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch({headless:false, slowMo: 300})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://react-redux.realworld.io/#/login')

    await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'test123')
    await page.click('form >> "Sign in"', { position: { x: 0, y: 0}, button: 'left', modifiers: ['Shift'], force: true, timeout: 45000})
    await page.focus('form >> "Sign in"')
}) ()