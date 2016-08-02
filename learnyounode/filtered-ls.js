var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(error, files) {
	//console.log(files);
	var extension = '.' + process.argv[3];
	files.forEach(function(file){
		if (path.extname(file) === extension)
			console.log(file);
	});
});
