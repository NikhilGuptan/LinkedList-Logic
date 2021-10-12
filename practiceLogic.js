// 1. Given an array of integers and a target value, find the sum of three integers that is closest to the target value.

// If there are more than one values, answer the largest value.

function findSum(arr,k){
    if(arr.length<=2){
        return 0;
    }
    arr = arr.sort((a,b)=>{
        return a-b;
    })
    let max = 10000000;
        
    for(let i=0; i<arr.length-2; i++){
        let first = i+1;
        let last = arr.length-1
        while(first<last){
            let total = arr[i]+arr[first]+arr[last];
            if(Math.abs(k-total)<Math.abs(k-max)){
                max = total;
            }
            if(total>k){
                last--;
            }else{
                first++;
            }
        }
    }
    return max
}

//  2. You are given an array of n elements and an integer k, you need to rotate the array by k units towards right direction ( => ).

function rotate(arr,k){
    k = k%arr.length;
    let str1 = "";
    let str2 = "";
    let v = arr.length-k;
    
    for(let i=v; i<arr.length; i++){
        str1 += arr[i]+" ";
    }
    for(let i=0; i<v; i++){
        str2 += arr[i]+" "
    }
    
    return (str1+str2)
}

//  3. Given a array of N 32 bit integers. You need to find product of array for each i without considering ith element.
//  where 0 <= i <= n-1 . See sample test case for better understanding.

function find(arr){
    let ans = "";
    let total = 1;
    
    for(let i=0; i<arr.length; i++){
        total*=arr[i]
    }
    
    for(let i=0; i<arr.length; i++){
        let a = total*Math.pow(arr[i],-1) 
        ans += a+" "
    }
    return ans
}

//  4. Given an array A of N positive numbers. The task is to find the position where equilibrium first occurs in the array.
//  Equilibrium position in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

function find(arr){
    
    let tSum = 0;
    let sum = 0;
    
    for(let i=0; i<arr.length; i++){
        tSum += arr[i];
    }
    
    for(let i=0; i<arr.length; i++){
        tSum -= arr[i];
        if(tSum==sum){
            return i+1;
        }else{
            sum += arr[i]
        }
    }
    return "-1"
}

