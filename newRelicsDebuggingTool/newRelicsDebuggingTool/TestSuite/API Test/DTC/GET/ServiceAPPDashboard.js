var http = require('http');
var assert = require('assert');

// Note to debug http.get api test within a console , you need to know how to handle error.Refer to Readme.txt for how to use request API
// create variable options

var options = {
    url: 'https://servicedashboard.flynncompanies.com/',

    //add optional headers and tokens
   headers: {
       'Content-Type': 'text/html; charset=utf-8',
       'Authorization': 'Negotiate TlRMTVNTUAADAAAAGAAYAIgAAABMAUwBoAAAAAYABgBYAAAAFgAWAF4AAAAUABQAdAAAABAAEADsAQAAFYKI4gYBsR0AAAAPfRHZDea43LcitKUwTIH0R0YAQwBMAEQAaQBiAGEAcwAuAEIAYQByAGEAbABJAFQAMAAwADAAMAA0ADYANAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjUJU76m0oapQBAjTZlPFsBAQAAAAAAAKA4VvMNYtMBBXDJCJKHCYEAAAAAAgAGAEYAQwBMAAEAEgBQAE0ATwBCAEkATABFADAAMQAEAAwAZgBjAGwALgBjAG8AAwAgAFAATQBPAEIASQBMAEUAMAAxAC4AZgBjAGwALgBjAG8ABQAMAGYAYwBsAC4AYwBvAAcACACgOFbzDWLTAQYABAACAAAACAAwADAAAAAAAAAAAQAAAAAgAADJoSg3vF62LaP38qKqWsKY6FeGAH++ygMdB + afWEBXiQoAEAAFIQIXBEKLy3wWkyIvCpz5CQBQAEgAVABUAFAALwBzAGUAcgB2AGkAYwBlAGQAYQBzAGgAYgBvAGEAcgBkAC4AZgBsAHkAbgBuAGMAbwBtAHAAYQBuAGkAZQBzAC4AYwBvAG0AAAAAAAAAAAAAAAAAPyolpSDoeOoY2mfoEcKCkg =='
   }
};


//callback function

function callback(error, response, body) {
    if (error) throw new Error('Error occured :' + error.message);

    console.log("responseStatus : ", response);
    console.log('body : ', JSON.parse(body));
    assert.ok(response.statusCode === 200, 'Expected response 200');
};


//http.get

http.get(options, callback);