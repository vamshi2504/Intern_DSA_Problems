//  Problem: Two Sum

function twoSum(num, target) {
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
}
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));


/**
 * Approach:
 * Check every pair of numbers using nested loops.
 * If their sum equals the target, return their indices.
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */