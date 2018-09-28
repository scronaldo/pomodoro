const puppeteer = require('puppeteer');
const path = require('path');

let page;
let browser;

// Viewport && Window size
const width = 1200
const height = 800

const indexPage = `file://${path.resolve('dist/index.html')}`

describe("Contact form", () => {
        // init puppeteer
        beforeAll(async () => {
            browser = await puppeteer.launch({
                headless: true,
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-infobars',
                    `--window-size=${ width },${ height }`,
                ]
            });
            page = await browser.newPage();
            await page.setViewport({ width, height });
        });

        afterAll(async () => {
            await page.screenshot({path: 'index.png'});
            browser.close();
        });

        it('Should have a <h1> element', async () => {
            await page.goto(indexPage);
            const headline = await page.$('h1');
            expect(headline).not.toBeNull();
        });

        //await page.goto('http://localhost:9001/');
        //await page.screenshot({path: 'example.png'});

        // await page.waitForSelector("[data-test=contact-form]");
        // await page.click("input[name=name]");
        // await page.type("input[name=name]", lead.name);
        // await page.click("input[name=email]");
        // await page.type("input[name=email]", lead.email);
        // await page.click("input[name=tel]");
        // await page.type("input[name=tel]", lead.phone);
        // await page.click("textarea[name=message]");
        // await page.type("textarea[name=message]", lead.message);
        // await page.click("input[type=checkbox]");
        // await page.click("button[type=submit]");
        // await page.waitForSelector(".modal");

        // close puppetieer
        // await browser.close();
});