const eqObjects = function (object1, object2) {
  const objList1 = Object.keys(object1);
  const objList2 = Object.keys(object2);
  // must have the same number of keys
  if (objList1.length !== objList2.length) {
    return false;
  }
  for (let key of objList1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(ab)} === ${inspect(ba)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(ab)} !== ${inspect(ba)}`);
  }
};

//console.log(`Example label: ${inspect(actual)}`)

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true