// Finding the longest common prefix
/* 
* Vertical scanning approach
* Check if the array is empty or null if the STring array is null return ""
* Start with the first string as reference 
* check each charcater position (column) one by one. 
* for each position compare the character in the first string with the corresponding character in all other strings.
* if all match continue or if a mismatch is found or one string ends stop the loop and return prefix up to column 
* if no mismatch found, return the entire first string as the Common prefix from the entire String Array
* Time complexity: O(n.m) where n is number of strings and m is length of the prefix
* Space complexity: O(1) uses few variables, no extra data structure proportional to input size and the substring returned is part of the input string( no extra Storage)
*/
public class TharakSolution 
{
    public String longestCommonPrefix(String[] strs) 
    {
        if(strs.length == 0 || strs == null) return "";

        for (int col = 0 ; col < strs[0].length() ; col++)
        {
            char c = strs[0].charAt(col);
            for (int row = 1 ; row < strs.length ; row++ )
            {
                if( col >= strs[row].length() || strs[row].charAt(col) != c)
                {
                    return strs[0].substring(0, col);
                }
            }
        }
        return strs[0];
    }    
}
