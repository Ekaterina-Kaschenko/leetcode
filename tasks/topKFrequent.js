var topKFrequent = function(nums, k) {
  let res = [], map = new Map();
  
  nums.forEach(n => map.set(n, map.get(n) + 1 || 1));
  
  let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
  
  for(let i = 0; i < k; i++) {
    res.push(sortedArray[i][0]);
  }
  
  return res;
};

var topKFrequent = function(nums, k) {
  const r = nums.reduce((a, c) => {
      a[c] ? a[c] += 1 : a[c] = 1
      return a
  }, {})
  
  return Object
      .keys(r)
      .sort((k1, k2) =>  r[k2] - r[k1])
      .slice(0, k);
};

var topKFrequent = function(nums, k) {
    
  let map = {};
  
  for(let num of nums){
    map[num] = (map[num] || 0) + 1;

  }

  return Object.entries(map).sort((a,b) => b[1] - a[1]).map(val => Number(val[0])).slice(0, k);
  
};