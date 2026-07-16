class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        arr = [(num, i) for i, num in enumerate(nums)]
        arr.sort()

        left = 0
        right = len(arr) - 1

        while left < right:
            s = arr[left][0] + arr[right][0]

            if s == target:
                return [arr[left][1], arr[right][1]]
            elif s < target:
                left += 1
            else:
                right -= 1


nums = [2, 7, 11, 15]
target = 9

obj = Solution()
result = obj.twoSum(nums, target)
print(result)


# Explanation
"""
Goal is to adding upon 2 nums and gettig the target result
1.Created an array of list(value, original index), these are the original index positions.
2.sorted the 'arr' and initialized two pointers 'left' at start and 'right' at end for the sorted list.
3.calculated the sum of numbers at left&right indexes.
4.If sum is equal to taget returned the original indexes, if it's smaller move left to left+1, otherwise right-1.

Time Complexity: O(nlogn) - sorting takes major time, two pointer traversal is O(logn) but overall is  O(nlogn)

Space Complexity: O(n) - arr stores 'n' number of pairs(value,index).
"""