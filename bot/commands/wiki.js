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
                var intro = result.text["Intro"];
                if (intro && intro.length) {
                    for (var i=0; i < intro.length; i++) {
                        var line = intro[i].text;
                        // skip any lines that look like wikipedia formatting (i.e. not text)
                        if (line.indexOf("{{") !== 0 && line.indexOf("<") !== 0) {
                            otterbot.chatSingle('From Wikipedia: ' + line);
                            break;
                        }
                    }
                } else {
                    otterbot.chatSingle('Sorry, I couldn\'t find anything on "' + message + '".');
                }
            });
        }
    });
};
