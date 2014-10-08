var _ = require('lodash'),
    fs = require('fs'),
    PlugAPI = require('plugapi'),
    Config = require('./Config'),
    LastFmService = require('./services/LastFm');
    
// Extend custom methods in
_.extend(PlugAPI.prototype, {
    log: function () {
        console.log.apply(console, arguments);
    },

    ias_connect: function () {
        this.connect(Config.room);
    },

    loadCommands: function () {
        var self = this;

        fs.readdirSync('./commands').forEach(function (file) {
            var name = file.replace('.js', '');
            self.commands[name] = require('./commands/' + file);
            self.commands[name].init();
            self.log('Loaded command: ' + name);
        });

        self.log('Successfully loaded ' + _.keys(self.commands).length + ' commands.');
    },

    loadServices: function () {
        this.setService('lastfm', new LastFmService(Config.lastfm));
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
    },

    _bindReconnect: function () {
        var self = this;
        self.on('close', function () { self.ias_connect(); });
        self.on('error', function () { self.ias_connect(); });
    },

    setService: function (name, service) {
        this.services[name] = service;
    },

    getService: function (name) {
        return this.services[name];
    },

    start: function () {
        this.commands = {};
        this.services = {};

        this.loadServices();
        this.loadCommands();
        this.ias_connect();

        this._bindReconnect();
    }
});

module.exports = new PlugAPI(Config.auth);
