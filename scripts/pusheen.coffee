# Description:
#   Pusheen gifs
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   =^_^= - Display a pusheen gif
#
# Author:
#   joshlasdin

pusheens = [
  'http://i.imgur.com/0gbGTaZ.gif',
  'http://i.imgur.com/tSvGhXo.gif',
  'http://i.imgur.com/utJ0hyq.gif',
  'http://i.imgur.com/pwbYFEt.gif',
  'http://i.imgur.com/zTogy1R.gif',
  'http://i.imgur.com/4tSgu49.gif',
  'http://i.imgur.com/zmH6z4J.gif',
  'http://i.imgur.com/dmFp7LS.jpg',
  'http://i.imgur.com/lKWPDkc.gif',
  'http://i.imgur.com/DqjNcCg.gif',
  'http://i.imgur.com/3laNnaW.gif',
  'http://i.imgur.com/qCuKqUk.gif',
  'http://i.imgur.com/4QKNKIb.gif',
  'http://i.imgur.com/G05zsVX.gif',
  'http://i.imgur.com/CJVuSIF.gif',
  'http://i.imgur.com/p0OTNFl.gif',
  'http://i.imgur.com/5qJ3N2C.gif',
  'http://i.imgur.com/9NnFDPS.gif',
  'http://i.imgur.com/74HBtzh.gif',
  'http://i.imgur.com/NZnta7E.gif'
]

module.exports = (robot) ->

  robot.hear /^\=\^_\^\=$/i, (msg) ->
    msg.send msg.random pusheens