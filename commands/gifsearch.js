var otterbot = require('../bot'),
    Helpers = require('../Helpers'),
    request = require('request'),
    _ = require('lodash');

exports.init = function () {
    otterbot.on('chat', function (chat) {
        var message = chat.message;

        if (Helpers.matchString('contains', '.gif ', message)) {
            var query = encodeURIComponent(message.replace('.gif ', ''));
            request('http://wifflegif.com/gifs/search.json?q=' + query, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var gifs = JSON.parse(body);
                    if (_.isEmpty(gifs)) {
                        otterbot.chatSingle(_.template('@<%= name %> Sorry, I couldn\'t find any gifs for "<%= query %>"', { name: chat.from, query: query }));
                    } else {
                        otterbot.chatSingle(_.random(gifs).url);
                    }
                } else {
                    otterbot.log('Couldn\'t get gifs:');
                    otterbot.log(error);
                }
            });
        }
    });
};