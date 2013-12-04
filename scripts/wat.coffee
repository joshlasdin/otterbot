# Description:
#   WAT?!
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   /wat - Become confused
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^\/wat$/i, (msg) ->
    msg.send 'http://i.imgur.com/iapTVEG.jpg'