import assert from 'assert'
import match from '../../src/helpers/match'

describe('#match', function () {
  it('should match test for `test`', function () {
    assert(match('test', 'test'))
  })
  it('should match longtest for `*test`', function () {
    assert(match('longtest', '*test'))
  })
  it('should match testlong for `test*`', function () {
    assert(match('longtest', '*test'))
  })
  it('should match longtestlong for `*test*`', function () {
    assert(match('longtest', '*test'))
  })
  it('should not match test for `!test`', function () {
    assert.strictEqual(match('test', '!test'), false)
  })
  it('should not match longtest for `!*test`', function () {
    assert.strictEqual(match('longtest', '!*test'), false)
  })
  it('should not match longtestlong for `!*test*`', function () {
    assert.strictEqual(match('longtestlong', '!*test*'), false)
  })
  it('should match nottastnot for `!*test*`', function () {
    assert(match('nottastnot', '!*test*'))
  })
  it('should return false if original equals replacement', function () {
    assert.strictEqual(match('test', 'test', 'test'), false)
  })
  it('should a match a regex for !/regex/modifiers', function () {
    assert(match('a', '!/[a-z]/'), true)
    assert(match('aAaA', '!/[A]*/i'), true)
    assert(match('1a7', '!/\\d\\w7/i'), true)
  })
})
