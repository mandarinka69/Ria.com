'use strict';

const commonHelper = require('../../helpers/common.helper.js');

class SearchPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    constructor() {

        this.drpTypeOfProperty = $('.catTypeName');

        this.chxInspeced = $('[for="topFilterInspected"]');

        this.chxSecondary = $('[for="topFilterOnlySecondary"]');

        this.inputCity = $('#autocompleteSearch');

        this.inputPriceFrom = $('[data-label-prefix="ціна від"]');

        this.inputPriceTo = $('[data-label-prefix="ціна до"]');

    };

    chooseType(type) {
        return element(by.cssContainingText('.options label', type));
    };

    txtCity(city) {
        return $(`[title*="${city}"]`);
    };

    rooms(value) {
        return $(`[for="rooms_count_${value}"]`);
    };

    filter(value) {
        return element(by.cssContainingText('.tagging-filter .item', value));
    };

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    async chooseTypeOfProperty(type) {
        await commonHelper.waitUntilElementClickable(this.drpTypeOfProperty, 'Type of property dropdown is not clickable');
        await this.drpTypeOfProperty.click();
        await commonHelper.waitUntilElementClickable(this.chooseType(type), `The ${type} type is not clickable`);
        await this.chooseType(type).click();
    };

    async waitForFilter(filter) {
        await commonHelper.waitUntilElementPresent(this.filter(filter), `${filter} filter is not present`);
        await commonHelper.scrollPageToElement(this.filter(filter));
        await commonHelper.waitUntilElementVisible(this.filter(filter), `${filter} filter is not visible`);
    };

    async chooseRooms(value) {
        await commonHelper.waitUntilElementClickable(this.rooms(value), `${value} rooms are not clickable`);
        await this.rooms(value).click();
    };

    async fillPriceFrom(price) {
        await commonHelper.waitUntilElementPresent(this.inputPriceFrom, 'Цена от filed is not present');
        await commonHelper.scrollPageToElement(this.inputPriceFrom);
        await commonHelper.waitUntilElementClickable(this.inputPriceFrom, 'Цена от filed is not clickable');
        await this.inputPriceFrom.click();
        await commonHelper.clear(this.inputPriceFrom);
        await this.inputPriceFrom.sendKeys(price);
    };

    async fillPriceTo(price) {
        await commonHelper.waitUntilElementPresent(this.inputPriceTo, 'Цена до filed is not present');
        await commonHelper.scrollPageToElement(this.inputPriceTo);
        await commonHelper.waitUntilElementClickable(this.inputPriceTo, 'Цена до filed is not clickable');
        await this.inputPriceTo.click();
        await commonHelper.clear(this.inputPriceTo);
        await this.inputPriceTo.sendKeys(price);
    }

    async fillCity(value) {
        await commonHelper.waitUntilElementClickable(this.inputCity, 'City field is not clickable');
        await this.inputCity.click();
        await commonHelper.clear(this.inputCity);
        await this.inputCity.sendKeys(value);
    };

    async chooseCity(value) {
        await commonHelper.waitUntilElementClickable(this.txtCity(value), `The ${value} city is not clickable`);
        await this.txtCity(value).click();
    };

    async clickChxInspected() {
        await commonHelper.waitUntilElementClickable(this.chxInspeced, 'The [Inspected] checkbox is not clickable');
        await this.chxInspeced.click();
    };

    async clickChxSecondary() {
        await commonHelper.waitUntilElementClickable(this.chxSecondary, 'The [Secondary] checkbox is not clickable');
        await this.chxSecondary.click();
    };

}

module.exports = SearchPage;
