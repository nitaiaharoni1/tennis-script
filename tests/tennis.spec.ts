import {expect, test} from '@playwright/test';
import {sendEmail} from '../utils/email';
import {constants} from '../constants';

test('Tennis test', async ({page}) => {
    await page.goto(constants.url);

    try {
        await expect(page).toHaveScreenshot('tennis2.png', {fullPage: true});
        console.log('Test passed');
    } catch (error) {
        console.log('Sending email');
        const path = 'tennis123.png';
        await page.screenshot({path, fullPage: true});
        sendEmail({attachments: [{filename: 'current-screenshot.png', path}]});
    }

    await page.waitForTimeout(10000);
});
