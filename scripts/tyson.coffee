# Description:
#   Mike Tyson has the best smile.
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   tyson - Tyson will agree.
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /tyson/i, (msg) ->
    msg.send 'http://i.imgur.com/ZHqOgxY.gif'