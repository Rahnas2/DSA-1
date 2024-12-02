class MyArray {
    constructor(){
        this.length = 0
        this.data = {}
    }

    push(name){
        this.data[this.length] = name
        this.length++
    }

    get(index){
        return this.data[index]
    }

    pop(){
        delete this.data[this.length - 1]
        this.length--
        return 
    }

    shift(){
        for(let i=0;i<this.length;i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
        return 
    }

    unshift(name){
        for(let i=this.length - 1;i>=0;i--){
            this.data[i + 1] = this.data[i]
        }
        this.data[0] = name
        return
    }

    deleteByIndex(index){
        for(let i = index;i<this.length - 1;i++){
            this.data[index] = this.data[index + 1]
        }
        delete this.data[this.length - 1]
        return 
    }

}



//reverse a string
function reverse(str){
    let len = str.length
    let newStr = ''
    for(let i=len - 1;i>=0;i--){
        newStr+=str[i]
    }
    return newStr
}

function palindromeCheck(str){

    if(str.split('').reverse().join('') == str){
        return true
    }
    else{
        return false
    }
    // const reverseArray = reverse(str)
    // if(reverseArray === str){
    //     return true
    // }
    // return false
}
function reverseInt(number){
    let theNum = number
    for(i=0;i<number.length;i++){
        let temp = number[i]
        number[i] = number[number.length - 1]
        number[number.length - 1] = number[i]
    }
    if(theNum == number.join('')){
        return true
    }else{
        false
    }
}
console.log(reverseInt(1234))
console.log(palindromeCheck('hello'))
console.log(reverse('Apple'))
