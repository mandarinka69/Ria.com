const cucumberJunitConvert = require('cucumber-junit-convert');

module.exports = function() {

    this.AfterFeatures(function(features, callback) {

        const options = {
            inputJsonFile: 'reports/cucumber_report.json',
            outputXmlFile: 'reports/cucumber_report.xml'
        };

        cucumberJunitConvert.convert(options);
        callback();
    });
};
