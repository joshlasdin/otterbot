var _ = require('lodash'),
    easypedia = require('easypedia'),
    Helpers = require('../Helpers'),
    otterbot = require('../bot');

exports.init = function () {
    otterbot.on('chat', function (chat) {
        var message = chat.message;

        if (Helpers.matchString('contains', '.wiki ', message)) {
            message = message.replace('.wiki ', '');

            otterbot.log('Searching for wikipedia entry: ' + message);

            easypedia(message, function (result) {
                var sections = _.keys(result.text);

                if (sections.length) {
                    otterbot.chatSingle('From Wikipedia: ' + result.text[sections[0]][0].text);
                } else {
                    otterbot.chatSingle('Sorry, I couldn\'t find anything on "' + message + '".');
                }
            });
        }
    });
};
