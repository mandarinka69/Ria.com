const pageObject = require('../../page_objects/pages.js').container.PageObject;
const commonPage = pageObject.getCommonPage();

module.exports = async function() {

    const searchPage = 'uk/search';

    this.Given(/^I open (.*) page$/, {timeout: 50000}, async function (url) {
        switch (url) {
            case 'search':
                await commonPage.openUrl(searchPage);
                break;
        }
    });

    this.When(/^I close web push$/, {timeout: 60000}, async function () {
        await commonPage.closeWebPush();
    });

};
