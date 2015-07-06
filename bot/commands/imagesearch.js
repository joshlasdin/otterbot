var _ = require('lodash'),
    request = require('request'),
    Helpers = require('../Helpers'),
    otterbot = require('../bot');

exports.init = function () {
    otterbot.on('chat', function (chat) {
        var message = chat.message,
            url = 'http://ajax.googleapis.com/ajax/services/search/images?v=1.0&rsz=8&safe=active&q=';

        if (Helpers.matchString('contains', '.pic ', message)) {
            message = message.replace('.pic ', '');
            url += encodeURIComponent(message);

            otterbot.log('Searching for an image: ' + message);

            request(url, function (err, res, body) {
                if (!err && res.statusCode == 200) {
                    var images = JSON.parse(body)["responseData"]["results"];
                    if(images && images[0]) {
                        otterbot.chatSingle(images[0]["url"]);
                    } else {
                        otterbot.chatSingle(_.template("NAH on the '<%= search %>' pics", { search: message }));
                    }
                } else {
                    otterbot.log('Couldn\'t get images:', body);
                }
            });
        }
    });
};
