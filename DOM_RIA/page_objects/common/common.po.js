'use strict';

const commonHelper = require('../../helpers/common.helper.js');

class CommonPage {

    //--------------------------------------------------------------------------
    // Elements
    //--------------------------------------------------------------------------

    constructor() {

        this.webPush = $('div.web-push-body');

        this.btnPushClose = $('div.web-push-close');

    };

    //--------------------------------------------------------------------------
    // Functions
    //--------------------------------------------------------------------------

    async openUrl(url) {
        await browser.get(browser.baseUrl + url);
    };

    async closeWebPush() {
        await commonHelper.waitUntilElementVisible(this.webPush, 'Web push is not visible', 60000);
        await commonHelper.waitUntilElementClickable(this.btnPushClose, 'Close button is not visible');
        await this.btnPushClose.click();
    };

}

module.exports = CommonPage;
