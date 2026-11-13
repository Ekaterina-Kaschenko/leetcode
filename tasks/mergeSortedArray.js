/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var mergeSortedArray = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let writeIndex = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    // продолжай цикл, пока в обоих массивах остались элементы для сравнения.
    if (nums1[p1] > nums2[p2]) {
      nums1[writeIndex] = nums1[p1];
      p1--;
    } else {
      nums1[writeIndex] = nums2[p2];
      p2--;
    }
    writeIndex--;
  }

  while (p2 >= 0) {
    // индекс 0 — это тоже действительный индекс.
    // А когда p2 станет равным -1, значит, все элементы nums2 уже
    // обработаны и цикл завершится
    nums1[writeIndex] = nums2[p2];
    p2--;
    writeIndex--;
  }
};

console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
