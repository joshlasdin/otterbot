"use strict";

var Confidence = require('confidence');

module.exports = new Confidence.Store({
    name: 'otterbot',
    room: 'indie-and-such',
    join_message: 'http://i.imgur.com/NaMiw.gif',
    greeting: ':wave: Fancy seeing you here @<%= username %>!',
    rules: 'There is only one rule of IAS: NO HOLDS BARRED.',
    what_to_play: 'http://www.last.fm/user/IndieAndSuch',
    chat_delay: 1000,
    admin: 'jersh'
});
