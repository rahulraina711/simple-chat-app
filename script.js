const socket = io("http://localhost:3000");

const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

const yourName = prompt('what is your name');
appendMessage(`You joined the server`);
socket.emit('new-user', yourName);

socket.on('chat-message', data=>{
    appendMessage(`${data.name}: ${data.message}`);
})

socket.on('user-connected', username=>{
    appendMessage(`${username} joined the server`);
})

socket.on('user-disconnected', username=>{
    appendMessage(`${username} left the server`);
})

messageForm.addEventListener('submit', e=>{
    e.preventDefault();
    const message = messageInput.value;
    appendMessage(`You: ${message}`);
    socket.emit('send-chat-message', message);
    messageInput.value = '';
})

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}