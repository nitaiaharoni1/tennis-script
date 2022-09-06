export const getCleanBodyText = async page => {
    let bodyText = await page.innerText('body');
    // replace all spaces and tabs and line-breaks with empty string
    bodyText = bodyText.replace(/\s/g, '');
    // replace all tabs with empty string
    bodyText = bodyText.replace(/\t/g, '');
    // replace all line-breaks with empty string
    bodyText = bodyText.replace(/\n/g, '');
    // replace all line-breaks with empty string
    return bodyText.replace(/\r/g, '');
};
