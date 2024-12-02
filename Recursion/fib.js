function sample(n){
    if(n < 2){
        return n
    }
    return sample(n-1) + sample(n-2)
}

const ans = sample(4)

console.log('ans: ',ans)