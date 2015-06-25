var _ = require('lodash'),
    otterbot = require('../bot');
    
exports.init = function () {
    var lastfm = otterbot.services.lastfm;
    
    // When a new song is played...
    otterbot.on('advance', function(data) {
        var song = data.media,
            time = new Date(data.mediaStartTime * 1000);

        /* istanbul ignore else */
        if (song && lastfm) {
            otterbot.log(_.template('"<%= title %>" started playing. Waiting 30 seconds to scrobble it.', song));

            _.delay(function () {
                if (otterbot.getMedia() === song) {
                    otterbot.log(_.template('"<%= title %>" still playing, scrobbling to last.fm.', song));
                    lastfm.scrobble(song, time, function (err) {
                        if (err) {
                            otterbot.log(_.template('"<%= title %>" Failed to scrobble:', song), err);
                        } else {
                            otterbot.log(_.template('"<%= title %>" successfully scrobbled.', song));
                        }
                    });
                }
            }, 30000);
        }
    });
};
