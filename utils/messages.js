const moment = require('moment');
const Message = require('../models/Message');

function formatMessage(username, text, time) {
  if (time) {
    return {
      username,
      text,
      time: moment(time).format('h:mm a'),
    };
  } else {
    return {
      username,
      text,
      time: moment().format('h:mm a'),
    };
  }
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
