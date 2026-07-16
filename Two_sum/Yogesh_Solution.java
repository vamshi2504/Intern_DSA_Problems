/*
Brute Force Approach:
(though we can use 2 for loops, I tried it using while inside for using a 2 pointer approach)
- Traverse every element in the array.
- For each element, compare it with every other element.
- If the sum of two different indices equals the target, return those indices.
- Since every possible pair is checked, this guarantees finding the correct answer if it exists.

Time Complexity:
- O(n²)
- The outer loop runs n times and the inner loop also runs n times.

Space Complexity:
- O(1)
- No extra data structures are used apart from the returned array.
*/

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            int j = 0;
            while (j < n) {
                if (nums[i] + nums[j] == target && i != j) {
                    return new int[]{i, j};
                }
                j++;
            }
        }
        return new int[]{};
    }
}


/*
Optimal Approach:
- Use a HashMap to store each number and its index while traversing the array.
- For every current number x, calculate its required complement:
      complement = target - x
- Check if the complement already exists in the HashMap.
    - If yes, return the stored index of the complement and the current index.
    - Otherwise, store the current number and its index in the HashMap.
- Since HashMap lookup is O(1) on average, the solution requires only one pass through the array.

Time Complexity:
- O(n)
- Each element is visited once, and HashMap operations (put and containsKey) take O(1) on average.

Space Complexity:
- O(n)
- In the worst case, the HashMap stores all n elements.
*/

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> m = new HashMap<>();
        for (int i = 0;; i++) {
            int x = nums[i];
            int y = target - x;
            if (m.containsKey(y)) {
                return new int[]{m.get(y), i};
            }
            m.put(x, i);
        }
    }
}
