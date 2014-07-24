require('newrelic');

var express = require('express'),
    otterbot = require('./bot');

// Set up webserver for pinging
var app = express();
app.get('/', function(req, res) {
    res.send('Hello World!');
});

// Listen on port given by heroku
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
    
// Connect to the room
otterbot.start();