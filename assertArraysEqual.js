const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: Match.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: Does not match.`);
  }
};

assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);