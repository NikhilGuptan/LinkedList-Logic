let n = 5
let q = [[1,2,100],[2,5,100],[3,4,100]];

function arrayManipulation(n, q) {
    let arr = []
    for(let i=0; i<n; i++){
        arr[i] = 0
    }
    // console.log(arr);
    for(let i=0; i<q.length; i++){
        for(let j=q[i][0]; j<=q[i][1]; j++){
            arr[j-1] += q[i][2]
        }    
    }
    return arr
}

console.log(arrayManipulation(n,q))