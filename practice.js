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
// console.log(dp);