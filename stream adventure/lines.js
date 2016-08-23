var through = require('through2');
var split = require('split');
var stream = through(write);

var counter = 1;

function write (buffer, _, next) {
	
	if(counter % 2 === 0) {
		this.push(buffer.toString().toUpperCase() + '\n');
	} else {
		this.push(buffer.toString().toLowerCase() + '\n');
	}
    counter++;
    next();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);