

function sum(number){
    if(number < 1) return 0
    
    return number % 10 + sum(Math.floor(number/10))
}

console.log(sum(1342))