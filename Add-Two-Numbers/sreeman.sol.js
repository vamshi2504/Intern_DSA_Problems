// helper functions 
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next;
}

function printLinkedList(head) {
    let result = [];

    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }

    return result;
}

// actual logic code for Add-two-Numbers
function addTwoNumbers(l1, l2){
    let dummy = new ListNode(0);
    let current = dummy;

    let carry = 0;
    while(l1 !== null || l2 !== null || carry !== 0){
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;

        let sum = x + y + carry;

        carry = Math.floor(sum/10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    return dummy.next;
}

let l1 = createLinkedList([2,4,3]);
let l2 = createLinkedList([5,6,4]);

let answer = addTwoNumbers(l1, l2);

console.log(printLinkedList(answer));
