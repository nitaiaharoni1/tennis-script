import {expect, test} from '@playwright/test';
import {constants} from '../constants';
import {sendEmail} from '../utils/email';

const path = 'tennis123.png';

test('Tennis test', async ({page}) => {
    await page.goto(constants.url);

    await page.screenshot({path, fullPage: true});
    try {
        await expect(page).toHaveScreenshot('tennis.png', {fullPage: true});
        console.log('Test passed');
    } catch (error) {
        sendEmail({attachments: [{filename: 'current-screenshot.png', path}]});
    }

    await page.waitForTimeout(10000);
});
