# Description:
#   be BAWSE
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   bawse - Display a rick ross gif
#
# Author:
#   joshlasdin

bawses = [
  'http://i.imgur.com/rnZj20s.gif',
  'http://i.imgur.com/z6CWx0h.gif',
  'http://i.imgur.com/sddIgJw.gif',
  'http://i.imgur.com/0rU5Xpm.gif',
  'http://i.imgur.com/VR59Mgv.gif',
  'http://i.imgur.com/0Vw5T7J.gif',
  'http://i.imgur.com/cettrIp.gif',
  'http://i.imgur.com/5iaJitu.gif',
  'http://i.imgur.com/UxWiKN3.gif',
  'http://i.imgur.com/eSvuEwc.gif'
]

module.exports = (robot) ->

  robot.hear /bawse/i, (msg) ->
    msg.send msg.random bawses