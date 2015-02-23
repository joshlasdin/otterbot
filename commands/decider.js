var otterbot = require('../bot'),
    Helpers = require('../Helpers');

/* 
Randomly make a decision for a user. When a user asks a question in the form:
"should i X or Y or Z" this will randomly pick one of the options and tell the user to do it.
*/
exports.init = function () {
    otterbot.on('chat', function (chat) {
        var message = chat.message;

        if (Helpers.matchString('contains', 'should i ', message)) {
            var string = message.replace('should i ', '');
            var options = string.split(" or ");
            if(options.length > 1) {
                var chosen = options[Math.floor(Math.random() * options.length)];

                otterbot.log('Making a decision: ' + string);

                otterbot.chatSingle(_.template("You should '<%= string %>'", {'string': chosen}));
            }
        }
    });
};