const pageObject = require('../../page_objects/pages.js').container.PageObject;
const commonHelper = require('../../helpers/common.helper.js');
const searchPage = pageObject.getSearchPage();

module.exports = async function() {

    this.When(/^I choose (.*) type of property$/, {timeout: 60000}, async function (value) {
        await searchPage.chooseTypeOfProperty(value);
    });

    this.When(/^I check Inspected checkbox$/, {timeout: 60000}, async function () {
        await searchPage.clickChxInspected();
    });

    this.When(/^I check Secondary checkbox$/, {timeout: 60000}, async function () {
        await searchPage.clickChxSecondary();
    });

    this.When(/^I fill City field with (.*) value$/, {timeout: 60000}, async function (value) {
        await searchPage.fillCity(value);
    });

    this.When(/^I choose (.*) city from dropdown$/, {timeout: 60000}, async function (value) {
        await searchPage.chooseCity(value);
    });

    this.When(/^I fill Price From field with (.*) value$/, {timeout: 60000}, async function (value) {
        await searchPage.fillPriceFrom(value);
    });

    this.When(/^I fill Price To field with (.*) value$/, {timeout: 60000}, async function (value) {
        await searchPage.fillPriceTo(value);
    });

    this.When(/^I choose (.*) rooms$/, {timeout: 60000}, async function (value) {
        await searchPage.chooseRooms(value);
        await browser.sleep(15000);
    });

    this.Then(/^I wait for (.*) filter$/, {timeout: 60000}, async function (value) {
        await searchPage.waitForFilter(value);
    });

};
