class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        sign = -1 if x<0 else 1
        x = abs(x)
        r = 0
        while x:
            r = r*10 + x%10
            x //= 10
        r = r*sign
        if r < -2**31 or r > 2**31 - 1:
            return 0
        return r
    
# Explanation
"""
The problem is to reverse the number.
1. First I checked whether the number is positive or negative and made it to positive using abs()-absolute value.
2. Here, r is the result. r repeteadley takes the last digit of the integer stored in 'x' by x%10 gives remainder and appending it to r.
3. After that I removed the last digit of the integer using x//=10.
4. next I multiplied the integer with its original sign.
5.And at last checked whether the integer is between the range or not.Otherthan the range it will return '0'.

Time Complexity: O(logn) - because i processed each digit of the integer exactly once

Space Complexity: O(1) - only few variables are used (x,r,sign)
"""