var _ = require('lodash'),
    Config = require('../Config'),
    otterbot = require('../bot');

// Welcome new users to the room
exports.init = function () {
    otterbot.on('userJoin', function (user) {
        var message;

        switch (user.username) {
            case 'Jobu':
                message = _.template('Fuck you, @<%= username %>!', user);
                break;

            case 'DrPowerhouseRowe':
                message = 'http://gifs.gifburger.com/57-muppets-from-space.gif';
                break;

            case 'FredJonathan':
                message = 'http://i.imgur.com/eb55q5D.png';
                break;

            case 'dklix':
                message = 'Well hello :eggplant::tongue:';
                break;

            default:
                message = _.template(Config.greeting, user);
        }


        otterbot.chatSingle(message);
    });
};
