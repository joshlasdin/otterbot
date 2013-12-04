# Description:
#   EDM Overload
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   unce unce unce - Display a unce gif
#
# Author:
#   joshlasdin

unces = [
  'http://i.imgur.com/Q5yNw84.gif',
  'http://i.imgur.com/OZS7ABl.gif',
  'http://f.cl.ly/items/0B2X112q053P0H1Y0N1H/Image%202013.07.26%205%3A26%3A13%20PM.gif',
  'http://i.imgur.com/wcN0t6B.gif',
  'http://i.imgur.com/P4NKdBR.gif',
  'http://i.imgur.com/NA5SsCD.gif',
  'http://i.imgur.com/601x8q6.gif',
  'http://i.imgur.com/OVrjH7E.gif',
  'http://i.imgur.com/owQ6Rmg.gif',
  'http://i.imgur.com/2Ms0E6r.gif',
  'http://i.imgur.com/yUDt9RK.gif',
  'http://i.imgur.com/axfZzbG.gif',
  'http://i.imgur.com/B0eqbtE.gif',
  'http://i.imgur.com/IsNRfKb.gif',
  'http://i.imgur.com/NJPEVaD.gif',
  'http://i.imgur.com/Yt8codc.gif',
  'http://i.imgur.com/7Nm3k5i.gif',
  'http://i.imgur.com/JuhCHul.gif',
  'http://i.imgur.com/nHGQkF4.gif',
  'http://i.imgur.com/hu0X5a0.gif',
  'http://i.imgur.com/9a2Urk6.gif',
  'http://i.imgur.com/bRNaR9z.gif',
  'http://i.imgur.com/GVWzJYf.gif',
  'http://i.imgur.com/zksoBNv.gif',
  'http://i.imgur.com/v3MWhSZ.gif',
  'http://i.imgur.com/U3zFu7b.gif',
  'http://i.imgur.com/4JqwYI5.gif',
  'http://i.imgur.com/C3iI0Cz.gif',
  'http://i.imgur.com/bLUEIcV.gif',
  'http://i.imgur.com/CnThHM0.gif',
  'http://i.imgur.com/4JqwYI5.gif',
  'http://i.imgur.com/rqbQsBL.gif',
  'http://i.imgur.com/XLTVzwa.gif',
  'http://i.imgur.com/cBZ49Fm.gif',
  'http://25.media.tumblr.com/5e3f2948a5116762beed4d1aca7868e8/tumblr_mgr692XStN1rdb2tlo1_500.gif'
]

module.exports = (robot) ->

  robot.hear /unce unce unce/i, (msg) ->
    msg.send msg.random unces