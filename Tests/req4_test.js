const { Browser } = require("puppeteer");

Feature('reqFour');


Scenario('REQ-4', ({ I, searchHomePage }) => {

    searchHomePage.go();
    searchHomePage.click();
    I.seeCurrentUrlEquals('/en/search/Live');
    I.wait(2);
    I.click('[data-testid="live-status-box"]');
    I.wait(5);
    I.see('[data-testid="OranumSurprisesDiamond"]');
    I.click('[data-testid="OranumSurprisesDiamond"]');
    I.see('Join Now');
    I.click('[data-testid="close-button"]');
    I.wait(2);
    I.see('[data-testid="OranumSurprisesHeart"]');
    I.click('[data-testid="OranumSurprisesHeart"]');
    I.see('Join Now');
    I.click('[data-testid="close-button"]');
    I.wait(2);
    I.see('[data-testid="quick-buy-button-applet"]');
    I.click('[data-testid="quick-buy-button-applet"]');
    I.see('Join Now');
    I.click('[data-testid="close-button"]');
    I.wait(2);
    I.see('[data-testid="start-private-button-applet"]');
    I.click('[data-testid="start-private-button-applet"]');
    I.see('Join Now');
    I.click('[data-testid="close-button"]');
    I.wait(2);



    async function getPageData(pageUrl, shouldScrollPage) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(pageUrl);
        if (shouldScrollPage) {
            await scrollPage(page);
        }
        const pageContent = await page.content();
        await page.close();
        await browser.close();
        return pageContent;
    }
});

