var _ = require('lodash'),
    Config = require('../Config'),
    otterbot = require('../bot');

// Welcome new users to the room
exports.init = function () {
    otterbot.on('userJoin', function (user) {
        var message;
        
        switch (user.name) {
            case 'jobu':
                message = _.template('Fuck you, @<%= name %>!', user);
                break;
                
            case 'DrPowerhouseRowe':
                message = 'http://gifs.gifburger.com/57-muppets-from-space.gif';
                break;
                
            default:
                message = _.template(Config.greeting, user);
        }
        
        
        otterbot.chatSingle(message);
    });
};