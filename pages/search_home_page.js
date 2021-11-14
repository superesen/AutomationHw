const { I } = inject();

module.exports = {


    buttons: {
        acceptCookies: "Accept cookies",
        search: '[data-testid="button-header-search"]',
        
    },

    go() {
        I.amOnPage('/en/home');
    },
    
    click() {
        
        I.click(this.buttons.acceptCookies);
        I.click(this.buttons.search);

    },



   




   
    
    
}
