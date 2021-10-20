//  1. In Masai, they have a very strange monetary system.
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

// 2. 