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
                message = 'Welcome Fred! http://i.imgur.com/eb55q5D.png';
                break;

            case 'dklix':
                message = 'Well hello :eggplant::tongue:';
                break;

            case 'KimmyG':
                message = 'Welcome Kimmy! http://31.media.tumblr.com/33565f3f6c35c3251bd7ce57148188d5/tumblr_mx7bm9GBGx1s5ro12o1_250.gif';
                break;

            case 'Sparklefrog':
                message = 'Hello there :sparkles::frog:'
                break;

            case 'LCDizzle':
                message = 'LCDizzle in the hizzle http://25.media.tumblr.com/ebe9cc3901d029c661d5d8baf97923ca/tumblr_mikzhm6k2A1rjyl3wo1_400.gif'
                break;

            case 'jayteemo':
                message = 'Welcome J:shirt::m::o2:'
                break;

            case 'Atomies':
                message = 'Hola Atom-mami http://31.media.tumblr.com/a43479b0997b14076b8aa08adde3c8ee/tumblr_mw9tfkGfCl1t1udaco1_250.gif'
                break;

            case 'otterbot':
                message = 'otterbot in the heeeeeeezy'
                break;

            default:
                message = _.template(Config.greeting, user);
        }


        otterbot.chatSingle(message);
    });
};
