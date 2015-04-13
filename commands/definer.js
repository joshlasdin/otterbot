var otterbot = require('../bot'),
    Helpers = require('../Helpers'),
    request = require('request'),
    _ = require('lodash');

exports.init = function () {
    otterbot.on('chat', function (chat) {
        var message = chat.message;

        if (Helpers.matchString('contains', '.ud ', message)) {
            var string = message.replace('.ud ', ''),
                query = encodeURIComponent(string),
                url = 'http://api.urbandictionary.com/v0/define?term=' + query;

            otterbot.log('Searching for urban dictionary for: ' + url);

            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var results = JSON.parse(body)["list"];

                    if (_.isEmpty(results)) {
                        otterbot.chatSingle(_.template("Urban Dictionary doesn't play that '<%= search %>' shit", {'search': string}));
                    } else {
                        var chunks = ("DEFINITION: " + de).replace(/(\r\n|\n|\r)/gm," ").match(/.{1,256}/g);
                        for(var i=0; i<chunks.length; i++) {
                            otterbot.chatSingle(chunks[i]);
                        }
                    }
                } else {
                    otterbot.log('Couldn\'t get a definition:');
                    otterbot.log(body);
                }
            });
        }
    });
};