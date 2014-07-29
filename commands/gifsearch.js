var otterbot = require('../bot'),
    Helpers = require('../Helpers'),
    request = require('request'),
    _ = require('lodash');

exports.init = function () {
    otterbot.on('chat', function (chat) {
        var message = chat.message;

        if (Helpers.matchString('contains', '.gif ', message)) {
            var string = message.replace('.gif ', ''),
                query = encodeURIComponent(string),
                url = 'http://wifflegif.com/gifs/search.json?q=' + query;

            otterbot.log('Searching for gifs: ' + url);

            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var gifs = JSON.parse(body);

                    if (_.isEmpty(gifs)) {
                        otterbot.chatSingle(_.template('@<%= name %> Sorry, I couldn\'t find any gifs for "<%= query %>"', { name: chat.from, query: string }));
                    } else {
                        otterbot.chatSingle(gifs[_.random(gifs.length - 1)].url);
                    }
                } else {
                    otterbot.log('Couldn\'t get gifs:');
                    otterbot.log(body);
                }
            });
        }
    });
};