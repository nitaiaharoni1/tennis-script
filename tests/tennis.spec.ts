import {expect, test} from '@playwright/test';
import {constants} from '../constants';
import {sendEmail} from '../utils/email';

const path = 'tennis123.png';


test('Tennis test', async ({page}) => {
    await page.goto(constants.url);
    await page.waitForTimeout(5000);
    await page.screenshot({path});
    const compareScreenshotPath = 'tennis2.png';
    try {
        console.log('Compare screenshot path', compareScreenshotPath);
        await expect(page).toHaveScreenshot(compareScreenshotPath);
        console.log('Test passed');
    } catch (error) {
        sendEmail({attachments: [{filename: 'current-screenshot.png', path}]});
    }

    await page.waitForTimeout(10000);
});
