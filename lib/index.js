/**
 * Modules
 */

var clone = require('@f/clone-shallow')
var composeReducers = require('@f/compose-reducers')

/**
 * Expose combineReducers
 */

module.exports = combineReducers['default'] = combineReducers

/**
 * combineReducers
 */

function combineReducers (reducers) {
  return composeReducers.apply(null, Object
    .keys(reducers)
    .map(function (key) {
      return scopeReducer(reducers[key], key)
    }))
}

function scopeReducer (reducer, prop) {
  return function (state, action) {
    var childState = reducer(state[prop], action)

    if (childState !== state[prop]) {
      state = clone(state)
      state[prop] = childState
    }

    return state
  }
}
