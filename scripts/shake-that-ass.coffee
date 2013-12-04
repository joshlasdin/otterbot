# Description:
#   Twerk it
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   shake that ass! - Display a twerk gif
#
# Author:
#   joshlasdin

twerks = [
  'http://i.imgur.com/imolNVB.gif',
  'http://gifs.gifbin.com/1237643210_booty-shakin2.gif',
  'http://i.imgur.com/VO8Vm.gif',
  'http://i.imgur.com/fZuSBq3.gif',
  'http://i.imgur.com/uPdFlto.gif',
  'http://i.imgur.com/aBrxj6P.gif',
  'http://i.imgur.com/bNa5VRw.gif',
  'http://i.imgur.com/v2YXqbk.gif',
  'http://i.imgur.com/DsMuhQs.gif',
  'http://i.imgur.com/lIAAWdH.gif',
  'http://i.imgur.com/fNkk5Zt.gif',
  'http://i.imgur.com/zOueVM5.gif',
  'http://i.imgur.com/vK2jVlo.gif',
  'http://i.imgur.com/n9IwvmO.gif',
  'http://i.imgur.com/1Y4B90G.gif'
]

module.exports = (robot) ->

  robot.hear /^shake that ass\!$/i, (msg) ->
    msg.reply 'Sorry, that command has been discontinued (NSFW).'
