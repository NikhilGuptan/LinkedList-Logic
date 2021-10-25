// 1. Givennnon-negative integers representing the histogram's bar height where the width of each bar is 1,
//  what is the area of the largest rectangle that can be formed using this histogram?

function findRectangle(arr){
    let max = 0;
    
    for(let i=0; i<arr.length; i++){
        let left = i;
        let right = i;
        while(arr[left]>=arr[i]){
            left--
        }
        while(arr[right]>=arr[i]){
            right++
        }
        let area = (right-left-1)*arr[i]
        max = Math.max(max,area)
    }
    return max
}

// 2. Givennnon-negative integers representing an elevation map where the width of each bar is 1, 
// calculate how much rain water will be trapped after it rains.

function rainWater(arr){
  let left = []
  let right = []
  // creating left greater array
  left[0] = arr[0]
  for(let i=1; i<arr.length; i++){
      left[i] = Math.max(left[i-1],arr[i])
  }
  // creating right greater array
  right[arr.length-1] = arr[arr.length-1]
  for(let i=arr.length-2; i>=0; i--){
      right[i] = Math.max(right[i+1],arr[i])
  }
  
  let ans = 0;
  for(let i=0; i<arr.length; i++){
      ans += Math.min(left[i],right[i])-arr[i]
  }
  return ans
}

//  3. (Again a classical problem) A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

function bracketCheck(arr){
    var stack = [];
   for(var i=0; i<arr.length; i++){
     if(stack.length!=0){
       if((stack[stack.length-1]=="{" && arr[i]=="}") || (stack[stack.length-1]=="[" && arr[i]=="]") || (stack[stack.length-1]=="(" && arr[i]==")")){
         stack.pop()
       }else{
         stack.push(arr[i]);
       }
     }else{
      stack.push(arr[i])
     }
   }
   if(stack.length==0){
    return "balanced"
   }else{
    return "not balanced"
   }
 }

//  4. You have three stacks of cylinders where each cylinder has the same diameter, but they may vary in height.
//  You can change the height of a stack by removing and discarding its topmost cylinder any number of times.
// Find the maximum possible height of the stacks such that all of the stacks are exactly the same height.

function equalStacks(stack1, stack2, stack3) {
  let st1 = [];let st2 = [];let st3 = []
  for(let i=stack1.length-1; i>=0; i--){
      st1.push(stack1[i])
  }
  stack1 = st1
  for(let i=stack2.length-1; i>=0; i--){
      st2.push(stack2[i])
  }
  stack2 = st2
  for(let i=stack3.length-1; i>=0; i--){
      st3.push(stack3[i])
  }
  stack3 = st3
  
  let s1 = [];let s2 = [];let s3 = [];
  s1.push(stack1[0]);s2.push(stack2[0]);s3.push(stack3[0]);
  
  for(let i=1; i<stack1.length; i++){
      let a = s1[i-1]+stack1[i]
      s1.push(a)
  }
  for(let i=1; i<stack2.length; i++){
      let a = s2[i-1]+stack2[i]
      s2.push(a)
  }
  for(let i=1; i<stack3.length; i++){
      let a = s3[i-1]+stack3[i]
      s3.push(a)
  }
  
  let max = 0;
  
  while(s1.length!=0 && s2.length!=0 && s3.length!=0){
      let first = s1[s1.length-1]
      let secound = s2[s2.length-1]
      let third = s3[s3.length-1]
      
      if(first==secound && secound==third){
          max = s1[s1.length-1]
          break;
      }
      if(first>=secound && first>=third){
          s1.pop()
      }else if(secound>=first && secound>=third){
          s2.pop()
      }else if(third>=first && third>=secound){
          s3.pop()
      }
  }
  return max
}

// 5. Implement Queue using Stack

class Queue {
    constructor()
    {
        this.S1 = new Stack()
        this.S2 = new Stack()
    }
    push(value) {
    	this.S1.stack.push(value);
    }
    pop() {
     	if(!this.isEmpty()){
         this.S1.stack.shift();
        }else{
         return false;
        }
    }
    front() {
    	return this.S1.stack[0];
    }
    isEmpty() {
    	if(this.S1.stack.length==0){
         return true;
        }else{
         return false;
        }
    }
}

// 6. Implement Stack using Queue

class Stack {
    constructor()
    {
        this.Q1 = new Queue()
        this.Q2 = new Queue()
         // console.log(this.Q1)
    }
    push(value) {
    	this.Q1.queue.push(value);
    }
    pop() {
    	if(this.isEmpty()){
          this.Q1.queue.pop();
        }else{
         return false;
        }
    }
    top() {
        return this.Q1.queue[this.Q1.queue.length-1]
    }
    isEmpty() {
    	if(this.Q1.queue.length==0){
         return false;
        }else{
         return true;
        }
    }
}

// 7. 