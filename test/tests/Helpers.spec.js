"use strict";

var Helpers = require('../../bot/Helpers');

describe('Helpers', function () {
    describe('matchString', function () {
        describe('exact', function () {
            it('should match if string is equal', function () {
                expect(Helpers.matchString('exact', 'foo', 'foo')).to.be.true;
                expect(Helpers.matchString('exact', 'foo', 'bar')).to.be.false;
            });

            it('should match arrays if is equal to any item', function () {
                expect(Helpers.matchString('exact', ['foo', 'foobar'], 'foo')).to.be.true;
                expect(Helpers.matchString('exact', ['foo', 'foobar'], 'bar')).to.be.false;
            });
        });

        describe('contains', function () {
            it('should match if string is equal', function () {
                expect(Helpers.matchString('contains', 'foo', 'foo')).to.be.true;
                expect(Helpers.matchString('contains', 'foo', 'bar')).to.be.false;
            });

            it('should match if string is included', function () {
                expect(Helpers.matchString('contains', 'foo', 'foobar')).to.be.true;
                expect(Helpers.matchString('contains', 'bar', 'foobar')).to.be.true;
                expect(Helpers.matchString('contains', 'baz', 'foobar')).to.be.false;
            });

            it('should match arrays if any item is equal', function () {
                expect(Helpers.matchString('contains', ['foo', 'bar'], 'foo')).to.be.true;
                expect(Helpers.matchString('contains', ['foo', 'bar'], 'bar')).to.be.true;
                expect(Helpers.matchString('contains', ['foo', 'bar'], 'baz')).to.be.false;
            });

            it('should match arrays if is included in any item', function () {
                expect(Helpers.matchString('contains', ['foo', 'bar'], 'foobar')).to.be.true;
                expect(Helpers.matchString('contains', ['foo', 'bar'], 'barbaz')).to.be.true;
                expect(Helpers.matchString('contains', ['foo', 'foobar'], 'baz')).to.be.false;
            });
        });

        describe('contains each', function () {
            it('should match only if string contains each item', function () {
                expect(Helpers.matchString('contains each', ['foo', 'bar'], 'foo')).to.be.false;
                expect(Helpers.matchString('contains each', ['foo', 'bar'], 'bar')).to.be.false;
                expect(Helpers.matchString('contains each', ['foo', 'bar'], 'foobar')).to.be.true;
                expect(Helpers.matchString('contains each', ['foo', 'bar'], 'foo the bar')).to.be.true;
            });
        });
    });
});
