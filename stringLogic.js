// 1. You are given a string A, of length N.
// You have to find the minimum number of adjacent swaps required to make the string palindrome.
// If it is impossible, return -1.

function countPlindrom(strArray){
    let str = []
    for(let i=0; i<strArray.length; i++){
        str.push(strArray[i])
    }
    let n = str.length;
    let count = 0
    for(let i=0; i<Math.floor(n/2); i++){
        let left = i;
        let right = n-left-1;
        while(left<right){
            if(str[left]==str[right]){
                break;
            }else{
                right--;
            }
        }
        if(left==right){
            return -1;
        }
        for(let j=right; j<n-left-1; j++){
          let temp = str[j]
          str[j] = str[j+1]
          str[j+1] = temp
          count++;
        }
    }
    return count;
}

// 2. A string K is said to be disjointed, if the string can be broken down into two parts, not necessarily equal, such that the two parts are equal to the strings A and B.
// You are free to rearrange the string K any way you like, before it can be broke.
// Given a string K, and two strings A and B, find if the strings K is disjointed.

function find(str,a,b){
    let obj = {}
    
    for(let i=0; i<str.length; i++){
        if(obj[str[i]]){
            obj[str[i]] = obj[str[i]]+1
        }else{
            obj[str[i]] = 1
        }
    }
    for(let i=0; i<a.length; i++){
        if(obj[a[i]] && obj[a[i]]>=1){
            obj[str[i]] = obj[str[i]]-1
        }else{
            return "false"
        }
    }
    for(let i=0; i<b.length; i++){
        if(obj[b[i]] && obj[b[i]]>=1){
            obj[str[i]] = obj[str[i]]-1
        }else{
            return "false"
        }
    }
    return "true"
}

// 3. 