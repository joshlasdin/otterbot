# Description:
#   Do all the things!
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   all the _! - Display the All the Things! img
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^all the \w*\!/i, (msg) ->
    msg.send 'ALL OF THEM!'
    msg.send 'http://i.imgur.com/JlRe066.jpg'