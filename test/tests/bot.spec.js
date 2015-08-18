"use strict";

var _ = require('lodash'),
    sinon = require('sinon'),
    config = require('../../bot/config'),
    LastFmService = require('../../bot/services/LastFm'),
    bot = require('../../bot/bot');

describe('bot', function () {
    after(function () { bot.removeAllListeners(); });

    describe('log', function () {
        var spy;

        beforeEach(function () { spy = sinon.spy(console, 'log'); });
        afterEach(function () { spy.restore(); });

        it('should log out params passed to the console', function () {
            bot.log('foo', 'bar');
            expect(spy).to.have.been.calledOnce;
            expect(spy).to.have.been.calledWithExactly('foo', 'bar');
        });
    });

    describe('start', function () {
        var services, commands, connect;

        before(function () {
            services = sinon.stub(bot, '_loadServices');
            commands = sinon.stub(bot, '_loadCommands');
            connect = sinon.stub(bot, 'connectToRoom');

            bot.start();
        });

        after(function () {
            services.restore();
            commands.restore();
            connect.restore();
        });

        it('should init & load the services', function () {
            expect(bot.services).to.be.an('object');
            expect(services).to.have.been.calledOnce;
        });

        it('should init & load the commands', function () {
            expect(bot.commands).to.be.an('object');
            expect(commands).to.have.been.calledOnce;
        });

        it('should connect to the room', function () {
            expect(connect).to.have.been.calledOnce;
        });

        it('should attempt to reconnect on error', function () {
            connect.reset();
            bot.emit('error');
            expect(connect).to.have.been.calledOnce;
        });

        it('should attempt to reconnect on close', function () {
            connect.reset();
            bot.emit('close');
            expect(connect).to.have.been.calledOnce;
        });
    });

    describe.skip('_loadServices', function () {
        var log;

        beforeEach(function () {
            log = sinon.stub(bot, 'log');
            sinon.stub(LastFmService.prototype, 'authenticate');
        });

        afterEach(function () {
            log.restore();
            LastFmService.prototype.authenticate.restore();
        });

        it('should load up all the services', function () {
            bot._loadServices();
            expect(_.isEmpty(bot.services)).to.be.false;
            expect(_.keys(bot.services)).to.include('lastfm');
        });
    });

    describe('_loadCommands', function () {
        var log;
        beforeEach(function () { log = sinon.stub(bot, 'log'); });
        afterEach(function () { log.restore(); });

        it('should load up all the commands in the /commands folder', function () {
            bot._loadCommands();
            expect(_.isEmpty(bot.commands)).to.be.false;
            expect(_.keys(bot.commands)).to.include('decider', 'definer', 'delivergif', 'gifsearch', 'imagesearch', 'joinroom', 'newsong', 'userjoin', 'wiki');
        });
    });

    describe('connectToRoom', function () {
        var connect;
        beforeEach(function () { connect = sinon.stub(bot, 'connect'); });
        afterEach(function () { connect.restore(); });

        it('should connect to the plug.dj room specified in config', function () {
            bot.connectToRoom();
            expect(connect).to.have.been.calledOnce;
            expect(connect).to.have.been.calledWithExactly(config.get('/room'));
        });
    });

    describe('chatSingle', function () {
        var delay, speak;

        beforeEach(function () {
            delay = sinon.stub(_, 'delay', function (fn) { return fn(); });
            speak = sinon.stub(bot, 'sendChat');
        });

        afterEach(function () {
            delay.restore();
            speak.restore();
        });

        it('should speak message passed', function () {
            var message = 'foobar';
            bot.chatSingle(message);
            expect(speak).to.have.been.calledOnce;
            expect(speak).to.have.been.calledWithExactly(message);
        });

        it('should split long messages up if they\'re too long', function () {
            var message = Array(501).join('a');
            bot.chatSingle(message);
            expect(speak).to.have.been.calledThrice;

            _.each(speak.args, function (callArgs) {
                expect(callArgs[0]).to.have.length.below(226);
            });
        });
    });

    describe('chatMultiple', function () {
        var delay, speak;

        beforeEach(function () {
            delay = sinon.stub(_, 'delay', function (fn) { return fn(); });
            speak = sinon.stub(bot, 'chatSingle');
        });

        afterEach(function () {
            delay.restore();
            speak.restore();
        });

        it('should speak each message', function () {
            bot.chatMultiple(['foo', 'bar']);
            expect(speak).to.have.been.calledTwice;
            expect(speak.args[0][0]).to.equal('foo');
            expect(speak.args[1][0]).to.equal('bar');
        });

        it('should handle templating', function () {
            bot.chatMultiple(['test <%= foo %>', 'test <%= bar %>'], { foo: 'one', bar: 'two' });
            expect(speak).to.have.been.calledTwice;
            expect(speak.args[0][0]).to.equal('test one');
            expect(speak.args[1][0]).to.equal('test two');
        });
    });
});
