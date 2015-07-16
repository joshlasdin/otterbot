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
        bot.emit('chat', { message: 'Should I foo faz or should I bar baz buz' });
        expect(speak).to.have.been.calledOnce;
        expect(['You should: foo faz', 'You should: bar baz buz']).to.include(speak.args[0][0]);
    });

    it('should work when there are multiple options', function () {
        bot.emit('chat', { message: 'Should I foo or bar or buzz or biz' });
        expect(speak).to.have.been.calledOnce;
        expect(['You should: foo', 'You should: bar', 'You should: buzz', 'You should: biz']).to.include(speak.args[0][0]);
    });

    it('should make a yes or no decision when there is just one option', function () {
        bot.emit('chat', { message: 'Should I punch fred?' });
        expect(speak).to.have.been.calledOnce;
        expect(['Yes you should', 'No you should not']).to.include(speak.args[0][0]);
    });

    it('should not execute on a random string', function () {
        bot.emit('chat', { message: 'foo faz or bar baz buz' });
        expect(speak).to.not.have.been.called;
    });

    it('should not execute when the word should is used', function () {
        bot.emit('chat', { message: 'Should fred eat?' });
        expect(speak).to.not.have.been.called;
    });

});
