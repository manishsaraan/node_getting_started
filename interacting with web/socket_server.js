http = require('http');
var socketio = require("socket.io");
var fs = require("fs");

var handler = function(req, res){
       fs.readFile(__dirname + '/index.html',function(err, data){
       	  if(err){
       	  	 res.writeHead(500);
       	  	 return res.end("Error Loading index.html");
       	  }
       	  else
       	  {
       	  	res.writeHead(200);
       	  	res.end(data);
       	  }
       });
};

var app = http.createServer(handler);
var io = socketio.listen(app);

io.sockets.on('connection',function(socket){
   setInterval(function(){
   	  var timestamp = Date.now();
   	  console.log("Emitted " + timestamp);
   	  socket.emit('timer',timestamp);
   },2000);

   socket.on('submit',function(data){
   	 console.log("submitted : " + data);
   });
});

app.listen(8080);

console.log("server is running at port : 8080")
