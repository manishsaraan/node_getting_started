var request = require('../node_modules/request');

var s = request('https://github.com');
s.on('data',function(chunk){
    console.log('data >>>>',chunk);
});

s.on('end',function(){
   console.log('>>>>>>>Done<<<<<<<<<<');
});