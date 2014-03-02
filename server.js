var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({
	port: 1337
});

wss.on('connection', function(ws) {
	ws.on('message', function(message) {
                console.log(message)
		wss.broadcast(message)
	});
});
wss.broadcast = function(data) {
	for (var i in this.clients) {
		this.clients[i].send(data);
	}
};
console.log('websocket server on port 1337');
