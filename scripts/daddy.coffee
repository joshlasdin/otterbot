# Description:
#   Who's your daddy?
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   who's your daddy? - Just what you'd expect.
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.respond /who\'s your daddy\?/i, (msg) ->
    msg.reply 'Jersh is! ^-^'