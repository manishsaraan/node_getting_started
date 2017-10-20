var fs = require('fs');

if(fs.existsSync('temp')){
	 console.log('directory exists..');
	 if(fs.existsSync('temp/new.txt')){
	 	fs.unlinkSync('temp/new.txt');
	 }
	 fs.rmdirSync('temp');
}

fs.mkdirSync('temp');
if(fs.existsSync('temp')){
	process.chdir('temp');
	fs.writeFileSync('text.txt','This is a demo text..');
	fs.renameSync('text.txt','new.txt');
	console.log('File has size '+fs.statSync('new.txt').size+' bytes');
	console.log('File contents ' + fs.readFileSync('new.txt').toString());
}