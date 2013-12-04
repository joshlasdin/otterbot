# Description:
#   Raise the rock
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   :raised_hands: - Display a Jay-Z gif
#   hova - Display a Jay-Z gif
#
# Author:
#   joshlasdin

hovas = [
  'http://i.imgur.com/jAXABNI.gif',
  'http://pixel.nymag.com/imgs/daily/vulture/2013/06/16/swizz.o.jpg/a_560x375.jpg',
  'http://pixel.nymag.com/imgs/daily/vulture/2013/06/16/jay.o.jpg/a_560x375.jpg',
  'http://pixel.nymag.com/imgs/daily/vulture/2013/06/16/jay2.o.jpg/a_560x375.jpg',
  'http://pixel.nymag.com/imgs/daily/vulture/2013/06/16/rick.o.jpg/a_560x375.jpg',
  'http://i.imgur.com/quQY1Yv.gif'
]

module.exports = (robot) ->

  robot.hear /^\:raised_hands\:|hova$/i, (msg) ->
    msg.send msg.random hovas