function moveZeroes(array: number[]) {
  const newArray = array;
  const zeroIdx: number[] = [];

  newArray.map((item, index) => {
    if (item === 0) zeroIdx.push(index);
  });

  zeroIdx.reverse().forEach((num) => {
    newArray.splice(num, 1);
    newArray.splice(newArray.length, 0, 0);
  });

  return newArray;
}

const nums = [0, 0, 2, 1, 0];

const result = moveZeroes(nums);
console.log(result);
