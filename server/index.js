var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http)


const port = 3001


io.on('connection', function(socket){
    console.log('a user connected');
    
    io.emit('test', {test: 'hello!'})
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('testemit', (test)=>{
      console.log('test', test);
    })
})



http.listen(port, function(){
  console.log(`listening on *:${port}`);
});