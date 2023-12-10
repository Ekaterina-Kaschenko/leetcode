var twoSum = function(array, target) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === target) {
      return [left, right];
    } else if (currentSum < target) {
      left++;
    } else if (currentSum > target) {
      right--;
    }
  }
  return [];
};

var twoSum1 = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    const firstEl = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      secondEl = nums[j];

      if (firstEl + secondEl ==  target) {
        return [i, j];
      }
    }
  }
  return [];
};

var twoSum1 = function(nums, target) { // розібрати рішення
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {

      if (hash.has(nums[i])) {
          return [hash.get(nums[i]), i]
      } else {
          hash.set(target - nums[i], i)
      }
  }  
};

// console.log('###', twoSum1([2,7,11,15], 9));
// console.log('###', twoSum1([3,2,4], 6));
// console.log('###', twoSum1([3,3], 6));
// console.log('###', twoSum1([2,5,5,11], 11));