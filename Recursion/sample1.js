
let count = 1

// function hello(){
//     console.log('hello',count++)
//     if(count <= 100) hello()

// }

// hello()

// function a (){
//     return 'hello ' + b()
// }

// function b(){
//     return 'how are' + c()
// }

// function c(){
//     return 'you' 
// }

// console.log('a:',a())

function reverseString(str){
    if(str == ''){
       return ''
    }
    
    return reverseString(str.slice(1)) + str[0]
    
}

const str = 'hello'


console.log('hello',reverseString(str))
// reverseString()

let value = 12
let newVal = []
