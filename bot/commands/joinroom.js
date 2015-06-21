var _ = require('lodash'),
    Config = require('../Config'),
    otterbot = require('../bot');

// Have the bot announce it's presence to the room
exports.init = function () {
    otterbot.on('roomJoin', function (room) {
        otterbot.log(_.template('Connected to: <%= room %>!', { room: Config.room }));
        otterbot.chatSingle(Config.joinMessage);
    });
};