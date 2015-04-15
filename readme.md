## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Filter the list of user's npm packages from the npmjs.com website profile, using glob pattern, function, array or regex. You can use it as replacement for `npm-pkgs`.

## Install
```
npm i --save npm-pkgs-filter
npm test
npm-pkgs --help
```


## API
> For more use-cases see the [tests](./test.js)

### [npmPkgsFilter](./index.js#L37)
> Filter packages of the given [npmjs.com](http://npm.im) user, using glob pattern, function, array or regex

- `<username>` **{String}**  non emptry string, npm username
- `[patterns]` **{String|Array|Function|RegExp}**  filter
- `<callback>` **{Function}** node-style callback `(err, res)`

**Example**
```js
var npmPkgsFilter = require('npm-pkgs-filter');

npmPkgsFilter('tunnckocore', 'jstransformer-*', function _cb(err, res) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(res);
});
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/npm-pkgs
[npmjs-img]: https://img.shields.io/npm/v/npm-pkgs-filter.svg?style=flat&label=npm-pkgs-filter

[coveralls-url]: https://coveralls.io/r/tunnckoCore/npm-pkgs-filter?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/npm-pkgs-filter.svg?style=flat

[license-url]: https://github.com/tunnckoCore/npm-pkgs-filter/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/npm-pkgs-filter
[travis-img]: https://img.shields.io/travis/tunnckoCore/npm-pkgs-filter.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/npm-pkgs-filter
[daviddm-img]: https://img.shields.io/david/tunnckoCore/npm-pkgs-filter.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/npm-pkgs-filter/graphs/contributors

***

_Proudly generated by [docks(1)](https://github.com/tunnckoCore), April 16, 2015_