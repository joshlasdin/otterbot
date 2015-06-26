"use strict";

var _ = require('lodash'),
    sinon = require('sinon'),
    config = require('../../../bot/config'),
    bot = require('../../../bot/bot'),
    joinroom = require('../../../bot/commands/joinroom');

describe('[Commands] joinroom', function () {
    var speak;

    before(function () {
        sinon.stub(bot, 'log');
        joinroom.init();
    });

    beforeEach(function () { speak = sinon.stub(bot, 'chatMultiple'); });
    afterEach(function () { speak.restore(); });

    after(function () {
        bot.removeAllListeners();
        bot.log.restore();
    });

    it('should announce itself and indicate what version is running', function () {
        bot.emit('roomJoin');
        expect(speak).to.have.been.calledOnce;
        expect(speak.args[0][0][0]).to.equal(config.get('/join_message'));
        expect(speak.args[0][0][1]).to.equal('Otterbot version: ' + config.get('/version'));
    });
});
