"use strict";

var _ = require('lodash'),
    sinon = require('sinon'),
    bot = require('../../../bot/bot'),
    newsong = require('../../../bot/commands/newsong');

describe('[Commands] newsong', function () {
    var FakeLastFm, scrobbleErr, scrobble, song1, song2;

    before(function () {
        FakeLastFm = {
            scrobble: function (song, cb) { return cb(scrobbleErr); }
        };

        song1 = {
            media: { title: 'foo' }
        };

        song2 = {
            media: { title: 'bar' }
        };

        bot.services = {
            lastfm: FakeLastFm
        };

        sinon.stub(bot, 'log');
        sinon.stub(bot, 'getMedia', function () { return song1.media; });
        sinon.stub(_, 'delay', function (fn) { setTimeout(fn, 25); });
        scrobble = sinon.spy(FakeLastFm, 'scrobble');
        newsong.init();
    });

    beforeEach(function () { FakeLastFm.scrobble.reset(); });
    afterEach(function () { bot.log.reset(); });

    after(function () {
        bot.removeAllListeners();
        bot.log.restore();
        bot.getMedia.restore();
        _.delay.restore();
    });

    it('should scrobble a song if it has been playing for a while', function (done) {
        bot.emit('advance', song1);

        setTimeout(function () {
            expect(FakeLastFm.scrobble).to.have.been.calledOnce;
            expect(FakeLastFm.scrobble.args[0][0]).to.deep.equal(song1.media);
            done();
        }, 25);
    });

    it('should log a successful scrobble', function (done) {
        bot.emit('advance', song1);

        setTimeout(function () {
            expect(bot.log).to.have.been.calledThrice;
            expect(bot.log.lastCall.args[0]).to.include('successfully scrobbled');
            done();
        }, 25);
    });

    it('should log a failed scrobble', function (done) {
        scrobbleErr = 'some error';
        bot.emit('advance', song1);

        setTimeout(function () {
            expect(bot.log).to.have.been.calledThrice;
            expect(bot.log.lastCall.args[0]).to.include('Failed to scrobble');
            done();
        }, 25);
    });

    it('should not scrobble if the song has changed', function (done) {
        bot.emit('advance', song2);

        setTimeout(function () {
            expect(FakeLastFm.scrobble).to.not.have.been.called;
            done();
        }, 25);
    });
});
