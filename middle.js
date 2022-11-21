const middle = function (array) {
  let ans = [];
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 0) {
    ans.push(array[Math.floor((array.length - 1) / 2)]), ans.push(array[Math.floor(array.length / 2)]);
  } else {
    ans.push(array[Math.floor(array.length / 2)]);
  }
  return ans;
};

module.exports = middle;
