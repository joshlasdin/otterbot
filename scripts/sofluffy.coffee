# Description:
#   Touch something fluffy
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   sofluffy - IT'S SOOOO FLUFFY
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /sofluffy/i, (msg) ->
    msg.send 'http://i.imgur.com/gKEaU7V.gif'