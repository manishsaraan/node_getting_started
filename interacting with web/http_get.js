var http = require('http');

console.log('going to make a request');

//no need to store res in variable. you can directly print it out
http.get("http://www.google.com",function(res){
	console.log('status code : '+res.statusCode);
	res.pipe(process.stdout);
});

