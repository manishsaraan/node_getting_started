var request = require('../node_modules/request');
var fs = require('fs');
var zlib = require('zlib');

//writign request output in a file
request("https://github.com").pipe(zlib.createGzip()).pipe(fs.createWriteStream('github.html.gz'));
console.log('done!!!');