const findVowels = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return str.toLowerCase().split(''),reduce((acc, char) => {
    if (vowels.includes(char)) {
      acc++;
    }
    return acc;
  }, 0);
}

// console.log('###', findVowels('addgregwo'));


var maxVowels = function(s, k) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let maxCount = 0;
  let start = 0;
  let count = 0;
  for (let end = 0; end < s.length; end++) {
      if (vowels.includes(s[end])) {
          count +=1;
      }
      if (end - start + 1 > k) {
          if(vowels.includes(s[start])) {
              count -=1;
          }
          start +=1;
      }
      maxCount = Math.max(maxCount, count)
      if (maxCount == k) return maxCount;
  }
  return maxCount;
};

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.


var search = function(nums, target) {
  return nums.findIndex((el) => el === target); 
};

// console.log('### 1', search([-1,0,3,5,9,12], 9));
