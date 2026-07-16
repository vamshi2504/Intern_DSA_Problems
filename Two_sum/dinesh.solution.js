/**
 * Problem: Two Sum (Brute Force)
 *
 * Approach:
 * We use two nested loops to check every possible pair of elements in the array.
 * The outer loop selects one element, and the inner loop checks the remaining elements
 * to find a pair whose sum equals the target. Once such a pair is found, we return
 * their indices.
 *
 * Time Complexity: O(n²)
 * Reason: In the worst case, every element is compared with every other element.
 *
 * Space Complexity: O(1)
 * Reason: No extra data structure is used apart from a few variables.
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log("Brute Force");
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));


/**
 * Problem: Two Sum (Optimal - Hash Map)
 *
 * Approach:
 * We use a Hash Map (Map in JavaScript) to store each number along with its index
 * while traversing the array. For every element, we calculate the complement
 * (target - current element). If the complement already exists in the map, we have
 * found the required pair and return their indices. Otherwise, we store the current
 * element and continue the iteration.
 *
 * Time Complexity: O(n)
 * Reason: We traverse the array only once, and each Hash Map lookup and insertion
 * takes O(1) on average.
 *
 * Space Complexity: O(n)
 * Reason: In the worst case, the Hash Map stores all the elements of the array.
 */
function twoSumMap(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }
    map.set(nums[i], i);
  }
}
console.log("--------------------");

console.log("Optimal");
console.log(twoSumMap([2, 7, 11, 15], 9));
console.log(twoSumMap([3, 2, 4], 6));
console.log(twoSumMap([3, 3], 6));
