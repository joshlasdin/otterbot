# Description:
#   heh heh heh lizards
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   heh heh heh - Display a laughing lizard
#
# Author:
#   joshlasdin

hehs = [
  'http://i.imgur.com/bOcMnEe.jpg',
  'http://i.imgur.com/OBuTbdq.jpg',
  'http://i.imgur.com/vXdeit3.jpg',
  'http://i.imgur.com/VDljBMs.jpg',
  'http://i.imgur.com/rT6GGeb.jpg',
  'http://i.imgur.com/HFn2EH4.jpg',
  'http://i.imgur.com/saPfAFO.jpg',
  'http://i.imgur.com/WwShRKL.png',
  'http://i.imgur.com/rZ9KzEG.gif'
]

module.exports = (robot) ->

  robot.hear /^heh heh heh$/i, (msg) ->
    msg.send msg.random hehs