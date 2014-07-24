var _ = require('lodash'),
    otterbot = require('../bot'),
    Config = require('../Config');
    
exports.init = function () {
    var lastfm = otterbot.getService('lastfm');
    
    // When a new song is played...
    otterbot.on('djAdvance', function(data) {
        var song = data.media,
            time = new Date(data.mediaStartTime * 1000);
            
        otterbot.log(_.template('"<%= title %>" started playing. Waiting 30 seconds to scrobble it.', song));
            
        _.delay(function () {
            if (otterbot.getMedia() === song) {
                otterbot.log(_.template('"<%= title %>" still playing, scrobbling to last.fm.', song));
                lastfm.scrobble(song, time, function (err) {
                    if (err) {
                        otterbot.log('Last.fm returned an error:');
                        otterbot.log(err);
                    } else {
                        otterbot.log(_.template('Last.fm successfully scrobbled: <%= title %>', song));
                    }
                });
            }
        }, 30000);
    });
};