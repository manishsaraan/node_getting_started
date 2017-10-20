process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data',function(chunk){
	process.stdout.write("Data >>>>"+chunk);
});

process.stdin.on('end',function(){
	process.stderr.write("End!!!");
});

process.on('SIGTERM',function(){
	process.stderr.write('are you sure, you want to terminate?');
});

console.log('Node is running at process id #'+process.pid);