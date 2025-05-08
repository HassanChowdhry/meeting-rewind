import express, { Request, Response } from "express";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import dotenv from "dotenv";
import { logger } from "./services/logger";
import { googleMeets } from "./services/platform-functions";

dotenv.config();
puppeteer.use(StealthPlugin());

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.post("/join-meeting", async (req: Request, res: Response): Promise<any> => {
  const { meetingUrl, platform } = req.body;

  if (!meetingUrl) return res.status(400).json({ error: "Meeting URL is required" });

  try {
    logger.info("Launching Browser...");
    const browser = await puppeteer.launch({
      headless: false,
      args: [
        "--use-fake-ui-for-media-stream",
        "--use-fake-device-for-media-stream",
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-blink-features=AutomationControlled"
      ]
    })

    const page = await browser.newPage();
    await page.goto(meetingUrl, { waitUntil: "networkidle2" });

    logger.info("Meeting loaded!");

    res.json({ message: "Bot joined the meeting!" });

    // handlers for each platform
    // switch (platform)

    googleMeets(page);
    
    await new Promise(resolve => setTimeout(resolve, 60000));

    await browser.close();
  } 
  catch (e) {
    logger.error("Error joining meeting:", e);
    res.status(500).json({ error: "Failed to join meeting" });
  }
  finally {
    logger.info("End join meeting function.");
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});