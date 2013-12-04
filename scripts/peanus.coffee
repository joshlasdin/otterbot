# Description:
#   Peanus
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   /peanus - RAZOR CLAM.
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^\/peanus$/i, (msg) ->
    msg.send 'http://i.imgur.com/GfKHw.gif'