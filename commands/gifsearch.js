var otterbot = require('../bot'),
    Helpers = require('../Helpers'),
    request = require('request');

exports.init = function () {
    otterbot.on('chat', function (chat) {
        var message = chat.message;

        if (Helpers.matchString('contains', '.gif ', message)) {
            var query = encodeURIComponent(message.replace('.gif ', ''));
            request('http://wifflegif.com/gifs/search.json?q=' + query, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    otterbot.log('Got some gifs:');
                    otterbot.log(body);
                } else {
                    otterbot.log('Couldn\'t get gifs:');
                    otterbot.log(error);
                }
            });
        }
    });
};