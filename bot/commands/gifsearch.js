var _ = require('lodash'),
    request = require('request'),
    Helpers = require('../Helpers'),
    otterbot = require('../bot');

exports.init = function () {
    otterbot.on('chat', function (chat) {
        var message = chat.message,
            url = 'http://wifflegif.com/gifs/search.json?q=';

        if (Helpers.matchString('contains', '.gif ', message)) {
            message = message.replace('.gif ', '');
            url += encodeURIComponent(message);

            otterbot.log('Searching for gifs: ' + message);

            request(url, function (err, res, body) {
                if (!err && res.statusCode == 200) {
                    var gifs = JSON.parse(body);

                    if (_.isEmpty(gifs)) {
                        otterbot.chatSingle(_.template("NAH on the '<%= search %>' gifs", { search: message }));
                    } else {
                        otterbot.chatSingle(gifs[_.random(gifs.length - 1)].url);
                    }
                } else {
                    otterbot.log('Couldn\'t get gifs:', body);
                }
            });
        }
    });
};
