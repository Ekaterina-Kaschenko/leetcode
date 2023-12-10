function isPalindrom (str) {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return str === reversedString;
}

// two-pointer approach 

function canBePalindrome(s) {
  function isPalindrome(str, start, end) {
    debugger
      while (start < end) {
        debugger
          if (str[start] !== str[end]) {
              return false;
          }
          debugger
          start++;
          end--;
      }
      return true;
  }

  let start = 0;
  let end = s.length - 1;
  debugger
  while (start < end) {
    debugger
      if (s[start] !== s[end]) {
          // Try removing one character from either side
          debugger
          return (
              isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1)
          );
      }
      start++;
      end--;
  }

  return true; // The string is a palindrome or can be made one by removing at most one character
}

// Examples
// console.log("racecar: " + canBePalindrome("racecar")); // true
// console.log("noon: " + canBePalindrome("noon")); //true
// console.log("tent: " + canBePalindrome("tent")); // true - (remove either e or n)
// console.log("array: " + canBePalindrome("array")); // true - (remove y)
console.log("tweet: " + canBePalindrome("twweet")); // true - (remove w)
// console.log("levels: " + canBePalindrome("levels")); // true - (remove s)
// console.log("abaab: " + canBePalindrome("abaab")); // true - (remove fist a)
// console.log("baaba: " + canBePalindrome("baaba")); // true - (remove last a)
// console.log("sweets: " + canBePalindrome("sweets")); // false - (have to remove w and t)
// console.log("twitter: " + canBePalindrome("twitter")); // false
