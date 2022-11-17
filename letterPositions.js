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


const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letters = sentence[i];
    if (!results[letters]) {
      results[letters] = [i];
    } else {
      results[letters].push(i);
    }
  }
  return results;
};


// console.log(letterPositions("lighthouse in the house"));
const funcResult = letterPositions('hello')
console.log(funcResult.e)


assertArraysEqual(letterPositions('hello').e, [1])

Object.keys





