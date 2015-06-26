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

// Need to stub out plugapi
requireSubvert.subvert('plugapi', FakePlug);

// Stub out gif responses
requireSubvert.subvert('../../bot/responses', responseFixture);

