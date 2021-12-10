//  1. Given a number N your task is to write a program that calculates factorial of N

function factorial(n){
    if(n==1){
     return 1;
    }else{
     return n * factorial(n-1)
    }
}

//  2. Fibonacci-Recursion

function fibonic(n) {
      if (n <= 1){
         return n;
      }
    return fibonic(n-1) + fibonic(n-2);
}

//  3. Given a string, S. Find the length of the string using recursion.

 function length(str){
        if (str == ""){
            return 0;
        }
        else{
            return length(str.substring(1)) + 1;
        }
}

//  4. Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps at a time. You have to count, how many possible ways Sandhya can run up to the stairs.

function ways(n){
    if(n<0){
     return 0;
    }else if(n==0){
     return 1;
    }else{
     return ways(n-1)+ways(n-2)+ways(n-3);
    }
}

//  5. Given two integers a and b, we need to find the value of a^b recursively.

function power(a,b){
   if(b==0){
    return 1;
   }else{
    return a*power(a,b-1)
   }
}

//  6. Tom and Nick are good friends.Once Tom asked Nick exactly N rupees, but Nick has only 1 rupee in his bank account.
// Nick wants to help his friend so he wrote two hacks First hack can multiply the amount of money he owns by 10,while the second can multiply it by 20. These hacks can be used any number of times.Can Nick help Tom with his hacks?

function call(b,n){
 if(hack(b,n)){
  return "Yes"
 }else{
  return "No";
 }
}

function hack(b,n){
 if(b==n){
  return 1;
 }else if(b>n){
  return 0;
 }else{
  return hack(b*10,n)+hack(b*20,n)
 }
}

//  7. Given an integer n, you need to find out its binary representation using recursion.

function binary(n){
 if(n==1){
  return 1;
 }else if(n==0){
  return 0;
 }else{
 return binary(Math.floor(n/2))+""+(n%2)+""
 }
}

//  8. Now that you have learnt about geometric progression in Masai School pre-course, we hope you remember about the sum of a geometric series:

function sum(n,r){
    if(n==0){
    return 1;
    }else{
     var ans = 1 / Math.pow(r,n) + sum(n - 1,r);
    }
     return ans;
}
   
//  9. Given a string s, recursively remove adjacent duplicate characters from the string s. The output string should not have any adjacent duplicates.

function duplicate(arr){ 	
  if(arr.length==0){
   return "Empty String"
  }
  if(arr.length==1){
   return arr;
  }
  
  var res = "";
  for(var i=0; i<arr.length; i++){
    if(i==0){
      if(arr[i]!=arr[i+1]){
        res += arr[i];
      }
    }
    else if(i==arr[arr.length-1]){
      if(arr[i]!=arr[i-1]){
       res += arr[i]
      }
    }else{
     if(arr[i]!=arr[i+1] && arr[i]!=arr[i-1]){
       res += arr[i]
     }
    }
  }
  
  if(arr.length==res.length){
   return res;
  }else{
   return duplicate(res)
  }   
}

//  10. Generate all valid parenthesis of string length 2n.

function number(a){
 if(a==1){
  return 1;
 }else{
  return a*number(a-1);
 }
}

function paran(s,open,close,n){
 	
  if(s.length==2*n){
   console.log(s);
    return;
  }
  if(open<n){
   paran(s+"(",open+1,close,n);
  }
  if(open>close){
  	paran(s+")",open,close+1,n);
  }
}

//  11. A String is a subsequence of a given String, that is generated by deleting some character of a given string without changing its order.
// You are given a string S. You have to generate all the subsequences of the string S using a recursive approach (duplicates allowed)

  function printSubsequence(input, output){
    if (input.length==0) { 
        return;
    }
    
    console.log(output+input[0])
    printSubsequence(input.substring(1), output + input[0]);
    printSubsequence(input.substring(1), output);
  }

//  12. Given a collection of numbers, return all possible permutations.

function swap(a,i,j){
   let temp;
let charArray = a.split("");
temp = charArray[i] ;
charArray[i] = charArray[j];
charArray[j] = temp;
return (charArray).join("");
}

function permute(str,l,r){
  if(l==r){
   let ans = "";
    for(let i=0; i<str.length; i++){
     ans += str[i]+" ";
    }
    console.log(ans)
  }else{
    for(var i=l; i<=r; i++){
      str = swap(str,l,i);
      permute(str,l+1,r);
    }
  }
}

// 13. The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
// Given an integer n, print the number of distinct solutions to the n-queens puzzle.

function isQueenSafe(chess,row,col){
  for(let i=row-1,j=col; i>=0; i--){
     if(chess[i][j]==1){
      return false;
     }
  }
  
  for(let i=row-1, j=col-1; i>=0 && j>=0; i--,j--){
  	if(chess[i][j]==1){
      return false;
     }
  }
  
  for(let i=row-1, j=col+1; i>=0 && j<chess.length; i--,j++){
  	if(chess[i][j]==1){
      return false;
     }
  }
  
  return true;
  
}

var  count = 0

function nQueen(chess,row){
 if(row>=chess.length){
   count++;
   return;
 }
  for(let col=0; col<chess.length; col++){
   if(isQueenSafe(chess,row,col)){
     chess[row][col] = 1;
     nQueen(chess,row+1);
     chess[row][col] = 0;
   }
  }
}

function runProgram(input) {
	var n = +input;
  
  var chess = [];
  
  for(var i=1; i<=n; i++){
    var arr = [];
    for(var j=1; j<=n; j++){
      arr.push(0);
    }
    chess.push(arr)
  }
  
  
  nQueen(chess,0)
    console.log(count)
  

}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});

// 14. Your friend Angela knows three operations on a string,
//  she can insert a character, delete a character, and replace a character. 
// She wants to convert a string str1 to str2, by using any of the operations any number of times.
//  Return the minimum number of operations required for the same.

function findAsn(str1,str2,m,n){
  if(n==0){
      return m;
  }else if(m==0){
      return n;
  }
  if(str1[m-1]==str2[n-1]){
      return findAsn(str1, str2, m-1, n-1);
  }
   return 1 + Math.min(findAsn(str1,  str2, m, n-1),
                       findAsn(str1,  str2, m-1, n),
                       findAsn(str1,  str2, m-1, n-1)
                       ); 
}