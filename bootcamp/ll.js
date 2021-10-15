
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let ll = new ListNode(1);
let ref = ll;
[2].forEach(a=>{
    ref.next = new ListNode(a)
    ref = ref.next
})

// console.log(ll)
var reverseList = function(head) {

    let prev = null;
    let curr = head;

    while( curr ){
        let tmp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmp;
    }
    return prev
};
console.log(ll)
reverseList(ll)

// 1 => 2 => 3 => 4 => 5

// head.next
// 2 = > 3 => 4 => 5
// head.value
// 1 

// 3 => 4 => 5
// 2 => 1

// 3 => 2 => 1
// 4 => 5

// 4 = > 3 => 2 => 1
// 5
//  5 => 4 => 3 => 2 => 1