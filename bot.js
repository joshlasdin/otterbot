var _ = require('lodash'),
    PlugAPI = require('plugapi'),
    Config = require('./Config');
    
// Provide Auth
var otterbot = new PlugAPI(Config.auth);

// Extend custom methods in
_.extend(PlugAPI.prototype, {
    ias_connect: function () {
        this.connect(Config.room);
    },
    
    chatSingle: function (message) {
        var self = this;
        _.delay(function () {
            self.sendChat(message);
        }, Config.chatDelay)
    },
    
    chatMultiple: function (messages, data) {
        var self = this;
        
        _.each(messages, function (message, n) {
            _.delay(function () {
                self.chatSingle(_.template(message, data));
            }, 250 * n);
        });
    }
});

module.exports = otterbot;