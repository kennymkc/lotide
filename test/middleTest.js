const eqArrays = require('../eqArrays')
const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')
const { assert } = require('chai');

describe('#middle', () => {
  it('should return [] when given 2 or less values', () => {
    assert.deepEqual(middle([1, 2]), [])
  });
  it('should return a single value [2] from [1, 2, 3](odd)', () => {
    assert.deepEqual(middle([1, 2, 3]), [2])
  });
  it('should return two values [3, 4] from [1, 2, 3, 4, 5, 6](even)', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  });
});