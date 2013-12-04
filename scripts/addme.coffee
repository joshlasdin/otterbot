# Description:
#   This one is in here just for jayteemo.
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   waitlist on, .addme, +q, q+, /addme - Seriously jayteemo, this isn't turntable.
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^waitlist on|\.addme|\+q|q\+|\/addme$/i, (msg) ->
    msg.reply 'fuck you, seriously.'