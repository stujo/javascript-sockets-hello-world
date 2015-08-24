var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile('views/index.html', { root: __dirname } );
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });

  socket.on('chat message', function(msg){
    // To exclude this socket..
    // socket.broadcast.emit('chat message', msg);
    // To send to everyone
    io.emit('chat message', msg);
  });

});


http.listen(3000, function(){
  console.log('listening on *:3000');
});

