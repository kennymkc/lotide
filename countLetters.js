//const assertEqual = function (actual, expected) {
//  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//};

const countLetters = function (str) {
  lowercaseStr = str.toLowerCase();
  const result = {};
  for (letter of lowercaseStr) {
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter]++;
    }
  }
  return result;
}

module.exports = countLetters;

//countLetters("lighthouse in the house")