//const eqArrays = function (arr1, arr2) {
//  for (let i = 0; i < arr1.length; i++) {
//    if (arr1[i] !== arr2[i]) {
//      return false;
//    }
//  }
//  return true;
//};
//
//const assertArraysEqual = function (arr1, arr2) {
//  if (eqArrays(arr1, arr2)) {
//    console.log(`✅✅✅ Assertion Passed: Match.`);
//  } else {
//    console.log(`🛑🛑🛑 Assertion Failed: Does not match.`);
//  }
//};

const without = function (source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    let exclude = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        exclude = true;
        break;
      }
    }
    if (!exclude) {
      newArr.push(source[i])
    }
  }
  return newArr;
};

module.exports = without;

//without([1, 2, 3], [1]) // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
//console.log(without([1, 2, 3], [1]))
//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
//// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);

