"use strict";

var _ = require('lodash'),
    sinon = require('sinon'),
    lastfm = require('lastfmapi'),
    bot = require('../../../bot/bot'),
    Service = require('../../../bot/services/LastFm');

describe('[Services] LastFM', function () {
    var config = {
        api_key: 'test-key',
        secret: 'test-secret'
    };

    before(function () { sinon.stub(bot, 'log'); });
    after(function () { bot.log.restore(); });

    describe('init', function () {
        var auth;
        beforeEach(function () { auth = sinon.stub(Service.prototype, 'authenticate'); });
        afterEach(function () { auth.restore(); });

        it('should store a reference to the LastFM API', function () {
            var service = new Service(config);
            expect(service.api).to.not.be.undefined;
            expect(service.api).to.be.an.instanceOf(lastfm);
        });

        it('should authenticate the API user', function () {
            var service = new Service(config);
            expect(auth).to.have.been.calledOnce;
            expect(auth).to.have.been.calledWithExactly(config);
        });
    });

    describe('authenticate', function () {
        describe('when username & session_key are passed in config', function () {
            var service, spy;

            beforeEach(function () {
                spy = sinon.stub(lastfm.prototype, 'setSessionCredentials');
                service = new Service(config);
                spy.reset();
            });

            afterEach(function () { spy.restore(); });

            it('should set the session credentials', function () {
                service.authenticate({ username: 'test-username', session_key: 'test-sessionkey' });
                expect(spy).to.have.been.calledOnce;
                expect(spy).to.have.been.calledWithExactly('test-username', 'test-sessionkey');
            });
        });

        describe('when no username or session_key are passed in config', function () {
            var service, spy;

            beforeEach(function () {
                spy = sinon.stub(lastfm.prototype, 'authenticate', function (token, cb) { return cb(null, 'foo'); });
                service = new Service(config);
                bot.log.reset();
                spy.reset();
            });

            afterEach(function () { spy.restore(); });

            it('should authenticate the user', function () {
                service.authenticate({ token: 'test-token' });
                expect(spy).to.have.been.calledOnce;
                expect(spy).to.have.been.calledWith('test-token');
            });

            it('should log the session info', function () {
                service.authenticate({ token: 'test-token' });
                expect(bot.log).to.have.been.calledOnce;
                expect(bot.log.args[0][1]).to.equal('foo');
            });
        });
    });

    describe('scrobble', function () {
        var service, song, scrobble, scrobbleErr;

        beforeEach(function () {
            song = {
                author: 'foo',
                title: 'bar'
            };

            service = new Service(config);
            scrobble = sinon.stub(service.api.track, 'scrobble', function (data, cb) { return cb(scrobbleErr); });
        });

        afterEach(function () { scrobble.restore(); });

        it('should scrobble the provided track', function () {
            service.scrobble(song);
            expect(scrobble).to.have.been.calledOnce;
            expect(scrobble.args[0][0].artist).to.equal('foo');
            expect(scrobble.args[0][0].track).to.equal('bar');
        });

        it('should call the callback with any errors if one is provided', function () {
            var spy = sinon.spy();
            scrobbleErr = 'some error';

            service.scrobble(song, spy);
            expect(spy).to.have.been.calledOnce;
            expect(spy).to.have.been.calledWithExactly('some error');
        });
    });
});
