# Description:
#   Send Florida where it belongs.
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   florida - Send Florida floading into the Atlantic
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /florida/i, (msg) ->
    msg.reply 'Florida? Fuck Florida.'
    msg.send 'http://i.imgur.com/IkC3Jk1.gif'