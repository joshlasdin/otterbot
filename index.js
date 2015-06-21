"use strict";

var app = require('express')(),
    port = +(process.env.PORT || 5000),
    otterbot = require('./bot/bot');

// Set up webserver for pinging
app.get('/', function(req, res) { res.send('Hello World!'); });

// Listen on port given by heroku
app.listen(port, function() { console.log("Listening on " + port); });

// Connect to the room
otterbot.start();
