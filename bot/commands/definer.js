var _ = require('lodash'),
    request = require('request'),
    Helpers = require('../Helpers'),
    otterbot = require('../bot');

exports.init = function () {
    otterbot.on('chat', function (chat) {
        var message = chat.message,
            url = 'http://api.urbandictionary.com/v0/define?term=',
            term;

        if (Helpers.matchString('contains', '.ud ', message)) {
            term = message.replace(/\.ud\ /g, '');
            url += encodeURIComponent(term);

            otterbot.log('Searching for urban dictionary for: ' + term);

            request(url, function (err, res, body) {
                if (!err && res.statusCode == 200) {
                    var results = JSON.parse(body).list;

                    if (_.isEmpty(results)) {
                        return otterbot.chatSingle(_.template('Urban Dictionary doesn\'t play that "<%= search %>" shit', { search: term }));
                    }

                    otterbot.chatSingle('DEFINITION: ' + results[0].definition.replace(/(\r\n|\n|\r)/gm,' ').replace(/\s+/g, ' '));
                } else {
                    otterbot.log('Couldn\'t get a definition:', body);
                }
            });
        }
    });
};
