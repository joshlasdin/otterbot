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
    msg.reply 'ALL OF THEM!'
    msg.reply 'http://i.imgur.com/JlRe066.jpg'