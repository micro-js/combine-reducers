
# combine-reducers

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Combines an object of reducers together to form a single, composite reducer. This function is identical to the one provided by [https://github.com/rackt/redux](redux) but it doesn't do the sanity checks that redux does, which allows you to do a few things like having multiple root reducers combined into one that you can't do with redux's assertions.

## Installation

    $ npm install @micro-js/combine-reducers

## Usage

```js
var combineReducers = require('@micro-js/combine-reducers')

combineReducers({
  counter1: counterReducer,
  counter2: counterReducer
})

function counterReducer (state, action) {
  if (action.type === INCREMENT) {
    return ++state
  }

  return state
}
```

## API

### combineReducers(reducers)

- `reducers` - An object containing a map of reducers to property names

**Returns:** The combined reducer map as a single reducing function.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/combine-reducers.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/combine-reducers
[git-image]: https://img.shields.io/github/tag/micro-js/combine-reducers.svg
[git-url]: https://github.com/micro-js/combine-reducers
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@micro-js/combine-reducers.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-js/combine-reducers
