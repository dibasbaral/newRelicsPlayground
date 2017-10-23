//driverfactory.js

module.exports = {
    driverInitialize: function () {
        var webdriver = require('selenium-webdriver'),
            chrome = require('selenium-webdriver/chrome');
        //firefox = require('selenium-webdriver/firefox');

        var driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(/* ... */).build();
        return this.driver;
    }
};


