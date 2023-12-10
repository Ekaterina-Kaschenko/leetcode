var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const reversedS = s.split('').sort().join('')
  const reversedT = t.split('').sort().join('')

  return reversedS === reversedT;
};

var groupAnagrams = function(arr) {
  const anagrams = {};

  for (const word of arr) {
    const sortedWord = word.split('').sort().join('');
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word]
    }
  }
  return Object.values(anagrams);

};

console.log('###', groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
