// 1. fibonacci  series

let value = 6
let dp = []
for(let i=0; i<value+1; i++){
    dp.push(-1)
}
dp[0] = 0
dp[1] = 1

function fibonachi(n){
    if(dp[n]!=-1){
        return dp[n]
    }else{
        dp[n] = fibonachi(n-1)+fibonachi(n-2)
    }
    return dp[n]
}
console.log(fibonachi(value));

//  2. In Masai, they have a very strange monetary system.
// Each Masaian gold coin has an integer number written on it. A coin n can be exchanged in a bank into three coins: n/2, n/3 and n/4. But these numbers are all rounded down (the banks have to make a profit).
// You can also sell Masaian coins for Indian Rupees. The exchange rate is 1:1. But you can not buy Masaian coins.
// You have one gold coin. What is the maximum amount of Indian Rupees you can get for it?

let obj = {}

function masai(a){
    if(a<=0){
        return 0;
    }
    if(a==1 || a==2 || a==3 || a==4){
        return a
    }
    
    if(obj[a]){
        return obj[a]
    }else{
        obj[a]= Math.max(a,masai(Math.floor(a/2))+masai(Math.floor(a/3))+masai(Math.floor(a/4)))
    return obj[a]
    }
}

// 3. (Recursive & Backtracking based solution to Subset sum problem) You are given a set of numbers and a sum ‘S’.
//  Your task is to find a subset from the given set of numbers such that the sum of elements in the subset is equal to sum ‘S’.

function findParty(arr,n,k){
    if(k==0){
        return 1
    }
    if(n==0 && k>0){
        return 0
    }
    if(k<0){
        return 0
    }
    
    return Math.max(findParty(arr,n-1,k),findParty(arr,n-1,k-arr[n]))
}

// 4. A robber is planning to rob houses along a street. Each house has a certain amount of gold stashed,
//  the only constraint stopping you from robbing each of them is that adjacent houses have a very smart security system
//  connected andit will automatically alert the police if two adjacent houses were robbed  on the same night.

function findAns(arr,n){
    if(n==0){
        return 0;
    } 
    if(n==1){
        return arr[0]
    }
    if(n==2){
        return Math.max(arr[0],arr[1])
    }
    let dp = new Array(n);
    
    dp[0] = arr[0]
    dp[1] = Math.max(arr[0],arr[1]);
    
    for(let i=2; i<n; i++){
        dp[i] = Math.max(arr[i]+dp[i-2],dp[i-1]);
    }
    return dp[n-1]
 }

//  5. You are given n trees and their heights.
//  Your task is to write a program that calculates the maximum number of trees whose height is in increasing order. They need not be in continuous manner.

function findMax(arr){
    let dp = new Array(arr.length)
    dp[0] = 1;
    
    for(let i=1; i<arr.length; i++){
        dp[i] = 1;
        for(let j=0; j<i; j++){
            if(arr[j]<arr[i]){
                dp[i] = Math.max(dp[i],dp[j]+1)    
            }
        }
    }
    let max = dp[0]
    for(let i=1; i<dp.length; i++){
        if(dp[i]>max){
            max = dp[i]
        }
    }
    return max
}