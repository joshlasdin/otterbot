# Description:
#   Thom Yorke
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   /thom - Show the thom gif
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^\/thom$/i, (msg) ->
    msg.send 'http://i.imgur.com/LThOTFQ.gif'