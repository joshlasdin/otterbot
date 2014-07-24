var _ = require('lodash'),
    Config = require('../Config'),
    Helpers = require('../Helpers'),
    otterbot = require('../bot'),
    responses = require('../responses');

// Binds chat gif responses loaded from /resonses.js
exports.init = function () {
    _.each(responses, function (response) {
        otterbot.on('chat', function (chat) {
            if (chat.from !== Config.name && Helpers.matchString(response.match, response.trigger, chat.message)) {
                if (_.isArray(response.response)) {
                    if (response.pickRandom) {
                        otterbot.chatSingle(_.template(response.response[_.random(response.response.length - 1)], chat));
                    } else {
                        otterbot.chatMultiple(response.response, chat);
                    }
                } else {
                    otterbot.chatSingle(_.template(response.response, chat));
                }
            }
        });
    });
};