// https://dtimecard.flynncompanies.com/tcapi/statuscheck/ad

// Note to debug http.get api test within a console , you need to know how to handle error.Refer to Readme.txt for how to use request API


//get http api test

//import necessary libraries
var assert = require('assert');
var http = require('http');

// create options variable

var options = {
    url: 'https://dtimecard.flynncompanies.com/tcapi/statuscheck/ad',
    // add optional headers and tokens
    //headers: {

    //},
};


//callback function
function callback(err, resp, body) {
    if (err)
    {
        console.log("error: ", error.body);
        throw new Error("error found" + err.message);
    }
    console.log("response :", resp.statusCode);
    console.log("body : ", JSON.parse(body));
    assert.ok(resp.statusCode == 200, 'expected 200 OK response');
};

//http get
http.get(options, callback);