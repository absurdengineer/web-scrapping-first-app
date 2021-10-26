const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto("https://github.com/puppeteer/puppeteer");
    await page.screenshot({ path: "amazing.png", fullPage: true });
    await browser.close();
  } catch (error) {
    console.log(error);
  }
})();
