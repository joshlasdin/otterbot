var _ = require('lodash'),
    otterbot = require('../bot');
    
exports.init = function () {
    var lastfm = otterbot.getService('lastfm');
    
    // When a new song is played...
    otterbot.on('djAdvance', function(data) {
        var song = data.media,
            time = new Date(data.mediaStartTime * 1000);

        if (song.title) {
            otterbot.log(_.template('"<%= title %>" started playing. Waiting 30 seconds to scrobble it.', song));

            _.delay(function () {
                if (otterbot.getMedia() === song) {
                    otterbot.log(_.template('"<%= title %>" still playing, scrobbling to last.fm.', song));
                    lastfm.scrobble(song, time, function (err) {
                        if (err) {
                            otterbot.log('"<%= title %>" Failed to scrobble error:');
                            otterbot.log(err);
                        } else {
                            otterbot.log(_.template('"<%= title %>" successfully scrobbled.', song));
                        }
                    });
                }
            }, 30000);
        }
    });
};