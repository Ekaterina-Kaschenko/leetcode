// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

const pairs = {
  "(": ")",
  "[": "]",
  "{": "}"
}
   
var isValid = function(s) {
  
  // check if length is an odd number. if it is, return false
  // if there is an odd number, it means that at least one bracket is missing a pair
  if (s.length % 2 === 1) return false
  
  // if the first element is a closing bracket, it doesn't matter what follows
  // it will never have a pair
  if (s[0] === "]" || s[0] === ")" || s[0] === "}") return false
  
  // same goes for last element, we are just dealing with opening bracket
  if (s[s.length - 1] === "[" || s[s.length - 1] === "(" || s[s.length - 1] === "{") return false
  
  
  let stack = []
  
  for(let i=0; i<s.length; i++) {
      // if it's an opening bracket, push into stack
      // else, assume it's closing bracket and check if it matches anything
      if(s[i] === "[" || s[i] === "(" || s[i] === "{") {
          stack.push(s[i])
      } else if (pairs[stack.pop()] !== s[i]) {
          return false
      }
      
  }
  return stack.length === 0
  
};


//////////-----------------------


var isValid2 = function(s) {
  if(!s || s.length <= 1){
      return false;
  }
  
  let stack = [];
  let map = {
      '(':')',
      '[':']',
      '{':'}',
  }
  
  for(let i=0;i< s.length;i++){
      if(map[s[i]]){
          stack.push(map[s[i]])
      }else{
          if(stack.pop() != s[i]){
             return false
          }
      }
  }
  
  return stack.length > 0 ? false : true;
};