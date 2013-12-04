# Description:
#   Play some dubstep.
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   wubwubwub - Dance to dubstep
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /wubwubwub/i, (msg) ->
    msg.send 'http://i.imgur.com/ADWmU9P.gif'