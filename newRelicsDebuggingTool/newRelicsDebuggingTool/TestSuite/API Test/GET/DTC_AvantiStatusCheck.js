var http = require('http');
var assert = require('assert');

// Note to debug http.get api test within a console , you need to know how to handle error.Refer to Readme.txt for how to use request API
// create variable options

var options = {
    url: 'https://dtimecard.flynncompanies.com/tcapi/statuscheck/avanti',

    //add optional headers and tokens
    //header={

    //},
};


//callback function

function callback(error, response, body) {
    if (error) throw new Error('Error occured :'+ error.message);

    console.log("responseStatus : ", response);
    console.log('body : ', JSON.parse(body));
    assert.ok(response.statusCode == 200, 'Expected response 200');
};


//http.get

http.get(options, callback);