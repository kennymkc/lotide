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


const takeUntil = function (array, callback) {
  array.forEach((item, index) => {
    if (callback(item)) {
      array = array.slice(0, index)
    }
  });
  return array;
};

module.exports = takeUntil;

//const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
//const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);
//// expected [1, 2, 5, 7, 2]
//
//console.log('---');
//
//const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
//const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);
////  ['I\'ve', 'been', 'to', 'Hollywood']