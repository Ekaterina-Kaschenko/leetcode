var containsDuplicate = function(nums) {
  const s = new Set(nums); 
  return s.size !== nums.length
};

var containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b)
  for (var i = 0; i < nums.length; i++) {
    var curr = i;
    var next = i + 1;
    if (nums[curr] === nums[next]) {
      return true;
    } else {
      return false;
    }
  }
};

var containsDuplicate = function(nums) {
  const result = nums.filter((e,index) => {
    return nums.indexOf(e) !== index;
  });
  return result.length;
};

containsDuplicate([1,2,3,1]);