# Description:
#   Peanus
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   /peanus - RAZOR CLAM.
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^\/peanus$/i, (msg) ->
    msg.reply 'Sorry, that command has been discontinued (NSFW). Instead, have a :eggplant:!'
