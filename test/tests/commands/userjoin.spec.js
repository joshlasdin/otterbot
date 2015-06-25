"use strict";

var _ = require('lodash'),
    sinon = require('sinon'),
    bot = require('../../../bot/bot'),
    config = require('../../../bot/config'),
    userjoin = require('../../../bot/commands/userjoin');

describe('[Commands] userjoin', function () {
    var speak;

    before(function () { userjoin.init(); });
    beforeEach(function () { speak = sinon.stub(bot, 'chatSingle'); });
    afterEach(function () { speak.restore(); });
    after(function () { bot.removeAllListeners(); });

    it('should greet the user', function () {
        bot.emit('userJoin', { username: 'foobar' });
        expect(speak).to.have.been.calledOnce;
        expect(speak.args[0][0]).to.equal(_.template(config.get('/greeting'), { username: 'foobar' }));
    });
});
