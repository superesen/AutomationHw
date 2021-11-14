const { Browser } = require("puppeteer");

Feature('reqOne');

Scenario('REQ-1', ({I,searchHomePage}) => {

    searchHomePage.go();
    searchHomePage.click();
    I.seeCurrentUrlEquals('/en/search/Live');

    I.wait(2);
    //document.querySelector('[data-testid="search-result"]');
  


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
   
