const { Browser } = require("puppeteer");

Feature('reqTwo');


Scenario('REQ-2', ({ I, searchHomePage }) => {

    searchHomePage.go();
    searchHomePage.click();
    I.wait(2);
    I.seeCurrentUrlEquals('/en/search/Live');
    I.fillField('[data-testid="filter-text"]', 'Matt');
    I.wait(2);
    I.seeElement('[data-testid="search-result-list"]', '[contains(., "matt")]');
    I.clearField('[data-testid="filter-text"]');
    I.fillField('[data-testid="filter-text"]', 'Myst');
    I.wait(2);
    I.seeElement('[data-testid="search-result-list"]', '[contains(., "myst")]');
    I.clearField('[data-testid="filter-text"]');
    I.fillField('[data-testid="filter-text"]', 'Ann');
    I.wait(2);
    I.seeElement('[data-testid="search-result-list"]', '[contains(., "ann")]');
    I.clearField('[data-testid="filter-text"]');
    I.fillField('[data-testid="filter-text"]', 'psy');
    I.wait(2);
    I.seeElement('[data-testid="search-result-list"]', '[contains(., "psy")]');
    I.clearField('[data-testid="filter-text"]');
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

