const tail = function (notFirst) {
  let newArr = notFirst.slice(1);
  return newArr;
};

module.exports = tail;
