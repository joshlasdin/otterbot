"use strict";

var _ = require('lodash'),
    sinon = require('sinon'),
    nock = require('nock'),
    bot = require('../../../bot/bot'),
    imagesearch = require('../../../bot/commands/imagesearch');

describe('[Commands] imagesearch', function () {
    var speak, term, google, wiki, collider;

    before(function () {
        sinon.stub(bot, 'log');
        imagesearch.init();
        term = 'foo';
        google = nock('http://ajax.googleapis.com').get('/ajax/services/search/images?v=1.0&rsz=8&safe=active&q=' + term);
        wiki = nock('https://upload.wikimedia.org').defaultReplyHeaders({'Content-Type': 'image/jpg'}).get('/wikipedia/commons/3/32/Sir_Ben_Kingsley_by_David_Shankbone.jpg');
        collider = nock('http://cdn.collider.com').defaultReplyHeaders({'Content-Type': 'image/jpg'}).get('/wp-content/uploads/Ben-Kingsley-image-1.jpg');
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
