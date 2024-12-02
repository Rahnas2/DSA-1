
const str = 'sample'

function reverse(str){
    let newStr = ''
    for(i=str.length-1;i>=0;i--){
        newStr += `${str[i]}`
    }
    return newStr
}

console.log('ans: ',reverse(str))

function sortStr(str){
    let newStr = str.split('')
    newStr.sort()
    return newStr
}

console.log('ans: ',sortStr(str))

function palindromeCheck(str){

    if(str === reverse(str)){
        return true
    }
    return false
}

console.log('is palindrome: ',palindromeCheck(str))