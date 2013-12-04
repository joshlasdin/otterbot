# Description:
#   Clear those red eyes!
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   clear eyes - Display an image of Jobu's gross eye
#
# Author:
#   joshlasdin

eyes = [
  'http://f.cl.ly/items/2d1X0D1v0R333y3N1u2w/Image%202013.05.31%2011%3A36%3A25%20AM.png',
  'http://i.imgur.com/Lox3yFR.jpg',
  'http://f.cl.ly/items/1u3c2N2F2T3f2a0F1Z3z/Image%202013.05.31%2011%3A33%3A37%20AM.png',
  'http://i.imgur.com/mkIL814.jpg'
]

module.exports = (robot) ->

  robot.hear /^clear eyes$/i, (msg) ->
    msg.send msg.random eyes