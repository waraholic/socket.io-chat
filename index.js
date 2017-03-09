var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use("/assets", express.static(__dirname + '/assets'));
app.use("/js", express.static(__dirname + '/js'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('location', function(msg){
    console.log(msg);
    io.emit('location', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
