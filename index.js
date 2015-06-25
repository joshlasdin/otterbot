"use strict";

var app = require('express')(),
    port = +(process.env.PORT || 5000),
    otterbot = require('./bot/bot'),
    healthcheck;

console.log('test 1');

healthcheck = function (req, res) {
    res.send('Hello World!');
};

console.log('test 2');

// Set up webserver for pinging
/* istanbul ignore next */
app.get('/', healthcheck);

console.log('test 3');

// Listen on port given by heroku
app.listen(port, function() { otterbot.log("Listening on " + port); });

console.log('test 4');

// Connect to the room
otterbot.start();

console.log('test 5');

module.exports = otterbot;
