var http = require('http');

http.get(process.argv[2], function(response) {
	response.setEncoding('utf8');
	response.on('data', function(chunk) {
		console.log(chunk);
	});
	response.on('error', function(error) {
		console.error('There was na error:' + error.message);
	});
})
