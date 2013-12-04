# Description:
#   Goon Squad
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   goon squad - Show the goon squad gif
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^goon squad/i, (msg) ->
    msg.send 'http://i.imgur.com/VO8Vm.gif'