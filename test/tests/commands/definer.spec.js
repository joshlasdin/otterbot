"use strict";

var _ = require('lodash'),
    sinon = require('sinon'),
    nock = require('nock'),
    bot = require('../../../bot/bot'),
    definer = require('../../../bot/commands/definer');

describe('[Commands] definer', function () {
    var speak, term, ud;

    before(function () {
        sinon.stub(bot, 'log');
        definer.init();
        term = 'foo';
        ud = nock('http://api.urbandictionary.com').get('/v0/define?term=' + term);
    });

    beforeEach(function () { speak = sinon.stub(bot, 'chatSingle'); });
    afterEach(function () { speak.restore(); });

    after(function () {
        bot.removeAllListeners();
        bot.log.restore();
    });

    it('should return the first result from urban dictionary', function (done) {
        ud.reply(200, {
            list: [
                { definition: 'some definition' },
                { definition: 'some other definition' }
            ]
        });

        bot.emit('chat', { message: '.ud ' + term });

        setTimeout(function () {
            expect(speak).to.have.been.calledOnce;
            expect(speak.args[0][0]).to.equal('DEFINITION: some definition');
            done();
        }, 25);
    });

    it('should say if there were no available definitions', function (done) {
        ud.reply(200, { list: [] });
        bot.emit('chat', { message: '.ud ' + term });

        setTimeout(function () {
            expect(speak).to.have.been.calledOnce;
            expect(speak.args[0][0]).to.contain('doesn\'t play that "' + term + '"');
            done();
        }, 25);
    });

    it('should log errors', function (done) {
        ud.reply(400, 'Something went wrong');
        bot.log.reset();
        bot.emit('chat', { message: '.ud ' + term });

        setTimeout(function () {
            expect(bot.log).to.have.been.calledTwice;
            expect(bot.log.args[1][0]).to.contain('Couldn\'t get a definition:');
            done();
        }, 25);
    });

    it('should only execute on messages containing ".ud "', function () {
        bot.emit('chat', { message: 'ud ' + term });
        expect(speak).to.not.have.been.called;
    });
});
