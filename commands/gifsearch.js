var otterbot = require('../bot'),
    Helpers = require('../Helpers'),
    request = require('request'),
    _ = require('lodash');

exports.init = function () {
    otterbot.on('chat', function (chat) {
        var message = chat.message;

        if (Helpers.matchString('contains', '.gif ', message)) {
            var query = encodeURIComponent(message.replace('.gif ', '')),
                url = 'http://wifflegif.com/gifs/search.json?q=' + query;

            otterbot.log('Searching for gifs: ' + url);

            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    if (_.isEmpty(gifs)) {
                        otterbot.chatSingle(_.template('@<%= name %> Sorry, I couldn\'t find any gifs for "<%= query %>"', { name: chat.from, query: query }));
                    } else {
                        otterbot.chatSingle(_.random(body).url);
                    }
                } else {
                    otterbot.log('Couldn\'t get gifs:');
                    otterbot.log(error, response);
                }
            });
        }
    });
};