var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
	response.writeHead(200, { 'Content-Type': 'application/json' });

	var urlObj = url.parse(request.url, true);
	var dateTime = new Date(urlObj.query.iso);
	if(urlObj.pathname === '/api/parsetime') {
		response.write(JSON.stringify({ hour: dateTime.getHours(), minute: dateTime.getMinutes(), second: dateTime.getSeconds() }));
	} else if(urlObj.pathname === '/api/unixtime') {
		response.write(JSON.stringify({ unixtime: dateTime.getTime() }));
	}

	response.end();
});
server.listen(Number(process.argv[2]));