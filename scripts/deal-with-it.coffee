# Description:
#   Deal with it
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   deal with it - Display a deal with it gif
#
# Author:
#   joshlasdin

deals = [
  'http://i.imgur.com/his4Zr9.gif',
  'http://f.cl.ly/items/473I3n0a3g2L1m0h3g03/zizz.gif',
  'http://i.imgur.com/KwngfZe.gif',
  'http://i.imgur.com/rInGqlm.gif',
  'http://i.imgur.com/6Py22gY.gif',
  'http://i.imgur.com/mq7IATA.gif',
  'http://i.imgur.com/5mQP9K8.gif',
  'http://cl.ly/image/3z3v3J2F0a0C/HEJsluK.gif',
  'http://i.imgur.com/5bfRfyd.gif',
  'http://i.imgur.com/oMwQRZ6.gif',
  'http://i.imgur.com/WbYErjv.gif',
  'http://i.imgur.com/ONtwt91.gif',
  'http://i.imgur.com/YMrvKn6.gif',
  'http://i.imgur.com/wrl86lO.gif',
  'http://www.gifti.me/i/BnDgSbW.gif'
]

module.exports = (robot) ->

  robot.hear /deal with it/i, (msg) ->
    msg.send msg.random deals