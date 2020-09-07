const moment = require('moment');
const Message = require('../models/Message');

function formatMessage(username, text, time) {
  if (time) {
    var time = moment(time).format('h:mm a');
  } else {
    var time = moment().format('h:mm a');
  }

  return {
    username,
    text,
    time,
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
