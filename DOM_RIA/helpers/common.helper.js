const config = require('../protractor.conf.js');

/**
 * Common helper object.
 * @constructor
 */
let CommonHelper = function() {
	
	/**
	 * Wait until selected element will be present in DOM
	 *
	 * @param element
	 * @param message
	 * @param timeout
	 */
	this.waitUntilElementPresent = async function (element, message, timeout) {
		let to = timeout ? timeout : config.config.allScriptsTimeout;
		let EC = protractor.ExpectedConditions;
		await browser.driver.wait(EC.presenceOf(element), to, message);
	};
	
	/**
	 * Wait until selected element will be visible
	 *
	 * @param element
	 * @param message
	 * @param timeout
	 */
	this.waitUntilElementVisible = async function (element, message, timeout) {
		let to = timeout ? timeout : config.config.allScriptsTimeout;
		let EC = protractor.ExpectedConditions;
		await browser.driver.wait(EC.visibilityOf(element), to, message);
	};
	
	/**
	 * Wait until selected element will be clickable
	 *
	 * @param element
	 * @param message
	 * @param timeout
	 */
	this.waitUntilElementClickable = async function (element, message, timeout) {
		let to = timeout ? timeout : config.config.allScriptsTimeout;
		let EC = protractor.ExpectedConditions;
		await browser.driver.wait(EC.elementToBeClickable(element), to, message);
	};

	/**
	 * Clear browser session storage
	 *
	 */
	this.clearSessionStorage = async function () {
		await browser.executeScript('window.sessionStorage.clear();');
	};

	/**
	 * Clear browser local storage
	 *
	 */
	this.clearLocalStorage = async function () {
		await browser.executeScript('window.localStorage.clear();');
	};

	/**
	 * Clear cookies
	 *
	 */
	this.clearCookies = async function () {
		await browser.manage().deleteAllCookies();
	};

	/**
	 * Clear all browser data
	 *
	 */
	this.clearAllData = async function () {
		await this.clearSessionStorage();
		await this.clearLocalStorage();
		await this.clearCookies();
	};

	/**
	 * Wait until selected element will be invisible
	 *
	 * @param element
	 * @param message
	 * @param timeout
	 */
	this.waitUntilElementInvisible = async function (element, message, timeout) {
		let to = timeout ? timeout : config.config.allScriptsTimeout;
		let EC = protractor.ExpectedConditions;
		await browser.driver.wait(EC.invisibilityOf(element), to, message);
	};

	/**
	* Wait until selected element will be absent in DOM
	*
	* @param element
	* @param message
	* @param timeout
	*/

	this.waitUntilElementIsNotPresent = async function (element, message, timeout) {
		var mess = message ? message : element.locator().toString() + ' is presented.';
		var to = timeout ? timeout : config.config.allScriptsTimeout;
		var EC = protractor.ExpectedConditions;
		await browser.driver.wait(EC.stalenessOf(element), to, mess);
	};

	this.moveElementAsync = async function (dragElement, dropElement) {
		await this.waitUntilElementVisible(dragElement);
		await this.moveMouseOver(dragElement);
		await browser.actions().mouseDown(dragElement).perform();
		await browser.sleep(1000); // wait for move element
		await this.scrollPageToElement(dropElement);
		await browser.sleep(2000); // wait for move element
		await this.waitUntilElementVisible(dropElement);
		await this.moveMouseOver(dropElement);
		await browser.sleep(1500); // wait for move element
		await browser.actions().mouseMove(dropElement).perform();
		await browser.sleep(1500); // wait for move element
		await browser.actions().mouseUp().perform();
		await browser.sleep(1000); // wait for move element
	};

	this.clear = async function (elem) {
		await elem.getAttribute('value').then(async function (text) {
			var len = text.length;
			var backspaceSeries = await Array(len+1).join(await protractor.Key.BACK_SPACE);
			await elem.sendKeys(backspaceSeries);
		})
	};

	/**
	 * Mouse over element
	 *
	 * @param element
	 */
	this.moveMouseOver = async function (element) {
		await browser.actions().mouseMove(element).perform();
	};

	this.scrollPageToElement = async function (element) {
		await browser.executeScript('arguments[0].scrollIntoView();', element);
	};

	/**
	 * Switch to next browser tab
	 * @param {ProtractorBrowser} browser
	 */
	this.switchToNextTab = async function () {
		await browser.getAllWindowHandles().then(async function (handles) {
			await browser.switchTo().window(handles[handles.length - 1]);
		});
	};

	/**
	 * Switch to previous browser tab
	 * @param {ProtractorBrowser} browser
	 */
	this.switchToPreviousTab = async function () {
		await browser.getAllWindowHandles().then(async function (handles) {
			if (handles.length > 1) {
				await browser.close();
				await browser.switchTo().window(handles[handles.length - 2]);
			}
		});
	};

};

module.exports = new CommonHelper();
