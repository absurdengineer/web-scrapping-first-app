const fs = require("fs/promises");
const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto("https://learnwebcode.github.io/practice-requests/");
    // await page.screenshot({ path: "amazing.png", fullPage: true });
    // const names = await page.evaluate(() => {
    //   // Inside this anonymous function we are dealing with the client side.
    //   // We can run all JavaScript Functions that we can run inside DOM.
    //   // All console.logs will console the data in browser and not in Terminal.
    //   // The variables will also be not accessible outside this scope.
    //   return Array.from(
    //     document.querySelectorAll("body > div > div > div > strong")
    //   ).map((x) => x.textContent);
    // });
    const photos = await page.$$eval("img", (images) => {
      // $$eval() is a function provided by the puppeteer which is specially dsigned to
      // deal with multiple elements with the same selector that basically takes 2 argument.
      // 1 the css selector, and 2 is an arrow function that takes 1 argument which is an array of
      // the specified element which is passed by the $$eval() only.
      return images.map((image) => image.src);
    });
    await fs.writeFile("photos.txt", photos.join("\r\n"));
    await browser.close();
  } catch (error) {
    console.log(error);
  }
})();
