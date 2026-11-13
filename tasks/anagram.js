// // Input: strs = ["eat","tea","tan","ate","nat","bat"]
// // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// var groupAnagrams = function(arr) {
//   const anagrams = {};

//   for (const word of arr) {
//     const sortedWord = word.split('').sort().join('');
//     if (sortedWord in anagrams) {
//       anagrams[sortedWord].push(word);
//     } else {
//       anagrams[sortedWord] = [word]
//     }
//   }
//   return Object.values(anagrams);

// };

// console.log("###", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false;

  const sortedS = s.split("").sort().join("");
  const sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
  // Time Complexity: O(n log n) из-за сортировки
  // Space Complexity: O(n) — из-за создаваемых массивов и строк.
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (const char of s) {
    if (!map.get(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  for (const char of t) {
    if (map.get(char)) {
      map.set(char, map.get(char) - 1);
    } else {
      return false;
    }
  }

  // Time Complexity: O(n) — у нас два отдельных цикла. Каждый
  // проходит по строке один раз. Получается O(n + n) = O(n).
  // Space Complexity: O(1) — поскольку по условию используются
  // только 26 строчных английских букв, в Map может находиться
  // максимум 26 ключей.
  return true;
};

console.log(isAnagram("rat", "car"));
console.log(isAnagram("anagram", "nagaram"));
