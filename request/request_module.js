var request = require('request');

request('https://github.com/',function(err,res,body){
	
	if(!err && res.statusCode === 200){
		console.log(body);
	}
});