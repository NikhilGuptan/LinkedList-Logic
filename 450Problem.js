//  1. Union of two arrays 

function doUnion(a, b){       
    let obj = {}
    let count = 0
    for(let i=0; i<a.length; i++){
        if(obj[a[i]]){
            
        }else{
            obj[a[i]] = 1
        }
    }
    for(let i=0; i<b.length; i++){
        if(obj[b[i]]){
            
        }else{
            obj[b[i]] = 1
        }
    }
    for(let i in obj){
        count++
    }
    return count
}

// 2. Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.

var findDuplicate = function(nums) {
    nums.sort((a,b)=>{
        return a-b;
    })
    let ans;
    for(let i=0; i<nums.length; i++){
        if(nums[i]==nums[i+1]){
            return nums[i]
        }
    }
};

//  3. You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
    if(prices.length<=1){
        return 0
    }
     let ans = []
     for(let i=0; i<prices.length; i++){
         let small= 0;
         // let s = 0
         for(let j=i+1; j<prices.length; j++){
             if(prices[i]<prices[j] && prices[j]-prices[i]>small){
                 small = prices[j]-prices[i]
             }
         }
         ans.push(small)
     }
     let a = ans[0]
     for(let i=1; i<ans.length; i++){
         if(ans[i]>a){
             a = ans[i]
         }
     }
     return a
 };

//   4. 