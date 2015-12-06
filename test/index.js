/**
 * Imports
 */

var combineReducers = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var rootReducer = combineReducers({
    counter: reducer
  })

  t.deepEqual(rootReducer({counter: 0}, 1), {counter: 1})
  t.deepEqual(rootReducer({counter: 0, test: 1}, 1), {counter: 1, test: 1})
  t.end()
})

function reducer (state, action) {
  return state + action
}
