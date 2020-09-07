const moment = require('moment');
const Message = require('../models/Message');
const mongoose = require('mongoose');

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a'),
  };
}

const getMessagesFromDB = async (room) => {
  try {
    const Messages = await Message.find({ room: room });
    return Messages;
  } catch (err) {
    return console.error(err);
  }
};

module.exports = { formatMessage, getMessagesFromDB };
