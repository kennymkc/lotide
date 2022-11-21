const eqArrays = require('./eqArrays');

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: Match.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: Does not match.`);
  }
};

module.exports = assertArraysEqual;
