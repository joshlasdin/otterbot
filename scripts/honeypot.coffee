# Description:
#   Get that honeypot
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   :honey_pot: - Display a pooh gif
#
# Author:
#   joshlasdin

honeypots = [
  'http://i.imgur.com/Ah00ZpK.gif',
  'http://i.imgur.com/dQegg7O.gif',
  'http://i.imgur.com/S6Bur7G.gif',
  'http://i.imgur.com/qMncEXg.gif',
  'http://i.imgur.com/L6Bdjuo.gif',
  'http://i.imgur.com/awTe6Yr.gif',
  'http://i.imgur.com/NZLDR1O.gif'
]

module.exports = (robot) ->

  robot.hear /:honey\_pot:/i, (msg) ->
    msg.send msg.random honeypots