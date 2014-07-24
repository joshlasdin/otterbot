var _ = require('lodash'),
    otterbot = require('../bot'),
    Config = require('../Config'),
    LastFm = require('../services/LastFm');
    
exports.init = function () {
    var lastfm = new LastFm(Config.lastfm);
    
    /*
    lastfm.getSession(function (response) {
        console.log(response); 
    });
    */
    
    // When a new song is played...
    otterbot.on('djAdvance', function(data) {
        var song = data.media,
            time = new Date(data.mediaStartTime * 1000);
            
        otterbot.log(_.template('"<%= title %>" started playing. Waiting 30 seconds to scrobble it.', song));
            
        _.delay(function () {
            if (otterbot.getMedia() === song) {
                otterbot.log(_.template('"<%= title %>" still playing, scrobbling to last.fm.', song));
                lastfm.scrobble(song, time, function () {
                    otterbot.log(_.template('Successfully scrobbled "<%= title %>"', song));
                });
            }
        }, /*30000*/1);
    });
}