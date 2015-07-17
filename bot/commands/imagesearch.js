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

            var fetchImage = function(images) {
                if(_.isEmpty(images)) {
                    otterbot.chatSingle(_.template("NAH on the '<%= search %>' pics", { search: message }));
                    return;
                }

                var image = Helpers.randomElement(images);
                _.pull(images, image);

                request(image["url"], function (err, res, body) {
                    if (!err && res.statusCode == 200 && _.contains(res.headers['content-type'], "image/")) {
                        otterbot.chatSingle(image["url"]);

                        if(clearit) {
                            otterbot.chatSingle("http://i.imgur.com/nv8ylec.png?clear_it_image");
                        }
                    } else {
                        fetchImage(images);
                    }
                });
            };

            request(url, function (err, res, body) {
                if (!err && res.statusCode == 200) {
                    fetchImage(JSON.parse(body)["responseData"]["results"]);
                } else {
                    otterbot.log('Couldn\'t get images:', body);
                }
            });
        }
    });
};
