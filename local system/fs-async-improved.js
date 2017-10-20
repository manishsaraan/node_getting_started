var fs = require('fs');

if(fs.existsSync('temp')){
	 console.log('directory exists..');
	 if(fs.existsSync('temp/new.txt')){
	 	fs.unlinkSync('temp/new.txt');
	 }
	 fs.rmdirSync('temp');
}

function readFileContent(err, stats){
	 	 				console.log('File has size ' + stats.size + " bytes,");
	 	 				fs.readFile('new.txt',function(err, data){
	 	 					console.log('File contents '+ data.toString());
	 	 				});
	 	 			};

function checkStats(err){
	 	 			fs.stat('new.txt',readFileContent);
	 	 		};

function renameFile(err){
	 	 		fs.rename('test.txt','new.txt',checkStats);
	 	 	};

function writeFile(exists){
	 	 if(exists){
	 	 	process.chdir('temp');
	 	 	fs.writeFile('test.txt','This is a demo file...',renameFile);
	 	 }
	 };

function checkDirectory(err){
	 fs.exists('temp',writeFile);
};

fs.mkdir('temp',checkDirectory);