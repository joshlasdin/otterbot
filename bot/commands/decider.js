var _ = require('lodash'),
    Helpers = require('../Helpers'),
    otterbot = require('../bot');

/* 
Randomly make a decision for a user. When a user asks a question in the form:
"should i X or Y or Z" this will randomly pick one of the options and tell the user to do it.
*/
exports.init = function () {
    otterbot.on('chat', function (chat) {
        var message = chat.message, options;

        if (Helpers.matchString('contains', 'should i ', message)) {
            otterbot.log('Making a decision: ' + message);

            // Remove the trailing question mark (if there is one)
            message = message.replace(/\?$/, '');

            // Split out the options, omitting the leading "Should I"
            options = message.toLowerCase().replace(/should i /g, '').split(' or ');

            if(options.length > 1) {
                // Pick one of the options at random
                otterbot.chatSingle(_.template('You should: <%= string %>', { string: options[_.random(options.length - 1)] }));
            } else if(options.length === 1) {
              var options = ["Yes you should", "No you should not"];
              otterbot.chatSingle(options[_.random(options.length - 1)])
            }
        }
    });
};
