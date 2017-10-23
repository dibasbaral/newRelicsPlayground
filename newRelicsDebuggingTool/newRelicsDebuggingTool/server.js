//'use strict';

//var express = require('express');
//var app = express();
//var path = require('path');

//app.get('/', function (req, res) {
//    res.sendFile(path.join(__dirname + '/index.html'));
//}).listen(5650);

'use strict';

var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

//open firefox
var driver = new webdriver.Builder().forBrowser('firefox').build();

//maximize the window
driver.manage().window().maximize();
//delete all cookies
driver.manage().deleteAllCookies();
//navigate to google.com
driver.get('https://az.test:Password1@dtimecard.flynncompanies.com').then(function (error, response, body) {
    if (error) {
        console.log("error : " + error.message);
        throw new Error("authentication error found" + Json.parse(error.body));
    }
    
});


//search webdriver in google
//driver.findElement(By.name('q')).sendKeys('webdriver');
////click on search button

//driver.findElement(By.name('btnK')).click();

////wait for page title
//driver.wait(until.titleIs('webdriver - Google Search'),1000);
//close the browser
driver.quit();


