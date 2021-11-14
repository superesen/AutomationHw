const { Browser } = require("puppeteer");

Feature('reqThree');


Scenario('REQ-3', ({ I, searchHomePage }) => {

    searchHomePage.go();
    searchHomePage.click();
    I.seeCurrentUrlEquals('/en/search/Live');
    I.fillField('[data-testid="filter-text"]', 'MattWarren');
    I.wait(2);
    I.click('[data-testid="offline"]');
    I.seeCurrentUrlEquals('/en/profile/MattWarren');
    I.click('[data-testid="button-header-search"]');
    I.seeCurrentUrlEquals('/en/search/Live');
    I.clearField('[data-testid="search-page"]');

    I.fillField('[data-testid="filter-text"]', 'MysticMilena');
    I.wait(2);
    I.click('[data-testid="offline"]');
    I.seeCurrentUrlEquals('/en/profile/MysticMilena');
    I.click('[data-testid="button-header-search"]');
    I.seeCurrentUrlEquals('/en/search/Live');
    I.clearField('[data-testid="search-page"]');

    I.fillField('[data-testid="filter-text"]', 'EternalFlame');
    I.wait(2);
    I.click('[data-testid="offline"]');
    I.seeCurrentUrlEquals('/en/profile/EternalFlame');
    I.click('[data-testid="button-header-search"]');
    I.seeCurrentUrlEquals('/en/search/Live');
    I.clearField('[data-testid="search-page"]');

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



