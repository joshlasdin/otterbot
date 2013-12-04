# Description:
#   Approve that.
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   /approve - Give the thumbs up of approval
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^\/approve|:thumbs_up:|:+1:$/i, (msg) ->
    msg.send 'http://i.imgur.com/aqZ3LEL.gif'