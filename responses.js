var Config = require('./Config');

module.exports = [
    /*
        PARAMETER           FORMAT              DESCRIPTION
        trigger             string/array        text to match against for successful response
        response            string/array        text to respond with
        match               string              match rules, options are: 'exact', 'contains', and 'contains each'
        pickRandom          boolean             if true, will pick only one response from array
    */
    {
        trigger: 'dance!',
        response: [
            'http://i.imgur.com/VO8Vm.gif',
            'http://f.cl.ly/items/3u1Z462D2D3Z1a0G202l/Image%202013.04.12%204%3A37%3A56%20PM.gif',
            'http://f.cl.ly/items/3Y0o2o3Y2f202T0A1q20/Image%202013.04.12%204%3A40%3A48%20PM.gif',
            'http://f.cl.ly/items/051L25272K3H4103201L/Image%202013.04.12%204%3A42%3A44%20PM.gif',
            'http://f.cl.ly/items/18012B1J0Y2c0030090U/Image%202013.04.12%204%3A39%3A03%20PM.gif',
            'http://i.imgur.com/sFYkBLD.gif',
            'http://i.imgur.com/KA26QQP.gif',
            'http://i.imgur.com/qQVjAvt.gif',
            'http://i.imgur.com/MWdMbHy.gif',
            'http://i.imgur.com/WYhrBGn.gif',
            'http://i.imgur.com/Nw4A5zl.gif',
            'http://i.imgur.com/xkK29W6.gif',
            'http://i.imgur.com/lI5mesd.gif',
            'http://i.imgur.com/7yOResd.gif',
            'http://i.imgur.com/lI5mesd.gif',
            'http://i.imgur.com/57DCUIW.gif',
            'http://i.imgur.com/wC5kJIo.gif',
            'http://i.imgur.com/ThZ3ckJ.gif',
            'http://i.imgur.com/opr4n9x.gif',
            'http://i.imgur.com/9qs7cR7.gif',
            'http://i.imgur.com/mZjcm9K.gif',
            'http://i.imgur.com/3CiArDc.gif',
            'http://i.imgur.com/4bLqrJy.gif',
            'http://i.imgur.com/2kBhZz2.gif',
            'http://i.imgur.com/qmVpAdh.gif',
            'http://i.imgur.com/l4lWo7l.gif',
            'http://i.imgur.com/NHOUBP0.gif',
            'http://i.imgur.com/ng2CT.gif',
            'http://i.imgur.com/AGEb2.gif',
            'http://i.imgur.com/anslK.gif',
            'http://i.imgur.com/QVHid.gif',
            'http://i.imgur.com/E2MkT.gif',
            'http://i.imgur.com/NaMiw.gif',
            'http://i.imgur.com/RPZKD.gif',
            'http://i.imgur.com/ELP7G.gif',
            'http://i.imgur.com/AdAhA.gif',
            'http://i.imgur.com/HD4tg.gif',
            'http://i.imgur.com/wguX3.gif',
            'http://i.imgur.com/x5ZU4.gif',
            'http://i.imgur.com/VvqOo.gif',
            'http://i.imgur.com/7Bkc2.gif',
            'http://i.imgur.com/ETmsf.gif',
            'http://i.imgur.com/wY16A.gif',
            'http://i.imgur.com/IZU7v.gif',
            'http://i.imgur.com/SgWam.gif',
            'http://i.imgur.com/NuAaj.gif',
            'http://i.imgur.com/n9iSO.gif',
            'http://i.imgur.com/kNIVG.gif',
            'http://i.imgur.com/Lf72R.gif',
            'http://i.imgur.com/F5iFK.gif',
            'http://i.imgur.com/uq4LP.gif',
            'http://i.imgur.com/OTe4j.gif',
            'http://i.imgur.com/N8lzp.gif',
            'http://i.imgur.com/o0D0B.gif',
            'http://i.imgur.com/UKQTf.gif',
            'http://i.imgur.com/VPlDP.gif',
            'http://i.imgur.com/QcpgV.gif',
            'http://i.imgur.com/oqN1C.gif',
            'http://i.imgur.com/4r218.gif',
            'http://i.imgur.com/fc4l5.gif',
            'http://i.imgur.com/OWflW.gif',
            'http://i.imgur.com/mHG3L.gif',
            'http://i.imgur.com/8qZ9s.gif',
            'http://i.imgur.com/piuVj.gif',
            'http://i.imgur.com/ZZosK.gif',
            'http://i.imgur.com/bF7Nh.gif',
            'http://i.imgur.com/7e6Fy.gif',
            'http://i.imgur.com/4j28Y.gif',
            'http://i.imgur.com/hi4A3.gif',
            'http://i.imgur.com/orjYA.gif',
            'http://i.imgur.com/SOK8R.gif',
            'http://i.imgur.com/nVq6p.gif',
            'http://i.imgur.com/oQRt3.gif',
            'http://i.imgur.com/bHWrK.gif',
            'http://i.imgur.com/TAFpE.gif',
            'http://i.imgur.com/pXjrQ.gif',
            'http://i.imgur.com/XYBgt.gif',
            'http://i.imgur.com/vOMIJ.gif',
            'http://i.imgur.com/gQaFs.gif',
            'http://i.imgur.com/HfVdG.gif',
            'http://i.imgur.com/8EmIv.gif',
            'http://i.imgur.com/mCOVs.gif',
            'http://i.imgur.com/Bwfnv.gif',
            'http://i.imgur.com/7pe2k.gif',
            'http://i.imgur.com/Nasbc.gif',
            'http://i.imgur.com/RxX4h.gif',
            'http://i.imgur.com/tNbIq.gif',
            'http://i.imgur.com/Mt39r.gif',
            'http://i.imgur.com/6Kt7E.gif',
            'http://i.imgur.com/vnW1M.gif',
            'http://i.imgur.com/tbBfd.gif',
            'http://i.imgur.com/f08qPcY.gif',
            'http://f.cl.ly/items/160v2h1Z05000T1y1K0m/MACHINE-GUN-GIF.gif',
            'http://i.imgur.com/xOEZoY5.gif',
            'http://i.imgur.com/U64ftJ6.gif',
            'http://i.imgur.com/mR8KEcd.jpg',
            'http://i.imgur.com/nwclf5t.gif',
            '♪┏(・o･)┛♪┗ ( ･o･) ┓♪'
        ],
        match: 'exact',
        pickRandom: true
    },
    {
        trigger: 'shake that ass!',
        response: [
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
        ],
        match: 'exact',
        pickRandom: true
    },
    {
        trigger: 'goon squad!',
        response: 'http://i.imgur.com/VO8Vm.gif',
        match: 'exact'
    },
    {
        trigger: 'aw yiss',
        response: 'http://i.imgur.com/Y6qt76h.png',
        match: 'exact'
    },
    {
        trigger: 'fuck you @otterbot',
        response: 'suck my :eggplant:, @<%= from %>!',
        match: 'exact'
    },
    {
        trigger: 'bawse',
        response: [
            'http://i.imgur.com/rnZj20s.gif',
            'http://i.imgur.com/z6CWx0h.gif',
            'http://i.imgur.com/sddIgJw.gif',
            'http://i.imgur.com/0rU5Xpm.gif',
            'http://i.imgur.com/VR59Mgv.gif',
            'http://i.imgur.com/0Vw5T7J.gif',
            'http://i.imgur.com/cettrIp.gif',
            'http://i.imgur.com/5iaJitu.gif',
            'http://i.imgur.com/UxWiKN3.gif',
            'http://i.imgur.com/eSvuEwc.gif',
            'http://24.media.tumblr.com/tumblr_lxnlyl7kpu1qfvairo1_r1_500.gif'
        ],
        match: 'contains',
        pickRandom: true
    },
    {
        trigger: ['is', 'this','indie'],
        response: [
            'NO, IT\'S \"AND SUCH\" YOU FUCK FACE THUNDER CUNT'
    ],
        match: 'contains each',
        pickRandom: true 
    },
    {
        trigger: ['.csb', 'cool story, bro', 'cool story bro'],
        response: [
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
        ],
        match: 'exact',
        pickRandom: true
    },
    {
        trigger: 'clear eyes',
        response: [
            'http://f.cl.ly/items/2d1X0D1v0R333y3N1u2w/Image%202013.05.31%2011%3A36%3A25%20AM.png',
            'http://i.imgur.com/Lox3yFR.jpg',
            'http://f.cl.ly/items/1u3c2N2F2T3f2a0F1Z3z/Image%202013.05.31%2011%3A33%3A37%20AM.png',
            'http://i.imgur.com/mkIL814.jpg'
        ],
        match: 'exact',
        pickRandom: true
    },
    {
        trigger: ':raised_hands:',
        response: [
            'http://i.imgur.com/jAXABNI.gif',
            'http://pixel.nymag.com/imgs/daily/vulture/2013/06/16/swizz.o.jpg/a_560x375.jpg',
            'http://pixel.nymag.com/imgs/daily/vulture/2013/06/16/jay.o.jpg/a_560x375.jpg',
            'http://pixel.nymag.com/imgs/daily/vulture/2013/06/16/jay2.o.jpg/a_560x375.jpg',
            'http://pixel.nymag.com/imgs/daily/vulture/2013/06/16/rick.o.jpg/a_560x375.jpg',
            'http://i.imgur.com/quQY1Yv.gif'
        ],
        match: 'exact',
        pickRandom: true
    },
    {
        trigger: '=^_^=',
        response: [
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
        ],
        match: 'exact',
        pickRandom: true
    },
    {
        trigger: ['all the ', '!'],
        response: ['ALL OF THEM!', 'http://i.imgur.com/JlRe066.jpg'],
        match: 'contains each'
    },
    {
        trigger: 'otter!',
        response: 'http://i.imgur.com/NaMiw.gif',
        match: 'exact'
    },
    {
        trigger: '.thom',
        response: 'http://i.imgur.com/LThOTFQ.gif',
        match: 'exact'
    },
    {
        trigger: 'feeeelings',
        response: [
            'MUST. RESIST. FEELS.',
            'http://i.imgur.com/SCelG.gif'
        ],
        match: 'contains',
        pickRandom: false
    },
    {
        trigger: 'heh heh heh',
        response: [
            'http://i.imgur.com/bOcMnEe.jpg',
            'http://i.imgur.com/OBuTbdq.jpg',
            'http://i.imgur.com/vXdeit3.jpg',
            'http://i.imgur.com/VDljBMs.jpg',
            'http://i.imgur.com/rT6GGeb.jpg',
            'http://i.imgur.com/HFn2EH4.jpg',
            'http://i.imgur.com/saPfAFO.jpg',
            'http://i.imgur.com/WwShRKL.png',
            'http://i.imgur.com/rZ9KzEG.gif'
        ],
        match: 'exact',
        pickRandom: true
    },
    {
        trigger: 'mind = blown',
        response: 'http://i.imgur.com/UmpOi.gif',
        match: 'exact'
    },
    {
        trigger: 'fuck this shit',
        response: 'http://replygif.net/i/257.gif',
        match: 'exact'
    },
    {
        trigger: 'it\'s friday!',
        response: 'http://i.imgur.com/CdmFrAV.jpg',
        match: 'exact'
    },
    {
        trigger: 'mumford',
        response: [
            'Did someone say MUMFORD?',
            'http://i.imgur.com/QMFUJ68.gif'
        ],
        match: 'contains',
        pickRandom: false
    },
    {
        trigger: 'tyson',
        response: [
            'TYSON!',
            'http://i.imgur.com/ZHqOgxY.gif'
        ],
        match: 'contains',
        pickRandom: false
    },
    {
        trigger: 'florida',
        response: [
          'Florida? Fuck Florida.',
          'http://i.imgur.com/IkC3Jk1.gif'
        ],
        match: 'contains',
        pickRandom: false
    },
    {
        trigger: 'test',
        response: 'test successful',
        match: 'exact'
    },
    {
        trigger: ['waitlist on', '.addme', '+q', 'q+'],
        response: 'fuck you @<%= from %>',
        match: 'exact'
    },
    {
        trigger: ['rules', '.rules'],
        response: '@<%= from %>, ' + Config.rules,
        match: 'exact'
    },
    {
        trigger: '.whattoplay',
        response: Config.lastfm.url,
        match: 'exact'
    },
    {
        trigger: 'whoa!',
        response: 'http://imgur.com/x0OVxv0.gif',
        match: 'exact'
    },
    {
        trigger: '.boobs',
        response: '( . Y . )',
        match: 'exact'
    },
    {
        trigger: '@' + Config.name + ' who\'s your daddy?',
        response: '@' + Config.admin + ' is!',
        match: 'exact'
    },
    {
        trigger: '.iaspets',
        response: [
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
        ],
        pickRandom: true,
        match: 'exact'
    },
    {
        trigger: '.peanus',
        response: 'http://i.imgur.com/GfKHw.gif',
        match: 'exact'
    },
    {
        trigger: 'wubwubwub',
        response: 'http://i.imgur.com/ADWmU9P.gif',
        match: 'contains'
    },
    {
        trigger: 'unce unce unce',
        response: [
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
        ],
        match: 'contains',
        pickRandom: true
    },
    {
        trigger: 'sofluffy',
        response: 'http://i.imgur.com/gKEaU7V.gif',
        match: 'contains'
    },
    {
        trigger: '.approve',
        response: 'http://i.imgur.com/aqZ3LEL.gif',
        match: 'exact'
    },
    {
        trigger: '.nope',
        response: [
            'http://i.imgur.com/ypnxhIk.gif',
            'http://24.media.tumblr.com/50681a805561cd8fd0e0391a9de24467/tumblr_mfrreniB6Q1rlycfyo1_500.gif',
            'http://media.tumblr.com/ae722ac8401091a7f6255c8a915671dd/tumblr_inline_mf9l4nOXtc1qi2rev.gif',
            'http://25.media.tumblr.com/64f44df27392c86b279ff35e94ff38eb/tumblr_mwz8e5JJwP1smcbm7o1_500.gif'
        ],
        match: 'exact',
        pickRandom: true
    },
    {
        trigger: 'deal with it',
        response: [
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
        ],
        match: 'contains',
        pickRandom: true
    },
    {
        trigger: ':honey_pot:',
        response: [
            'http://i.imgur.com/Ah00ZpK.gif',
            'http://i.imgur.com/dQegg7O.gif',
            'http://i.imgur.com/S6Bur7G.gif',
            'http://i.imgur.com/qMncEXg.gif',
            'http://i.imgur.com/L6Bdjuo.gif',
            'http://i.imgur.com/awTe6Yr.gif',
            'http://i.imgur.com/NZLDR1O.gif'
        ],
        match: 'exact',
        pickRandom: true
    },
    {
        trigger: '.wat',
        response: 'http://i.imgur.com/iapTVEG.jpg',
        match: 'exact'
    },
    {
        trigger: '.powerthighs',
        response: 'http://i.imgur.com/a9wYOI3.gif',
        match: 'exact'
    },
    {
        trigger: '.glowstick',
        response: 'http://i.imgur.com/JalVb6h.gif',
        match: 'exact'
    },
    {
        trigger: '.happy',
        response: 'http://i.imgur.com/D40jjZ8.gif',
        match: 'exact'
    },
    {
        trigger: '.heart',
        response: 'http://i.imgur.com/B1iRCdl.gif',
        match: 'exact'
    },
    {
        trigger: '.laugh',
        response: 'http://i.imgur.com/3BfVSJe.gif',
        match: 'exact'
    },
    {
        trigger: '.peace',
        response: 'http://i.imgur.com/yw3nbR3.gif',
        match: 'exact'
    },
    {
        trigger: '.poo',
        response: 'http://i.imgur.com/gj1Eswg.gif',
        match: 'exact'
    },
    {
        trigger: '.rock',
        response: 'http://i.imgur.com/KL8BYNP.gif',
        match: 'exact'
    },
    {
        trigger: '.sad',
        response: 'http://i.imgur.com/SK0ETcd.gif',
        match: 'exact'
    },
    {
        trigger: '.smh',
        response: 'http://i.imgur.com/WZRvKCL.gif',
        match: 'exact'
    },
    {
        trigger: '.thumbsdown',
        response: 'http://i.imgur.com/3CwUDu8.gif',
        match: 'exact'
    },
    {
        trigger: '.thumbsup',
        response: 'http://i.imgur.com/Ms3Pdsz.gif',
        match: 'exact'
    },
    {
        trigger: '.wink',
        response: 'http://i.imgur.com/8vGbUYT.gif',
        match: 'exact'
    },
    {
        trigger: ['.seriousface', '.lod'],
        response: 'ಠ_ಠ',
        match: 'exact'
    },
    {
        trigger: '.tableflip',
        response: [
            '(╯°□°)╯︵ ┻━┻',
            '(ノಠ益ಠ)ノ彡┻━┻',
            'http://24.media.tumblr.com/tumblr_m81n03AUOZ1r3ovdbo1_500.gif',
            'http://media.tumblr.com/tumblr_markspyMCP1r5zzhq.gif',
            'http://24.media.tumblr.com/tumblr_ltjzb684BC1ql5yr7o1_400.gif',
            'http://media.tumblr.com/tumblr_m0uqpy4mSz1qjrxbg.gif',
            'http://media.tumblr.com/tumblr_mdphjpQaXa1rz0x9z.gif',
            'http://24.media.tumblr.com/08c51149e784b9e3efc617703f77ff67/tumblr_myugxvSY1N1rse905o1_400.gif',
            'http://24.media.tumblr.com/a5f62049fd656902548a0811e6f917ad/tumblr_mixg2dAWLl1qdlh1io1_400.gif',
            'http://media.tumblr.com/a59c99cda990a322c93b4ea13b1861da/tumblr_inline_mqhj1iqVts1qz4rgp.gif',
            'http://i.imgur.com/wYkU5Yn.gif',
        ],
        match: 'exact',
        pickRandom: true
    },
    {
        trigger: '.koala',
        response: 'ʕ •ᴥ•ʔ',
        match: 'exact'
    },
    {
        trigger: '.token',
        response: ':high_brightness:',
        match: 'exact'
    },
    {
        trigger: '.tokens',
        response: ':high_brightness::high_brightness::high_brightness::high_brightness::high_brightness:',
        match: 'exact'
    },
    {
        trigger: ':taffy:',
        response: 'http://gifs.gifburger.com/60-mayor-adam-west-chews-taffy.gif',
        match: 'contains'
    },
    {
        trigger: ['.clearit', '.clear'],
        response: 'http://i.imgur.com/nv8ylec.png?clear_it_image',
        match: 'exact'
    },
];