const io = require('socket.io')(3000, {
    cors: {
      origin: 'http://127.0.0.1:5500',
    }
  });

io.on('connection', socket=>{
    socket.on('send-chat-message', message =>{
        socket.broadcast.emit('chat-message', message);
    })
})