var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var nbUser = 0;

http.listen(3000, function(){
    console.log('serv running on 3000');
})

app.get("/", function(req,res){
    res.sendFile(path.resolve(__dirname + '/../client/index.html'));
})


io.on('connection', function(socket){
    nbUser++;
    console.log('user ' + nbUser + ' connected');
    socket.on('disconnect', function(){
        console.log('user' + nbUser + ' disconnected');
    })

})

