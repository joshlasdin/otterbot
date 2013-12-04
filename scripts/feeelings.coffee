# Description:
#   Fight those feels
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   feeeelings - Show the feelings gif
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^feee*?lings$/i, (msg) ->
    msg.send 'MUST. RESIST. FEELS.'
    msg.send 'http://i.imgur.com/SCelG.gif'