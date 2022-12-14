import {expect, test} from '@playwright/test';
import {constants} from '../constants';
import * as fs from 'fs';
import {sendEmail} from '../utils/email';
import {getCleanBodyText} from '../utils/getCleanBodyText';

const path = 'tennis123.png';
const forbidden = 'forbidden';


test('Tennis test', async ({page}) => {
    await page.goto(constants.url);
    await page.waitForTimeout(5000);

    await page.screenshot({path});
    // const compareScreenshotPath = 'tennis2.png';
    const tennisTxtFileText = fs.readFileSync('tennis.txt', 'utf8');
    const bodyText = await getCleanBodyText(page);
    const isSame = bodyText === tennisTxtFileText;
    console.log('isSame', isSame);
    try {
        // await expect(page).toHaveScreenshot(compareScreenshotPath, {maxDiffPixels: 0});
        if (bodyText.toLowerCase().includes(forbidden)) return;
        await expect(bodyText).toBe(tennisTxtFileText);
        console.log('Test passed');
    } catch (error) {
        console.log('Found change');
        sendEmail({attachments: [{filename: 'current-screenshot.png', path}]});
    }

    await page.waitForTimeout(10000);
});
