var _ = require('lodash'),
    request = require('request'),
    Helpers = require('../Helpers'),
    otterbot = require('../bot');

exports.init = function () {
    otterbot.on('chat', function (chat) {
        var message = chat.message,
            url = 'http://ajax.googleapis.com/ajax/services/search/images?v=1.0&rsz=8&safe=active&q=';

        if (Helpers.matchString('contains', ['.pic ', '.clearpic '], message)) {
            var clearit = Helpers.matchString('contains', '.clearpic ', message);

            message = message.replace('.pic ', '').replace('.clearpic ', '');
            url += encodeURIComponent(message);

            otterbot.log('Searching for an image: ' + message);

            request(url, function (err, res, body) {
                if (!err && res.statusCode == 200) {
                    var images = JSON.parse(body)["responseData"]["results"];

                    if (_.isEmpty(images)) {
                        otterbot.chatSingle(_.template("NAH on the '<%= search %>' pics", { search: message }));
                    } else {
                        otterbot.chatSingle(Helpers.randomElement(images)["url"]);

                        if(clearit) {
                            otterbot.chatSingle("http://i.imgur.com/nv8ylec.png?clear_it_image");
                        }
                    }
                } else {
                    otterbot.log('Couldn\'t get images:', body);
                }
            });
        }
    });
};
