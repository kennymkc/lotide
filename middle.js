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

const middle = function (array) {
  let ans = [];
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 0) {
    ans.push([array[Math.floor((array.length - 1) / 2)]]), ans.push([array[Math.floor(array.length / 2)]]);
  } else {
    ans.push(array[Math.floor(array.length / 2)]);
  }
  return ans;
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]