import {expect, test} from '@playwright/test';
import {constants} from '../constants';
import * as fs from 'fs';
import {sendEmail} from '../utils/email';

const path = 'tennis123.png';

test('Tennis test', async ({page}) => {
    await page.goto(constants.url);
    await page.waitForTimeout(5000);

    await page.screenshot({path});
    // const compareScreenshotPath = 'tennis2.png';
    const tennisTxtFileText = fs.readFileSync('tennis.txt', 'utf8');
    const bodyText = await page.innerText('body');

    try {
        // await expect(page).toHaveScreenshot(compareScreenshotPath, {maxDiffPixels: 0});
        await expect(bodyText).toBe(tennisTxtFileText);
        console.log('Test passed');
    } catch (error) {
        console.log('Found change');
        sendEmail({attachments: [{filename: 'current-screenshot.png', path}]});
    }

    await page.waitForTimeout(10000);
});
