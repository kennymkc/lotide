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

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["hold", "me", "closer", "tiny", "dancer"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words1, word => word[0]), ['h', 'm', 'c', 't', 'd']);
