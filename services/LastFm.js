var _ = require('lodash'),
    request = require('request'),
    parseXML = require('xml2js').parseString,
    Helpers = require('../Helpers'),
    md5 = require('MD5');

var LastFm = function (config) {
    this.config = config;
};

_.extend(LastFm.prototype, {
    // Creates a signature key, used for signing api requests
    getSignature: function(obj) {
        var secret = this.config.secret,
            s = '';
        
        _.each(_.keys(obj), function(key){
            
            // Append the key
            s += key;
            
            // Append the UTF-8 encoded value
            s += Helpers.encodeUTF(obj[key]);
        });
        
        // Append the secret key
        s += secret;
        
        // Return the MD5 hash of the string
        return md5(s);
    },
    
    // Utility for getting user session token from last.fm api.
    // For more info see: http://www.last.fm/api/authentication
    getSession: function (callback) {
        var sig = this.getSignature({
            api_key: this.config.apikey,
            method: 'auth.getSession',
            token: this.config.token
        });
        
        var url = this.config.api + '?method=auth.getSession&api_key=' + this.config.apikey + '&token=' + this.config.token + '&api_sig=' + sig;
        
        request(url, function(error, response, body){
            if (error) {
                console.log('Last.fm returned an error:', error);
            } else if (response.statusCode !== 200) {
                console.log('Last.fm returned a bad status code: %d', response.statusCode);    
            } else if (_.isFunction(callback)) {
                callback(body);
            }
        });
    },
    
    // Scrobbles track to last.fm account
    scrobble: function (media, logtime, callback) {
        // Construct object required for signature
        var obj = {
            artist: media.author,
            api_key: this.config.apikey,
            method: 'track.updateNowPlaying',
            sk: this.config.session,
            track: media.title
        };
        
        // Create a signature
        var sig = this.getSignature(obj);
        
        // Post the song to Last.fm
        request.post({
            url: this.config.api,
            form: _.defaults({ api_sig: sig }, obj)
        }, function(error, response, body){
            if (error) {
                console.log('Last.fm returned an error:', error);
            } else if (response.statusCode != 200) {
                console.log('Last.fm returned a bad status code:', response.statusCode);
            } else if (_.isFunction(callback)){
                callback();
            }
        });
    }
});

module.exports = LastFm;