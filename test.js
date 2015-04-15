/**
 * npm-pkgs-filter <https://github.com/tunnckoCore/npm-pkgs-filter>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var test = require('assertit');
var npmPkgsFilter = require('./index');

test('npm-pkgs-filter:', function() {
  test('should throw TypeError when `username` is not a string', function(done) {
    function fixture() {
      npmPkgsFilter({one: 'two'});
    }
    test.throws(fixture, /to be string, but object given/);

    try {
      fixture();
    } catch(e) {
      test.is.object(e);
      test.is.number(e.line);
      test.equal(e.actual, 'object');
      test.equal(e.expected, 'string');
      test.equal(e.problem, 'actual !== expected');
      test.equal(/to be string, but object given/.test(e.message), true);
      test.throws(fixture, TypeError);
      done();
    }
  });
  test('should throw TypeError when `callback` is not a function [npm-pkgs-filter]', function(done) {
    function fixture() {
      npmPkgsFilter('tunnckocore', 'jstransformer-*', {one: 'two'});
    }
    test.throws(fixture, /expect `callback` to be function/);
    test.throws(fixture, TypeError);
    done();
  });
  test('should throw Error when `username` is an empty string or array', function(done) {
    function fixture() {
      npmPkgsFilter('');
    }
    test.throws(fixture, /expect `username` to be non empty string/);
    test.throws(fixture, Error);
    done();
  });
  test('should throw TypeError when `callback` is not a function [npm-pkgs]', function(done) {
    function fixture() {
      npmPkgsFilter('tunnckocore', [1, 2, 3]);
    }
    test.throws(fixture, /to be function, but array given/);

    try {
      fixture();
    } catch(e) {
      test.is.object(e);
      test.is.number(e.line);
      test.equal(e.actual, 'array');
      test.equal(e.expected, 'function');
      test.equal(e.problem, 'actual !== expected');
      test.equal(/to be function, but array given/.test(e.message), true);
      test.throws(fixture, TypeError);
      done();
    }
  });
  test('should work properly when existing user given and callback', function(done) {
    npmPkgsFilter('tunnckocore', function _cb(err, res) {
      test.ifError(err);
      test.is.array(res);
      test.is.number(res.length);
      test.equal(res.length > 90, true);
      done();
    });
  });
  test('should work properly with filters when `patterns` given', function(done) {
    npmPkgsFilter('tunnckocore', 'jstransformer-*', function _cb(err, res) {
      test.ifError(err);
      test.is.array(res);
      test.is.number(res.length);
      test.equal(res.length > 20, true);
      done();
    });
  });
  test('should error when non existing user given', function(done) {
    npmPkgsFilter('fjk43hkjhhhhhhhhhhhhhhhkjgg3k4g234', function _cb(err, res) {
      test.is.error(err);
      test.is.number(err.code);
      test.is.undefined(res);
      test.equal(err instanceof Error, true);
      test.equal(err.code, 404);
      done();
    });
  });
  test('should error when non existing user and filter patterns given', function(done) {
    npmPkgsFilter('fjk43hkjhhhhhhhhhhhhhhhkjgg3k4g234', ['*js*', 'npm-*'], function _cb(err, res) {
      test.is.error(err);
      test.is.number(err.code);
      test.is.undefined(res);
      test.equal(err instanceof Error, true);
      test.equal(err.code, 404);
      done();
    });
  });
});
