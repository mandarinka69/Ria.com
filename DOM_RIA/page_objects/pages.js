var bottlejs = require('bottlejs').pop('test');

bottlejs.factory('PageObject', function () {

    return {
        getCommonPage: () => {
            const CommonPage = require('./common/common.po.js');
            return new CommonPage();
        },
        getSearchPage: () => {
            const SearchPage = require('./search/search.po.js');
            return new SearchPage();
        }
    };
});

module.exports = bottlejs;
