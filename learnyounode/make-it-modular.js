var module = require('./firstModule.js');

module(process.argv[2], process.argv[3], function(error, filteredFiles) {
	if (error) 
		return console.error('Blah :( There was an error:', error);
	filteredFiles.forEach(function(filteredFile) {
		console.log(filteredFile);
	})
});