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
console.log(twoSum([1, 2, 3, 4], 5));

/**
 * Approach:
 * Check every pair of numbers using nested loops.
 * If their sum equals the target, return their indices.
 *
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */