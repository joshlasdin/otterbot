var Config = require('./Config'),
    otterbot = require('./bot'),
    commands = require('./commands');
    
// Connect to the room
otterbot.ias_connect();

// Load the commands
commands.loadCommands();

// Reconnect if issues
otterbot.on('close', function () { otterbot.ias_connect(); });
otterbot.on('error', function () { otterbot.ias_connect(); });