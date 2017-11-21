var request = require('request');
request.get('https://dserviceapp.flynn.ca',
    {
        'auth': {
            'user': 'az.test',
            'pass': 'Password1',
            'sendImmediately': false,
            //'bearer':'bearerToken'
        }
    }).on('response',
    function(response) {
        console.log("response : ", response.statusCode + response.statusMessage);
    });



request.get('https://az.test:Password1@serviceapp.flynn.ca').on('response',function(response) {
    console.log('response : ', response.statusMessage);
    
})