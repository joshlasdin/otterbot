# Description:
#   Gif emoticons from Turntable.fm 
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   /glowstick - Glowstick tt.fm gif
#   /happy - Happy tt.fm gif
#   /heart - Heart tt.fm gif
#   /laugh - Laugh tt.fm gif
#   /peas - Peas tt.fm gif
#   /poo - Poo tt.fm gif
#   /rock - Rock tt.fm gif
#   /sad - Sad tt.fm gif
#   /smh - Smh tt.fm gif
#   /thumbsdown - Thumbsdown tt.fm gif
#   /thumbsup - Thumbsup tt.fm gif
#   /wink - Wink tt.fm gif 
#
# Author:
#   joshlasdin

module.exports = (robot) ->

  robot.hear /^\/glowstick$/i, (msg) ->
    msg.send 'http://i.imgur.com/JalVb6h.gif'

  robot.hear /^\/happy$/i, (msg) ->
    msg.send 'http://i.imgur.com/D40jjZ8.gif'

  robot.hear /^\/heart$/i, (msg) ->
    msg.send 'http://i.imgur.com/B1iRCdl.gif'

  robot.hear /^\/laugh$/i, (msg) ->
    msg.send 'http://i.imgur.com/3BfVSJe.gif'

  robot.hear /^\/peace$/i, (msg) ->
    msg.send 'http://i.imgur.com/yw3nbR3.gif'

  robot.hear /^\/poo$/i, (msg) ->
    msg.send 'http://i.imgur.com/gj1Eswg.gif'

  robot.hear /^\/rock$/i, (msg) ->
    msg.send 'http://i.imgur.com/KL8BYNP.gif'

  robot.hear /^\/sad$/i, (msg) ->
    msg.send 'http://i.imgur.com/SK0ETcd.gif'

  robot.hear /^\/smh$/i, (msg) ->
    msg.send 'http://i.imgur.com/WZRvKCL.gif'

  robot.hear /^\/thumbsdown$/i, (msg) ->
    msg.send 'http://i.imgur.com/3CwUDu8.gif'

  robot.hear /^\/thumbsup$/i, (msg) ->
    msg.send 'http://i.imgur.com/Ms3Pdsz.gif'

  robot.hear /^\/wink$/i, (msg) ->
    msg.send 'http://i.imgur.com/8vGbUYT.gif'
