var fs = require('fs'),
    _ = require('lodash'),
    otterbot = require('./bot'),
    Helpers = require('./Helpers');
    
var commands = {};

exports.loadCommands = function () {
    fs.readdirSync('./commands').forEach(function (file) {
        var name = file.replace('.js', '');
        commands[name] = require('./commands/' + file);
        commands[name].init();
        otterbot.log('Loaded command: ' + name);
    });
    
    otterbot.log('Successfully loaded ' + _.keys(commands).length + ' commands.');
};