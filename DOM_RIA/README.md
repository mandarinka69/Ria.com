## Running end-to-end tests

### Installation of environment
Run `npm install`
Run `./node_modules/protractor/bin/webdriver-manager update`

### Tests execution

Run specific suite: `./node_modules/protractor/bin/protractor protractor.conf.js --env=production --suite=all --disableChecks`
