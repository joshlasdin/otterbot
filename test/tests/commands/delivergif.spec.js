"use strict";

var _ = require('lodash'),
    sinon = require('sinon'),
    config = require('../../../bot/config'),
    bot = require('../../../bot/bot'),
    delivergif = require('../../../bot/commands/delivergif');

describe('[Commands] delivergif', function () {
    var speak, speakm;

    before(function () { delivergif.init(); });

    beforeEach(function () {
        speak = sinon.stub(bot, 'chatSingle');
        speakm = sinon.stub(bot, 'chatMultiple');
    });

    afterEach(function () {
        speak.restore();
        speakm.restore();
    });

    after(function () { bot.removeAllListeners(); });

    it('should deliver single responses', function () {
        var chat = { message: 'single', raw: { un: 'foo' } };
        bot.emit('chat', chat);
        expect(speak).to.have.been.calledOnce;
        expect(speak.args[0][0]).to.equal('single ok');
    });

    it('should deliver multiple responses', function () {
        var chat = { message: 'multiple', raw: { un: 'foo' } };
        bot.emit('chat', chat);
        expect(speakm).to.have.been.calledOnce;
        expect(speakm.args[0][0]).to.deep.equal(['multiple', 'ok']);
    });

    it('should deliver a random response', function () {
        var chat = { message: 'random', raw: { un: 'foo' } };
        bot.emit('chat', chat);
        expect(speak).to.have.been.calledOnce;
        expect(['random1 ok', 'random2 ok']).to.include(speak.args[0][0]);
    });

    it('should not respond to itself', function () {
        var chat = { message: 'single', raw: { un: config.get('/name') } };
        bot.emit('chat', chat);
        expect(speak).to.not.have.been.called;
        expect(speakm).to.not.have.been.called;
    });

    it('should not respond if no matches found', function () {
        var chat = { message: 'foo', raw: { un: 'foo' } };
        bot.emit('chat', chat);
        expect(speak).to.not.have.been.called;
        expect(speakm).to.not.have.been.called;
    });
});
