var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {  
	var currentDate = strftime('%F %H:%M');
	socket.end(currentDate + '\n');
});

server.listen(process.argv[2]);