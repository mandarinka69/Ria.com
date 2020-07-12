const Config = require('./config.data.json');
let App = Config.env[Object.keys(Config.env)[0]];

const init = function() {
    for (let i = 0; i < process.argv.length; i++) {
        let obj = process.argv[i];
        let match = obj.match(/^--env=(.*)$/);
        if (match && match.length > 0) {
            App = Config.env[match[1]];
        }
    }
};

init();

exports.config = {

    directConnect: true,

    baseUrl: App.baseUrl,

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            args: ['--disable-extensions', '--disable-infobars', '--incognito', '--test-type=browser', '--start-maximized',
                '--window-size=1920,1080', '--no-sandbox'],
            prefs: {
                'profile.managed_default_content_settings.geolocation': 1,
            }
        }
    },

    plugins: [{
        package: 'protractor-console',
        logLevels: ['severe'],
        path: 'node_modules/protractor-console'
    }],

    getPageTimeout: 60000,
    allScriptsTimeout: 60000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    suites: {
        all: ['features/*.feature']
    },
    cucumberOpts: {
        // require step definitions
        require: [
            'features/step_definitions/*.js',
            'features/support/screenshot.js',
            'features/support/cucumber-json-report.js',
            'features/support/cucumber-html-report.js',
            'features/support/cucumber-junit-report.js',
            'features/support/cucumber-video-report.js',
            'features/support/timeout.js',
        ],
    },

    onPrepare: async function () {
        const screenshots = require('protractor-take-screenshots-on-demand');

        screenshots.browserNameJoiner = ' - '; //this is the default
        screenshots.screenShotDirectory = 'screenshots';
        screenshots.createDirectory();

        const {Given, Then, When} = require('cucumber');
        global.Given = Given;
        global.When = When;
        global.Then = Then;

        await browser.waitForAngularEnabled(false);
    },
};
