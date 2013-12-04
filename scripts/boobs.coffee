# Description:
#   Boobs... everybody loves them.
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   /boobs - Flash some ASCII bewbs
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^\/boobs$/i, (msg) ->
    msg.send '( . Y . )'