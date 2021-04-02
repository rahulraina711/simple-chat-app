const io = require('socket.io')(3000, {
    cors: {
      origin: 'http://127.0.0.1:5500',
    }
  });

io.on('connection', socket=>{
    socket.emit('chat-message', "hello world")
    socket.on('send-chat-message', message=>{
        console.log(message);
    })
})