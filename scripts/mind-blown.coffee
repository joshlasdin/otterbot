# Description:
#   Mind blown.
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   mind = blown - Show the mind-blowing gif
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^mind \= blown$/i, (msg) ->
    msg.send 'http://i.imgur.com/UmpOi.gif'