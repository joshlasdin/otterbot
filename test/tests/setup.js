"use strict";

var _ = require('lodash'),
    util = require('util'),
    EventEmitter = require('events').EventEmitter,
    chai = require('chai'),
    requireSubvert = require('require-subvert')(__dirname),
    sinonChai = require('sinon-chai'),
    responseFixture = require('./fixtures/responses'),
    FakePlug = function () {};

chai.use(sinonChai);
global.expect = chai.expect;

// Attach event emitter to FakePlug
util.inherits(FakePlug, EventEmitter);

// Stub-in plugapi methods
_.extend(FakePlug.prototype, {
    connect: _.noop,
    sendChat: _.noop,
    getMedia: _.noop
});

// Stub out plugapi
requireSubvert.subvert('plugapi', FakePlug);

// Stub out Easypedia
requireSubvert.subvert('easypedia', function (term, cb) {
    if (term === 'noresults') {
        return cb({ text: {} });
    } else if(term === 'images') {
      return cb({text: {
            Intro: [
                { text: '{{multiple image' },
                { text: 'second line of first section' }
            ]
      }});
    } else {
      return cb({text: {
            Intro: [
                { text: 'first line of first section' },
                { text: 'second line of first section' }
            ],
            Second: [
                { text: 'first line of second section' },
                { text: 'second line of second section' }
            ]
      }});
    }
});

// Stub out gif responses
requireSubvert.subvert('../../bot/responses', responseFixture);

