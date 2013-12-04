# Description:
#   When you sass the bot, it sass's back
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   fuck you @otterbot - Sass back
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /(?=.*\bfuck you\b)(?=.*\botterbot\b).+/i, (msg) ->
    msg.reply 'suck my :eggplant:!'