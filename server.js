const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const botName = 'SimpleChat Bot';

// Run when client connects
io.on('connection', (socket) => {
  console.log('New WS Connection...');

  socket.emit('message', formatMessage(botName, 'Welcome to SimpleChat'));

  // Broadcast when a user connects
  socket.broadcast.emit(
    'message',
    formatMessage(botName, 'A user has joined the chat')
  );

  // Runs when client disconnects
  socket.on('disconnect', () => {
    io.emit('message', formatMessage(botName, 'A user as left the chat'));
  });

  // Listen for chatMessage
  socket.on('chatMessage', (msg) => {
    io.emit('message', msg);
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
