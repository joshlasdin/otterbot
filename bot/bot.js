var _ = require('lodash'),
    fs = require('fs'),
    PlugAPI = require('plugapi'),
    config = require('./config'),
    LastFmService = require('./services/LastFm');

// Extend custom methods in
_.extend(PlugAPI.prototype, {
    log: function () {
        console.log.apply(console, arguments);
    },

    loadCommands: function () {
        var self = this;

        self.commands = self.commands || {};

        fs.readdirSync('./bot/commands').forEach(function (file) {
            var name = file.replace('.js', '');
            self.commands[name] = require('./commands/' + file);
            self.commands[name].init();
            self.log('Loaded command: ' + name);
        });

        self.log('Successfully loaded ' + _.keys(self.commands).length + ' commands.');
    },

    loadServices: function () {
        this.services = this.services || {};

        this.setService('lastfm', new LastFmService({
            username: process.env.lastfm_username,
            api_key: process.env.lastfm_api_key,
            secret: process.env.lastfm_secret,
            token: process.env.lastfm_token,
            session_key: process.env.session_key
        }));
    },

    chatSingle: function (message) {
        var self = this;

        console.log('chatting single', message);

        _.delay(function () {
            var chunks = message.match(/.{1,225}/g);
            _.each(chunks, self.sendChat);
        }, config.get('/chat_delay'));
    },

    chatMultiple: function (messages, data) {
        var self = this;

        _.each(messages, function (message, n) {
            _.delay(function () {
                self.chatSingle(_.template(message, data));
            }, 250 * n);
        });
    },

    setService: function (name, service) {
        this.services[name] = service;
    },

    getService: function (name) {
        return this.services[name];
    },

    connectToRoom: function () {
        this.connect(config.get('/room'));
    },

    start: function () {
        var self = this;

        // Load up the good stuff
        this.loadServices();
        this.loadCommands();

        // Connect to the room
        this.connectToRoom();

        // Attempt to reconnect on shutdown/error
        this.on('close', function () { self.connectToRoom(); });
        this.on('error', function () { self.connectToRoom(); });
    }
});

module.exports = new PlugAPI({
    email: process.env.auth_email,
    password: process.env.auth_password
});
