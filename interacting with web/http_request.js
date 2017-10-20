var http = require('http');

console.log('going to make a request');

var response  = http.request("http://www.google.com",function(res){
	console.log('status code : '+res.statusCode);
	res.pipe(process.stdout);
});

response.end();