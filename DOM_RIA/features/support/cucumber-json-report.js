var fs = require('fs-extra');
var Cucumber = require('cucumber');

module.exports = function() {

    var JsonFormatter = Cucumber.Listener.JsonFormatter();

    JsonFormatter.log = function(string) {
        var outputDir = 'reports';
        var targetJson = outputDir + '/cucumber_report.json';
        fs.writeFileSync(targetJson, string);
    };

    this.registerListener(JsonFormatter);
};