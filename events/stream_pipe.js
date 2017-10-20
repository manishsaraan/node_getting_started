var request = require('../node_modules/request');
var fs = require('fs');

//writign request output in a file
request("https://github.com").pipe(fs.createWriteStream('github.html'));
console.log('done!!!');