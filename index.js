const fs = require("fs/promises");
const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto("https://learnwebcode.github.io/practice-requests/");
    // await page.screenshot({ path: "amazing.png", fullPage: true });

    const names = ["text1", "text2", "text3"];
    await fs.writeFile("names.txt", names.join("\r\n"));

    await browser.close();
  } catch (error) {
    console.log(error);
  }
})();
