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

            case 'KimmyG':
                message = 'http://31.media.tumblr.com/33565f3f6c35c3251bd7ce57148188d5/tumblr_mx7bm9GBGx1s5ro12o1_250.gif';
                break;

            case 'Sparklefrog':
                message = ':sparkles::frog:'
                break;

            default:
                message = _.template(Config.greeting, user);
        }


        otterbot.chatSingle(message);
    });
};
