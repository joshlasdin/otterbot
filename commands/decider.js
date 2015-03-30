var otterbot = require('../bot'),
    _ = require('lodash'),
    Helpers = require('../Helpers');

/* 
Randomly make a decision for a user. When a user asks a question in the form:
"should i X or Y or Z" this will randomly pick one of the options and tell the user to do it.
*/
exports.init = function () {
    otterbot.on('chat', function (chat) {
        var message = chat.message;

        if (Helpers.matchString('contains', 'should i ', message)) {
            var string = message;
            // remove the trailing question mark (if there is one)
            if(string.slice(-1) === "?") { string = string.slice(0, -1) }
            var options = string.split(" or ");
            if(options.length > 1) {
                // get rid of the "should i" in the first option
                options[0] = options[0].split(" ").slice(2).join(" ")

                var chosen = options[Math.floor(Math.random() * options.length)];

                otterbot.log('Making a decision: ' + string);

                otterbot.chatSingle(_.template("You should '<%= string %>'", {'string': chosen}));
            }
        }
    });
};
