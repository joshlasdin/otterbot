# Description:
#   Whoa!
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   whoa - Stump Keanu
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /whoa/i, (msg) ->
    msg.send 'http://imgur.com/x0OVxv0.gif'