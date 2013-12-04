# Description:
#   Tell someone how great that story was *wanking motion*
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   /csb - Display a cool story bro gif
#   cool story, bro - Display a cool story bro gif
#   cool story bro - Display a cool story bro gif
#
# Author:
#   joshlasdin

bros = [
  'http://i.imgur.com/DPJzZ.gif',
  'http://i.imgur.com/XrxMc.gif',
  'http://i.imgur.com/7Sv8u.gif',
  'http://i.imgur.com/CWgMf.gif',
  'http://i.imgur.com/wYawI.gif',
  'http://i.imgur.com/DRyY5.gif',
  'http://i.imgur.com/BaIy5.gif',
  'http://i.imgur.com/FJroh.gif',
  'http://i.imgur.com/sdLEY.gif',
  'http://i.imgur.com/JkI5j.gif',
  'http://i.imgur.com/2BWva.gif',
  'http://i.imgur.com/YjCsY92.gif',
  'http://i.imgur.com/nmxfzLH.gif',
  'http://i.imgur.com/S25EO.gif',
  'http://i.imgur.com/zlwAn.gif',
  'http://i.imgur.com/Wi6jB.gif',
  'http://i.imgur.com/zN9vs.gif',
  'http://i.imgur.com/VMiF2.gif',
  'http://i.imgur.com/Agci8.gif',
  'http://i.imgur.com/fIYkZ.gif',
  'http://i.imgur.com/FcnpJ.gif',
  'http://i.imgur.com/MyGV2.gif',
  'http://i.imgur.com/eJOB0.gif',
  'http://i.imgur.com/BIx6i.gif',
  'http://i.imgur.com/QcG1r.gif',
  'http://i.imgur.com/gwVLi.gif',
  'http://i.imgur.com/UUkdL.gif',
  'http://i.imgur.com/PXWGw.gif',
  'http://i.imgur.com/IuJrm.gif',
  'http://i.imgur.com/EYR2q.gif',
  'http://i.imgur.com/CbRgA.gif',
  'http://i.imgur.com/ScUiG.gif',
  'http://i.imgur.com/reZvbB9.gif'
]

module.exports = (robot) ->

  robot.hear /\/csb|cool story, bro|cool story bro/i, (msg) ->
    msg.send msg.random bros