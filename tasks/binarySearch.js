/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function (nums, target) {
  // we need to divide to 2 all the time and check, that's how binary search algo works
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // Здесь именно <=, поскольку, когда left === right, у нас остаётся один последний элемент, который тоже нужно проверить.
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1; // исключаем и середину, и всё, что находится слева от неё, поэтому +1
    } else {
      right = mid - 1;
    }
  }
  return -1;
  // Time Complexity: O(log n)
  // Почему не O(n), хотя у нас есть while?

  // Потому что на каждой итерации мы отбрасываем примерно половину оставшихся элементов.
};
debugger;
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
debugger;
