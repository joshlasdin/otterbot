"use strict";

var _ = require('lodash'),
    sinon = require('sinon'),
    bot = require('../../../bot/bot'),
    wiki = require('../../../bot/commands/wiki');

describe('[Commands] wiki', function () {
    var speak, term;

    before(function () {
        sinon.stub(bot, 'log');
        wiki.init();
        term = 'foobar';
    });

    beforeEach(function () { speak = sinon.stub(bot, 'chatSingle'); });
    afterEach(function () { speak.restore(); });

    after(function () {
        bot.removeAllListeners();
        bot.log.restore();
    });

    it('should return the first line of the intro section of the wikipedia entry', function (done) {
        bot.emit('chat', { message: '.wiki ' + term });

        setTimeout(function () {
            expect(speak).to.have.been.calledOnce;
            expect(speak.args[0][0]).to.include('first line of first section');
            done();
        }, 25);
    });

    it('should skip any lines that dont look like text', function (done) {
        bot.emit('chat', { message: '.wiki images' });

        setTimeout(function () {
            expect(speak).to.have.been.calledOnce;
            expect(speak.args[0][0]).to.include('second line of first section');
            done();
        }, 25);
    });

    it('should say if there were no results', function (done) {
        bot.emit('chat', { message: '.wiki noresults' });

        setTimeout(function () {
            expect(speak).to.have.been.calledOnce;
            expect(speak.args[0][0]).to.include('couldn\'t find anything');
            done();
        }, 25);
    });
});
