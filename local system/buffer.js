var b = new Buffer('Hello');

console.log("Buffer to string " + b.toString());

console.log("buffer data " + b);

console.log("buffer to base64 " + b.toString('base64'));

var v = new Buffer("World").toString("base64");

console.log(b.toString("utf-8",0,2));