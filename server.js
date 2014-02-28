var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({
	port: 1337
});

wws.on('connection', function(ws) {
	console.log('some dude connected');

	ws.on('message', function(message) {
		console.log(wss.port, ' Msg: ',message)
		wss.broadcast(message)
	});
});

wss.broadcast = function(data) {
	for (var i in this.clients) {
		this.clients[i].send(data);
	}
};