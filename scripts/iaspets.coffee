# Description:
#   IAS Pets
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   /iaspets - Display an IAS pet
#
# Author:
#   joshlasdin

pets = [
  'http://i.imgur.com/wkyZ8LJ.jpg',
  'http://i.imgur.com/vevSgsb.jpg',
  'http://i.imgur.com/0DhTidK.jpg',
  'http://i.imgur.com/6O87hSh.jpg',
  'http://i.imgur.com/xErURQ3.jpg',
  'http://i.imgur.com/FofhP61.jpg',
  'http://i.imgur.com/qxYBlW4.jpg',
  'http://i.imgur.com/MV4ZHmO.jpg',
  'http://i.imgur.com/nksZSZN.jpg',
  'http://i.imgur.com/uPdAJgl.jpg',
  'http://i.imgur.com/UIPBXmR.jpg',
  'http://i.imgur.com/pqHWVkp.jpg',
  'http://i.imgur.com/1DkhNlF.jpg',
  'http://i.imgur.com/iOVtLgm.jpg',
  'http://i.imgur.com/3YzyJn1.jpg',
  'http://i.imgur.com/cKrUXmJ.jpg',
  'http://i.imgur.com/5xp5dSK.jpg',
  'http://i.imgur.com/kvo9hOz.jpg',
  'http://i.imgur.com/yph6ykG.png',
  'http://i.imgur.com/wrgHSRN.jpg',
  'http://i.imgur.com/7cE4r3h.jpg',
  'http://i.imgur.com/Y1E2ILA.jpg',
  'http://i.imgur.com/v6diAn9.jpg',
  'http://i.imgur.com/t30U7cg.gif',
  'http://i.imgur.com/HIg1vk3.jpg',
  'http://i.imgur.com/3e7avkl.jpg',
  'http://i.imgur.com/YBN5h2f.jpg',
  'http://i.imgur.com/STJVLve.jpg',
  'http://i.imgur.com/seiZWx3.jpg',
  'http://i.imgur.com/EJHG0Ji.jpg',
  'http://i.imgur.com/04NFbJQ.jpg',
  'http://i.imgur.com/iSKlAOP.jpg',
  'http://i.imgur.com/cPwmNg1.gif',
  'http://i.imgur.com/7uRtOSh.jpg',
  'http://i.imgur.com/uQsXvFj.jpg',
  'http://i.imgur.com/lpw3lpF.jpg',
  'http://i.imgur.com/E3rji1n.jpg',
  'http://i.imgur.com/OekwuTW.jpg',
  'http://i.imgur.com/WWgQ7C5.jpg',
  'http://i.imgur.com/EcDa2QZ.jpg',
  'http://i.imgur.com/DN4oV0x.jpg',
  'http://i.imgur.com/i6jnQh7.jpg',
  'http://i.imgur.com/b6qr4iI.jpg',
  'http://i.imgur.com/nb9mlIc.jpg',
  'http://i.imgur.com/3SMbjgC.jpg',
  'http://i.imgur.com/ERQzTI4.png',
  'http://i.imgur.com/5cFrfnH.jpg',
  'http://i.imgur.com/Br2oMup.jpg',
  'http://i.imgur.com/TvMwavi.jpg',
  'http://i.imgur.com/P3Pzr9V.jpg',
  'http://i.imgur.com/4U52ot5.jpg?1',
  'http://i.imgur.com/eZ048mN.jpg?1',
  'http://i.imgur.com/yGyI850.jpg?1',
  'http://i.imgur.com/qZtoRkF.jpg',
  'http://i.imgur.com/M5kF5XM.jpg',
  'http://i.imgur.com/UO1pS5L.jpg',
  'http://i.imgur.com/wMOrLXl.jpg',
  'http://i.imgur.com/grQSnDy.png',
  'http://i.imgur.com/rg9xrto.jpg',
  'http://i.imgur.com/wIphirl.jpg',
  'http://i.imgur.com/bITlHtQ.jpg',
  'http://i.imgur.com/CoRsmaX.png',
  'http://i.imgur.com/YrEnIOu.jpg',
  'http://i.imgur.com/DvXMIMF.jpg',
  'http://i.imgur.com/ABOi2Lk.jpg',
  'http://i.imgur.com/m1td01N.jpg',
  'http://i.imgur.com/mIrFYrQ.jpg',
  'http://i.imgur.com/4EuPE8r.jpg',
  'http://i.imgur.com/45ByvCJ.jpg',
  'http://i.imgur.com/uvs0LWi.jpg',
  'http://i.imgur.com/FzNLFAg.jpg',
  'http://i.imgur.com/G0BiEIu.jpg',
  'http://i.imgur.com/yC2Tbt8.jpg'
]

module.exports = (robot) ->

  robot.hear /^\/iaspets$/i, (msg) ->
    msg.send msg.random pets