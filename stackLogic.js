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

//  4. 