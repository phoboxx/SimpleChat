const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');

const socket = io();

// Message from server
socket.on('message', (message) => {
  console.log(message);
  outputMessage(message);

  // Scroll down to last message
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Message submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get message text
  const msg = e.target.elements.msg.value;

  // Emit message to server
  socket.emit('chatMessage', msg);

  // Clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});

// Output message to dom
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<div class="message">
    <p class="meta">Brad <span>9:12pm</span></p>
    <p class="text">
      ${message}
    </p>
  </div>`;

  document.querySelector('.chat-messages').appendChild(div);
}
