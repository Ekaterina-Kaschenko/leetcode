/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]

// Input: candidates = [2], target = 1
// Output: []

 var combinationSum = function(candidates, target) {
  let res = [];

  const dfs = (curCandidates, curTarget, value) => {
    if( curTarget == 0)  res.push(value);
    if(curTarget <= 0 ) return;
    for(let g=0; g<curCandidates.length; g++){
      dfs(curCandidates.slice(g), curTarget-curCandidates[g], [...value, curCandidates[g] ] );  
    }
  }
  dfs(candidates, target, []);
  return res;
};

var combinationSum = function(candidates, target) {
  const comb = []
  const temp = []
  
  function DFS(index) {           
      if (target < 0) return
      
      if (target === 0) comb.push([...temp])
      
      while (candidates[index]) {
          temp.push(candidates[index])
          target -= candidates[index]
          
          DFS(index)
          
          target += candidates[index]
          temp.pop()
          index++
      }
  }
  
  DFS(0)
  return comb
};
