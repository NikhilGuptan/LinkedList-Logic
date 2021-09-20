// 1. Insert a node at the Tail

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function insertNodeAtTail(head, data) {
     let newNode = new LinkedListNode(data)
    if (!head) {
        head = newNode 
        return head
    }
    let temp  = head
    while (temp.next) {
        temp = temp.next
    }
    temp.next = newNode
    return head
}


//  2. Deleting a Node

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function deleteNode(head, position) {
   let temp = head;
  for(let i=1; i<position; i++){
   temp = temp.next;
  }
  temp.next = temp.next.next;
  return head;
}


//  3. Insert at a specific position

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function insertNodeAtPosition(head, data, position) {
  let newNode = new LinkedListNode(data);
  if(position==0){
   newNode.next = head;
    return newNode;
  }
    let temp = head;
  for(let i=1; i<position; i++){
   temp = temp.next;
  }
  let old = temp;
  newNode.next = old.next;
  temp.next = newNode;
  return head;
}


//  4. Find Nth node from the end

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
  if (n <= 0) {
    return head;
  }
	
 let length = 0;
  let temp = head;
  
  while(temp!==null){
   temp = temp.next;
    length++;
  }
  
  let step = length-n;
  temp = head;
  
  for(let i=0; i<step;i++){
   temp = temp.next;
  }
  return temp.data;
}


// 5. Reverse the Linked List

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

function reverse(head) {
  let prev = null;
  let next = null;
    let temp = head;
  while(temp!=null){
  	next = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next;
  }
  return prev;
}

//  6. Return a middle node of the linked list.

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
let slow = head;
  let fast = head;
  
  while(fast!==null && fast.next!==null){
   slow = slow.next;
    fast = fast.next.next;
  }
  
  return slow.data;
};

//  7. Given a linked list, rotate the list to the right by k places.


// 8. Givenhead, the head of a linked list, determine if the linked list has a cycle in it.

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var hasCycle = function(head) {
     var s = new Set();
  
        while (head != null) {
            if (s.has(head)){
                return true;
            }
            s.add(head);
            head = head.next;
        }
 
        return false;
};


// 9. Merge two sorted linked lists and return it as a new sorted list

const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

var mergeTwoLists = function(l1, l2) {
	let p1 = l1;
   let p2 = l2;
  
  let dummyNode = new ListNode(-1);
  let p3 = dummyNode;
  
  while(p1!=null && p2!=null){
     if(p1.val<=p2.val){
       p3.next = p1;
       p1 = p1.next;
     }else{
     	p3.next = p2;
       p2 = p2.next;
     }
    p3 = p3.next;
  }
  
  if(p1!=null){
   p3.next = p1;
  }
  if(p2!=null){
  p3.next = p2;
  }
  
  return dummyNode.next;
};


// 10. Given a singly linked list, determine if it is a palindrome.

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var isPalindrome = function (head) {
    var slow = head;
        var ispalin = true;
        var stack = [];
 
        while (slow != null) {
            stack.push(slow.data);
            slow = slow.next;
        }
 
        while (head != null) {
 
            var i = stack.pop();
            if (head.data == i) {
                ispalin = true;
            } else {
                ispalin = false;
                break;
            }
            head = head.next;
        }
        return ispalin;
};


// 11. Given a linked list, rotate the list to the right by k places, where k isnon-negative.

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function(head, k) {
  if(head==null){
   return head;
  }  
  
  var tmp = head;
  var len = 1;
  while (tmp.next != null) {
        tmp = tmp.next;
        len++;
     }
  
  if(k>len){
   k = k%len;
  }
  k = len-k;
  
  if(k==0 || k==len){
   return head;
  }
  
  var current = head;
   var cnt = 1;
    while (cnt < k && current != null) {
         current = current.next;
         cnt++;
     }
  
  if (current == null)
       return head;
  
  var kthnode = current;
  tmp.next = head;
  head = kthnode.next;
  kthnode.next = null;
  return head; 
};

// 12. A number is given represented in the form of a linked list. Add one to it.

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function(head) {
    let prev = null;
  let next = null;
    let temp = head;
  while(temp!=null){
  	next = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next;
  }
    let current = prev;
    current.data = current.data+1;
    let carry = 0;
  
  let newTemp;
    while(current!=null && (current.data>9 || carry>0)){
      newTemp = current;
      current.data = current.data+carry;
      carry = current.data/10;
      current.data = current.data%10;
      current = current.next;
    }
    if(carry>0){
     newTemp.next = new LinkedListNode(carry)
    }
  
   let newPrev = null;
  let newNext = null;
    let secoundTemp = current;
  while(secoundTemp!=null){
  	newNext = secoundTemp.next;
    secoundTemp.next = newPrev;
    newPrev = secoundTemp;
    secoundTemp = newNext;
  }
  return newPrev;
};



