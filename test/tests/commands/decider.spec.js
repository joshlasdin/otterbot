"use strict";

var _ = require('lodash'),
    sinon = require('sinon'),
    bot = require('../../../bot/bot'),
    decider = require('../../../bot/commands/decider');

describe('[Commands] decider', function () {
    var speak;

    before(function () {
        sinon.stub(bot, 'log');
        decider.init();
    });

    beforeEach(function () { speak = sinon.stub(bot, 'chatSingle'); });
    afterEach(function () { speak.restore(); });

    after(function () {
        bot.removeAllListeners();
        bot.log.restore();
    });

    it('should make a decision for the user', function () {
        var chat = { message: 'Should I foo faz or should I bar baz buz' };
        bot.emit('chat', chat);
        expect(speak).to.have.been.calledOnce;
        expect(['You should: foo faz', 'You should: bar baz buz']).to.include(speak.args[0][0]);
    });

    it('should only execute when string contains "should I"', function () {
        var chat = { message: 'foo faz or bar baz buz' };
        bot.emit('chat', chat);
        expect(speak).to.not.have.been.called;
    });
});
