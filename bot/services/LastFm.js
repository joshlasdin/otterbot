var _ = require('lodash'),
    LastfmAPI = require('lastfmapi');

var LastFmService = function (config) {
    this.api = new LastfmAPI({
        api_key: config.api_key,
        secret: config.secret
    });

    this.authenticate(config);
};

_.extend(LastFmService.prototype, {
    authenticate: function (config) {
        if (config.username && config.session_key) {
            this.api.setSessionCredentials(config.username, config.session_key);
        } else {
            this.api.authenticate(config.token, function (err, session) {
                // Have to require this here to avoid circular dependency
                // issue. The bot has not yet been initialized when the file
                // is first entered.
                var otterbot = require('../bot');
                otterbot.log('Fetched Last.fm session', session);
            });
        }
    },

    scrobble: function (media, cb) {
        this.api.track.scrobble({
            'artist': media.author,
            'track': media.title,
            'timestamp' : Math.floor((new Date()).getTime() / 1000) - 300
        }, function (err, scrobbles) {
            /* istanbul ignore else */
            if (_.isFunction(cb)) { cb(err); }
        });
    }
});

module.exports = LastFmService;
