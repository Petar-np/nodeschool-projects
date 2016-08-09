var http = require('http');
var bl = require('bl');
var strings = [];
var count = 0;

function printString(index) {
	http.get(process.argv[2 + index], function(response) {
		response.pipe(bl(function(error, data) {
			if (error) console.error('There was na error: ' + error.message);
			data = data.toString();
			strings[index] = data;
			count++;

			if (count === 3) {
				for (var i = 0; i < 3; i++) {
					console.log(strings[i]);
				}
			}
		}));
	});
}

for (var i = 0; i < 3; i++) {
	printString(i);
}