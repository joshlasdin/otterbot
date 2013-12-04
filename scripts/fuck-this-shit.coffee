# Description:
#   Fuck this.
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   fuck this shit - Show the fuck this shit gif
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^fuck this shit$/i, (msg) ->
    msg.send 'http://replygif.net/i/257.gif'