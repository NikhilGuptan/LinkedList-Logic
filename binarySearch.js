// 1. Given n distinct numbers, implement a recursive binary search to check the presence of target number k.

function binaryrecursive(arr,low,high,k){
	if(low>high){
      return "-1";
    }
  var mid = Math.floor((low+high)/2);
  if(arr[mid]==k){
    return "1";
  }else if(arr[mid]<k){
    return binaryrecursive(arr,mid+1,high,k);
  }else if(arr[mid]>k){
  	return binaryrecursive(arr,low,mid-1,k);
  }
} 

//  2. You are given an integerN, find the square root of the given integerN. If the integer is not a perfect square, print the floor value of the given integer.

function squareRoot(x) { 
    if (x == 0 || x == 1){ 
    return x;
    }
    let low = 1; 
    let high = x; 
    let ans; 
    while (low <= high) {
      
        let mideum = (low + high) / 2;
      	let str = ""+mideum;
      	let strValue = "";
      	for(let i=0; i<str.length; i++){
          if(str[i]=="."){
            break;
          }else{
           strValue += str[i];
          }
        }
      	let mid = +strValue;
        if (mid * mid == x){
            return mid;
        }
      
        else if(mid * mid < x) {
            low = mid + 1;
            ans = mid;
        } else{ 
            high = mid-1;
        }
    }
    return ans;
}

//  3. find Lower bound of a number in logn

function lowerBound (arr,k,low,high) {
  if (low > high) {
    return -1
  }
  let mid = Math.floor((low + high) / 2)

  if (k < arr[mid]) {
    return lowerBound(arr,k,low, mid - 1)
  } else if (k > arr[mid]) {
    return lowerBound(arr,k, mid + 1, high)
  } else if(k==arr[mid]){
    	if(arr[mid]==arr[mid-1]){
          return lowerBound(arr,k, low, mid)
        }else{
         return mid;
        }
  }
}

//  4. Upper Bound in LogN

function lowerBound (arr,k,low,high) { 
  let mid = Math.floor((low + high) / 2)

  if (k < arr[mid]) {
    if(k<arr[mid-1]){
      return lowerBound(arr,k,low, mid - 1)
    }else{
     return mid;
    }
  } else if (k > arr[mid]) {
    return lowerBound(arr,k, mid + 1, high)
  } else if(k==arr[mid]){
    	if(k<arr[mid+1]){
          return (mid+1);
        }else{
        
        }
  }
}

// 5. You are given n different numbers and an integer k. Write a program that finds number of times k is present in log(n) time complexity.

function lowerBound(arr,k){
let low = 0;
  let nas = -1;
  let high = arr.length-1;
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    if(arr[mid]==k){
     ans = mid;
      high = mid-1;
    }else if(arr[mid]<k){
     low = mid+1;
    }else{
     high = mid-1;
    }
  }
  return ans
}

function upperBound(arr,k){
let low = 0;
  let nas = -1;
  let high = arr.length-1;
  while(low<=high){
    let mid = Math.floor((low+high)/2);
    if(arr[mid]==k){
     ans = mid;
      low = mid+1;
    }else if(arr[mid]<k){
     low = mid+1;
    }else{
     high = mid-1;
    }
  }
  return ans
}

//  6. For each test case, you are given N integers and K, your task is to write a program that prints "1" (without quotes) 
// if there are 2 integers present in the array whose sum is K.Else print "-1"(without quotes).

function pair(arr,k){
  arr = arr.sort(function(a,b){
   return a-b;
  })
 let i=0; 
  let j=arr.length-1;
  while(i<j){
    if(arr[i]+arr[j]==k){
     	return "1";
    }else if(arr[i]+arr[j]<k){
     i++;
    }else if(arr[i]+arr[j]>k){
     j--;
    }
  }
  return "-1";
}

//  7. Given an array of length n , and it is sorted and rotated at some unknown point, find the minimum element in it.

function findMin(arr,low,high){  
        if (high < low){
            return arr[0];
        }
        if (high == low){
            return arr[low];
        }
        let mid =Math.floor((low+high)/2)
         
        if (mid < high && arr[mid+1] < arr[mid]){
            return arr[mid+1];
        }
        if (mid > low && arr[mid] < arr[mid - 1]){
            return arr[mid];
        }
        if (arr[high] > arr[mid]){
            return findMin(arr, low, mid-1);
        }
     return findMin(arr, mid+1, high);
}

//  8. Given an array of size n, which is strictly increasing and then strictly decreasing in order. Find out the index (0-based) which is the peak of the array.

function findPeak(arr){
 let low = 0;
  let high = arr.length-1;
  while(low<high){
    let mid = Math.floor((low+high)/2);
    if(arr[mid]>arr[mid+1] && arr[mid]>arr[mid-1]){
      return mid;
    }else if(arr[mid]>arr[mid-1] && arr[mid]<arr[mid+1]){
    	low = mid;
    }else{
     high = mid;
    }
  } 
}

//  9. Given a sorted(increasing order) array of length n and is rotated by some value beforehand. Find the index of the target element  K in the rotated array in O(logn) time. If not found print -1.

function search(arr,k){
 let low = 0;
  let high = arr.length-1;
  while(low<=high){
   let mid = Math.floor((low+high)/2);
    if(arr[mid]==k){
     return mid;
    }else if(arr[mid]<=arr[high]){
    	if(k>arr[mid] && k<=arr[high]){
          low = mid+1;
        }else{
         high = mid-1;
        }
    }else{
     	if(k>=arr[low] && k<arr[mid]){
         	high = mid-1;
        }else{
         low = mid+1;
         }
    }
  }
  return "-1";
}

//  10. Ross wants to solve the given mathematical equation which states that, he needs to find the east non-negative integer Xo, that shall make the value of given equation atleast K i.e.,
    // A Xo^2 + B Xo + C >= K
    // He is given A,B,C and K, which form the above equation. He has to answer T independent test cases.
    // Output -1 if there is no possible positive value of Xo

    function findAns(a,b,c,k){
      if(c>=k){
          return -1
      }
      for(let i=1; i<10000; i++){
          let ans = (a*(i**2))+(b*i)+c
          if(ans>=k){
              return i
          }
      }
  }

// 11. 





