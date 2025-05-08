import { Page } from "puppeteer";

export const googleMeets = async(page: Page) => {
  await page.waitForSelector("button", { timeout: 10000 });
  const buttons = await page.$$("button");
  for (let btn of buttons) {
      const text = await page.evaluate((el: { innerText: any; }) => el.innerText, btn);
      if (text.includes("Join now")) {
          await btn.click();
          console.log("Clicked Join Now");
          break;
      }
    }
}