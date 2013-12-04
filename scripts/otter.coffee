# Description:
#   Otter
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   otter! - Show the dancing otter gif
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^otter\!$/i, (msg) ->
    msg.send 'http://i.imgur.com/NaMiw.gif'