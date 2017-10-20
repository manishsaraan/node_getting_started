var fs = require('fs');
var PORT = process.env.PORT || 3000;
var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200, {'Content-type' : 'text/plain'});
	console.log('----',req.url);
	 if(req.url === "/test.txt"){
	 	fs.createReadStream(__dirname + "/test.txt").pipe(res);
	 }
	 else
	 {
	 	res.end('Hello World!!');
	 }
}).listen(PORT);

console.log('Server Running at port ' + PORT);