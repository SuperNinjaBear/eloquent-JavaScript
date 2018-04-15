const arrOfARange = (start, end) => {
  let arr = [];
	for (let i = start; i <= end; i++) {
        arr.push(i);
  }
  return arr;
};

const sumOfArr = (arr) => {
  let sum = 0;
  for (let num of arr) {
      sum += num;
  }
  return sum;
};

const sumOfRange = (arrOfRange, sumOfArr) => {
  let arr = arrOfRange(1, 5);
  return sumOfArr(arr);
};
  

