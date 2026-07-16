package Intern_DSA_Problems.Two_sum;

public class Tharak_Solution 
{
    public int[] twoSum(int[] nums, int target) 
    {
        int[] result = new int[2];
        boolean found = false;
        for(int i=0;i<nums.length;i++)
        {
            for(int j=i+1;j<nums.length;j++)
            {
                if(nums[i]+nums[j] == target){
                    result[0]=i;
                    result[1]=j;
                    found=true;
                }
            }
        }
        if(!found)
        {
            return new int[] {};
        }
        return result;
    }
}

/*An Integer array of size 2 names as result which will return The indexes of values which matches the Target value.
if no indexes are found to the target then returning empty array so to check that i taken Variable found which of type boolean and default value is false
taking 2 loops(Brute force search method) which will loop through the given array nums
the 1st loop loops from the starting to the end of the array
and the 2nd loop will loop after the privious loop index so that if the same index has same values and equals to target Then same index values will not store in the result 
Same index should never add twice to equal to Target element
after that adding the condition to add different index values which are equal to Target element
if the condition satisfies then adding those indexes to the result array and changing the boolean value to true meaning found the answer
and after that checking if the boolean is false(no index values are found which matches the target) then returning empty array
Otherwise returning the final result array which contains the Indexes

Time complexity: O(n^2) since for each element it compares with all others
Space complexity: O(1) aside one result array
 */
