# Description:
#   Aww yiss
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   aw yiss - Give that bird some fuckin' breadcrumbs
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^aw yiss/i, (msg) ->
    msg.send 'http://i.imgur.com/Y6qt76h.png'