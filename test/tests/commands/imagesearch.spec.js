"use strict";

var _ = require('lodash'),
    sinon = require('sinon'),
    nock = require('nock'),
    bot = require('../../../bot/bot'),
    imagesearch = require('../../../bot/commands/imagesearch');

describe('[Commands] imagesearch', function () {
    var speak, term, google, googleGif, wiki, collider, tumblr;

    before(function () {
        sinon.stub(bot, 'log');
        imagesearch.init();
        term = 'foo';
        google = nock('http://ajax.googleapis.com').get('/ajax/services/search/images?v=1.0&rsz=8&safe=active&q=' + term);
        googleGif = nock('http://ajax.googleapis.com').get('/ajax/services/search/images?v=1.0&rsz=8&safe=active&q=' + term + '%20gif&imgtype=animated');

        wiki = nock('https://upload.wikimedia.org').defaultReplyHeaders({'Content-Type': 'image/jpg'}).get('/wikipedia/commons/3/32/Sir_Ben_Kingsley_by_David_Shankbone.jpg');
        collider = nock('http://cdn.collider.com').defaultReplyHeaders({'Content-Type': 'image/jpg'}).get('/wp-content/uploads/Ben-Kingsley-image-1.jpg');
        tumblr = nock('http://25.media.tumblr.com').defaultReplyHeaders({'Content-Type': 'image/gif'}).get('/9db030ca077497553cfc4d0227470f3b/tumblr_mg3ts2Mh181s2n0wlo1_r1_400.gif');
    });

    beforeEach(function () { speak = sinon.stub(bot, 'chatSingle'); });
    afterEach(function () { speak.restore(); });

    after(function () {
        bot.removeAllListeners();
        bot.log.restore();
    });

    it('should return one of the results from google image search', function (done) {
        var firstUrl = "https://upload.wikimedia.org/wikipedia/commons/3/32/Sir_Ben_Kingsley_by_David_Shankbone.jpg";
        var secondUrl = "http://cdn.collider.com/wp-content/uploads/Ben-Kingsley-image-1.jpg";
        google.reply(200, {
            "responseData": {
                "results": [
                    {"url": firstUrl},
                    {"url": secondUrl}
                ]}
        });

        wiki.reply(200);
        collider.reply(200);

        bot.emit('chat', { message: '.pic ' + term });

        setTimeout(function () {
            expect(speak).to.have.been.calledOnce;
            expect([firstUrl, secondUrl]).to.include(speak.args[0][0]);
            done();
        }, 25);
    });

    it('should return an image and then a clear image when .clearpic is used', function (done) {
        var url = "https://upload.wikimedia.org/wikipedia/commons/3/32/Sir_Ben_Kingsley_by_David_Shankbone.jpg";

        google.reply(200, {
            "responseData": {
                "results": [
                    {"url": url}
                ]}
        });

        wiki.reply(200);

        bot.emit('chat', { message: '.clearpic ' + term });

        setTimeout(function () {
            expect(speak).to.have.been.calledTwice;
            expect(speak.args[0][0]).to.equal(url);
            expect(speak.args[1][0]).to.include("clear_it_image");
            done();
        }, 25);
    });

    it('should say if there were no available images', function (done) {
        google.reply(200, {
            "responseData": {
                "results": []
            }
        });
        bot.emit('chat', { message: '.pic ' + term });

        setTimeout(function () {
            expect(speak).to.have.been.calledOnce;
            expect(speak.args[0][0]).to.equal('NAH on the \'' + term + '\' pics');
            done();
        }, 25);
    });

    it('should say there are no images when the only image isn\'t a valid url', function (done) {
        var firstUrl = "https://upload.wikimedia.org/wikipedia/commons/3/32/Sir_Ben_Kingsley_by_David_Shankbone.jpg";
        google.reply(200, {
            "responseData": {
                "results": [
                    {"url": firstUrl},
                ]}
        });

        wiki.reply(404);

        bot.emit('chat', { message: '.pic ' + term });

        setTimeout(function () {
            expect(speak).to.have.been.calledOnce;
            expect(speak.args[0][0]).to.equal('NAH on the \'' + term + '\' pics');
            done();
        }, 25);
    });

    it('should request an animted gif from google when "gif" is part of the query', function (done) {
        var url = "http://25.media.tumblr.com/9db030ca077497553cfc4d0227470f3b/tumblr_mg3ts2Mh181s2n0wlo1_r1_400.gif";

        googleGif.reply(200, {
            "responseData": {
                "results": [
                    {"url": url}
                ]}
        });

        tumblr.reply(200);

        bot.emit('chat', { message: '.pic ' + term + ' gif' });

        setTimeout(function () {
            expect(speak).to.have.been.calledOnce;
            expect(speak.args[0][0]).to.equal(url);
            done();
        }, 25);
    });


    it('should log errors', function (done) {
        google.reply(400, 'Something went wrong');
        bot.log.reset();
        bot.emit('chat', { message: '.pic ' + term });

        setTimeout(function () {
            expect(bot.log).to.have.been.calledTwice;
            expect(bot.log.args[1][0]).to.equal('Couldn\'t get images:');
            done();
        }, 25);
    });

    it('should only execute on messages containing ".pic "', function () {
        bot.emit('chat', { message: 'image ' + term });
        expect(speak).to.not.have.been.called;
    });
});
