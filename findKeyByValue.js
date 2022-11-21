//const assertEqual = function (actual, expected) {
//actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//};

const findKeyByValue = function (object, value) {
  let objList = Object.keys(object);
  for (let key of objList) {
    if (value === object[key]) {
      return key
    }
  }
};

module.exports = findKeyByValue;

//const bestTVShowsByGenre = {
//  sci_fi: "The Expanse",
//  comedy: "Brooklyn Nine-Nine",
//  drama: "The Wire"
//};
//
//
//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi")