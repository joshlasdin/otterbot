var _ = require('lodash'),
    config = require('../config'),
    otterbot = require('../bot');

// Have the bot announce it's presence to the room
exports.init = function () {
    otterbot.on('roomJoin', function (room) {
        otterbot.log(_.template('Connected to: <%= room %>!', { room: config.get('/room') }));
        otterbot.chatSingle(config.get('/join_message') + ' (v ' + config.get('/version') + ')');
    });
};
