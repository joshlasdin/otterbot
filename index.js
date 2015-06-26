"use strict";

var app = require('express')(),
    port = +(process.env.PORT || 5000),
    otterbot = require('./bot/bot'),
    healthcheck;

healthcheck = function (req, res) {
    res.send('Hello World!');
};

// Set up webserver for pinging
/* istanbul ignore next */
app.get('/', healthcheck);

// Listen on port given by heroku
app.listen(port, function() { otterbot.log("Listening on " + port); });

// Connect to the room
otterbot.start();

module.exports = otterbot;
