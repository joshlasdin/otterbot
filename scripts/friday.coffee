# Description:
#   A celebration of the best day.
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   it's friday - Show the it's friday image
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^it\'s friday\!$/i, (msg) ->
    msg.send 'http://i.imgur.com/CdmFrAV.jpg'