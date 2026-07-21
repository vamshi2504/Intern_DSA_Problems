class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        if not strs:
            return ""
       
        first_str = strs[0]
        
        i = 0
        while i < len(first_str):
            char_to_check = first_str[i]
            
            for other_str in strs:
                if i >= len(other_str) or other_str[i] != char_to_check:
                    return first_str[:i]
            
            i += 1
            
        return first_str 



# Explanation
"""
1. I used the first word as my guide to check characters one by one.
2. defined a loop that moves through each column of letters.
3. I checked every other word to make sure that there is exact same letter in the column.
4. Also stopped the loop immediately if it is mis-match or ran out of words.
5. And I return the matching string.

Time complexity: 
best case - O(N) 
If words doesn't match 

worst case - O(M*N) =>O(S)
When all strings are same 
But overall - O(S).

Space Complexity: O(1)
It doesn't created any new lists and data structures that grows with input size.
"""