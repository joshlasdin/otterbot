# Description:
#   Every mumford song ever.
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   mumford - Play every mumford song
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /mumford/i, (msg) ->
    msg.reply 'Hey look! It\'s every mumford song, ever:'
    msg.send 'http://i.imgur.com/QMFUJ68.gif'