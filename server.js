//we use expressjs and socket.io
var app = require('express')()
var server = require('http').createServer(app);
var io  = require('socket.io').listen(server);

//define routes
app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});
app.get('/logo.png', function (req, res) {
	res.sendfile(__dirname + '/logo.png');
});

io.sockets.on('connection', function(socket){
    socket.on('orientationEvent', function(data) {
        //console.log(data)
        socket.broadcast.emit('update_orientationEvent', data);
    })
});

server.listen(3000);