console.log('############################');
var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({
	port: 1337
});

wss.on('connection', function(ws) {
	console.log('some dude connected');
	
	ws.on('message', function(message) {
		console.log(ws.port, ' Msg: ',message)
		wss.broadcast(message)
	});
});

wss.broadcast = function(data) {
	console.log(this.clients.length);
	for (var i in this.clients) {
		this.clients[i].send(data);
	}
};
