
function reverseNum(number){
    if(number%10 === number){
        return number
    }

    return console.log(number%10), reverseNum(Math.floor(number/10))
     
}

console.log(reverseNum(1234))

let reverseNumber = 0
function reverse2(number){
    if(number === 0){
        return 
    }
    let reminter = number%10
    reverseNumber = reverseNumber * 10 + reminter
    reverse2(Math.floor(number/10))
    
}
reverse2(1234)
console.log(reverseNumber)


function reverse3(n){
    let digits = Math.floor(Math.log10(n))+1
    return helper(n, digits)
}

function helper(n, digits){
    if(n%10 === n){
        return n
    }
    let reminter = n%10
    return reminter * Math.floor(Math.pow(10,digits - 1)) + helper(Math.floor(n/10), digits-1)
}
console.log(reverse3(8956))
