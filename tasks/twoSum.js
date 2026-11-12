/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

var twoSum2 = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(nums[i], i);
    }
  }
  debugger;

  return map;
};

// var twoSum = function (array, target) {
// two pointers algorithm

//   array.sort((a, b) => a - b);
//   let left = 0;
//   let right = array.length - 1;
//   while (left < right) {
//     const currentSum = array[left] + array[right];
//     if (currentSum === target) {
//       return [left, right];
//     } else if (currentSum < target) {
//       left++;
//     } else if (currentSum > target) {
//       right--;
//     }
//   }
//   return [];
// };

// console.log("###", twoSum2([2, 5, 5, 11], 11));

// // Write a Javascript function that get as an input an array of number and returns True or False. The function will return True if and only if there are three consecutive numbers that the sum of all of them is 7. For example [1,5,1,2] will return True [5,2,2,2] will return False [1,5,2,1] will return False [2, 1, 5, 1]: True

// function hasThreeConsecutiveSumSeven(arr) {
//   // We need at least 3 elements to have a valid set of three consecutive numbers
//   if (arr.length < 3) {
//     return false;
//   }

//   // Iterate through the array up to the third-last element
//   for (let i = 0; i < arr.length - 2; i++) {
//     // Sum of three consecutive elements starting from index i
//     const sum = arr[i] + arr[i + 1] + arr[i + 2];

//     // Check if the sum is 7
//     if (sum === 7) {
//       return true;
//     }
//   }

//   // If no combination sums to 7, return false
//   return false;
// }

// console.log("aaa");

// Test cases
// console.log(hasThreeConsecutiveSumSeven([1, 5, 1, 2]));  // True
// console.log(hasThreeConsecutiveSumSeven([5, 2, 2, 2]));  // False
// console.log(hasThreeConsecutiveSumSeven([1, 5, 2, 1]));  // False
// console.log(hasThreeConsecutiveSumSeven([2, 1, 5, 1]));  // True
