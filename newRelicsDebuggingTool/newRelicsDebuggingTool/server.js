'use strict';

//var express = require('express');
//var newrelic = require('newrelic');
//var transaction=newrelic.getTransaction()
//var app = express();
//var path = require('path');

//app.get('/', function (req, res) {
//    res.sendFile(path.join(__dirname + '/index.html'));
//}).listen(5650);



var webdriver = require('selenium-webdriver');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;
var assert = require('assert-plus');

//open firefox
var driver = new webdriver.Builder().forBrowser('firefox').build();

//maximize the window
driver.manage().window().maximize();
//delete all cookies
driver.manage().deleteAllCookies();
//navigate to google.com
driver.get('https://az.test:Password1@servicedashboard.flynncompanies.com/').then(function(error, response, body) {
    //if (error) {
    //    console.log("error : " + error.message);
    //    throw new Error("authentication error found" + Json.parse(error.body));
    //}
    if (alertIsPresent) {
        driver.navigate.alert();
        alert.cancel();
    }
    console.log("response : " + response);
    console.log("body : " + body);
    assert.ok(response.statusCode === '200');
});




//search webdriver in google
//driver.findElement(By.name('q')).sendKeys('webdriver');
////click on search button

//driver.findElement(By.name('btnK')).click();

////wait for page title
//driver.wait(until.titleIs('webdriver - Google Search'),1000);
//close the browser
driver.quit();


