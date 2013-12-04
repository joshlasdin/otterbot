# Description:
#   The saddest Reece's you ever saw.
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   /powerthighs - Dance sadly naked in a Reece's costume
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^\/powerthighs$/i, (msg) ->
    msg.send 'http://i.imgur.com/a9wYOI3.gif'