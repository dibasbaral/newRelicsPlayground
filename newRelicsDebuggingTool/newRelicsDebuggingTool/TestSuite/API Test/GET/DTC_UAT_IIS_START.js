//API TEST WITH AUTHENTICATION
//https://github.com/request/request#http-authentication

var request = require('request');
request.get('https://utimecard.flynncompanies.com', {
    'auth': {
        'user': 'az.test',
        'pass': 'Password1',
        'sendImmediately': false,
        //'bearer':'bearerToken'
    }
}).on('response', function (response) {
    console.log("response : ", response.statusCode + response.statusMessage);

});