
// function countNumbers(n,val,count){
    
//     if(n%10 === n){
//         return count
//     }
//     if(n%10 === val){
//         count++
//     }
//     countNumbers(Math.floor(n/2),val,count)
// }




function countNumber(n,val){
    let digits = Math.floor(Math.log10(n))+1
    let count = 0
    return helper(n,val,digits,count)
}

function helper(n,val,digits,count){
    if(digits === 0) return count
    if(n%10 === val){
        count++
    }
    return helper(Math.floor(n/10),val,digits-1,count)
}

console.log('count numbers',countNumber(78067088,0))