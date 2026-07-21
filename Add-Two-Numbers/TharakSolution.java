/*
* Initializing pointers starting with l1 and l2 ListNodes and pointing to the heads of the two input lists
* Created variables head( to store the result list's start), tail (to append nodes), and carry = 0.
* Continue looping while either list has nodes or ther's a non- zero carry
* Extract values from current nodes( val1, val2), defaulting to 0 if a list is shorter.
* calculate sum and update carry
* The digit for the new node is sum % 10
* Make a new ListNode with the digit. if head is null, assign head = newNode (this happend only one) Otherwise, attach it to tail.next and move tail forward.
* Move l1 and l2 to thier next nodes if they exist
* add both lists end, if carry> 0, create one final node with that value
* The head now points to the complete sum list
* return head ListNode
* Time complexity: O(max(m,n)) -- Must process all digits
* Space complexity: O(max(m,n)) -- Result list size.
*/

// Definition for singly-linked list.
class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

public class TharakSolution 
{
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) 
    {
        ListNode head = null;
        ListNode tail = null;
        int carry = 0;
        while(l1 != null || l2 != null || carry != 0)
        {
            int val1 = ( l1 != null) ? l1.val : 0;
            int val2 = ( l2 != null) ? l2.val : 0;
            int sum = val1 + val2 + carry;
            carry = sum/10;
            ListNode newNode = new ListNode( sum % 10);

            if(head == null) {
                head = newNode;
                tail = newNode;
            } else {
                tail.next = newNode;
                tail = tail.next;
            }

            if(l1 != null) l1 = l1.next;
            if(l2 != null) l2 = l2.next;
        }
        return head;

    }
}