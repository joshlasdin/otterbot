"use strict";

var _ = require('lodash'),
    sinon = require('sinon'),
    nock = require('nock'),
    bot = require('../../../bot/bot'),
    gifsearch = require('../../../bot/commands/gifsearch');

describe('[Commands] gifsearch', function () {
    var speak, term, wifflegif;

    before(function () {
        sinon.stub(bot, 'log');
        gifsearch.init();
        term = 'foo';
        wifflegif = nock('http://wifflegif.com').get('/gifs/search.json?q=' + term);
    });

    beforeEach(function () { speak = sinon.stub(bot, 'chatSingle'); });
    afterEach(function () { speak.restore(); });

    after(function () {
        bot.removeAllListeners();
        bot.log.restore();
    });

    it('should return a random result from wifflegif', function (done) {
        wifflegif.reply(200, [
            { url: 'foo' },
            { url: 'bar' }
        ]);

        bot.emit('chat', { message: '.gif ' + term });

        setTimeout(function () {
            expect(speak).to.have.been.calledOnce;
            expect(['foo', 'bar']).to.include(speak.args[0][0]);
            done();
        }, 25);
    });

    it('should say if there were no available gifs', function (done) {
        wifflegif.reply(200, []);
        bot.emit('chat', { message: '.gif ' + term });

        setTimeout(function () {
            expect(speak).to.have.been.calledOnce;
            expect(speak.args[0][0]).to.contain('NAH on the \'' + term + '\'');
            done();
        }, 25);
    });

    it('should log errors', function (done) {
        wifflegif.reply(400, 'Something went wrong');
        bot.log.reset();
        bot.emit('chat', { message: '.gif ' + term });

        setTimeout(function () {
            expect(bot.log).to.have.been.calledTwice;
            expect(bot.log.args[1][0]).to.contain('Couldn\'t get gifs:');
            done();
        }, 25);
    });

    it('should only execute on messages containing ".gif "', function () {
        bot.emit('chat', { message: 'gif ' + term });
        expect(speak).to.not.have.been.called;
    });
});
