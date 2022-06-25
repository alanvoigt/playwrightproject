const { chromium } = require('playwright');
const expect = require('expect');

(async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://react-redux.realworld.io/#/login')

    await page.fill('input[type = "email"]', 'alanvoigt@yahoo.com.br')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'test123')
    await page.click('form >> "Sign in"')

    await page.waitForTimeout(5000)

    const content = await page.textContent('.navbar-brand')
    console.log('content: ' + content)
 //   expect(content).toMatch('Global Feeds') 

    const text = await page.innerText('.navbar-brand')
    console.log('text: ' + text)

    const html = await page.innerHTML('.navbar-brand')
    console.log('html: ' + html)

    const href = await page.getAttribute('.navbar-brand', 'href')
    console.log('href: ' + href)

    await browser.close()
})()