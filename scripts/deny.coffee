# Description:
#   Deny that.
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   /nope - Give the thumbs down of disapproval
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^\/nope/i, (msg) ->
    msg.send 'http://i.imgur.com/ypnxhIk.gif'