/**
 * npm-pkgs-filter <https://github.com/tunnckoCore/npm-pkgs-filter>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var is = require('assertit').is;
var matcher = require('is-match');
var npmPkgs = require('npm-pkgs');
// var fnName = require('fn-name');
// var handle = require('handle-arguments');

/**
 * Filter packages of the given [npmjs.com](http://npm.im) user,
 * using glob pattern, function, array or regex
 *
 * **Example**
 * ```js
 * var npmPkgsFilter = require('npm-pkgs-filter');
 *
 * npmPkgsFilter('tunnckocore', 'jstransformer-*', function _cb(err, res) {
 *   if (err) {
 *     console.error(err);
 *     return;
 *   }
 *   console.log(res);
 * });
 * ```
 *
 * @name   npmPkgsFilter
 * @param  {String}   `<username>` non emptry string, npm username
 * @param  {String|Array|Function|RegExp}   `<patterns>` filter
 * @param  {Function} `<callback>` node-style callback `(err, res)`
 * @api public
 */
module.exports = function npmPkgsFilter(username, patterns, callback) {
  if (is.kindof.undefined(callback)) {
    callback = patterns;
  }
  if (arguments.length >= 3) {
    if (!is.kindof.function(callback)) {
      throw new TypeError('[npm-pkgs-filter] expect `callback` to be function')
    }

    npmPkgs(username, function __npmPkgsFilterCallback(err, res) {
      if (err) {
        callback(err);
        return;
      }
      var isMatch = matcher(patterns);
      res = res.filter(isMatch);

      callback(null, res);
    });
    return;
  }
  npmPkgs(username, callback);
};
