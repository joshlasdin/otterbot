# Description:
#   Clears the chat window 
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   /clearit - Clear the chat window
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^\/clearit$/i, (msg) ->
    msg.send 'http://f.cl.ly/items/370X1E0g0o0Z1y2Y1D2t/Screen%20Shot%202013-12-03%20at%204.15.47%20PM.png' 
