// function message(n){
//     if(n < 1){
//         return 0
//     }
//     console.log('hello world')
//      return n + message(n-1)
// }

// console.log(message(5))

function fib(n){
    if(n < 2){
        return n
    }
    return fib(n-1) + fib(n-2)
}

console.log('fib:',fib(6))


function sample(n){
    if(n < 1){
        return 0
    }
    console.log(n)
    sample(n-1)
}

sample(5)

function factorial(n){
    if(n <= 1){
        return 1
    }
    return n * factorial(n - 1)
}

console.log('factorial is: ',factorial(5))