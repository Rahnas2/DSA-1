
function happy(n){
    if(n == 1) return true
    if(n < 10) return false
    const newArr = n.toString().split('')
    let square = 0
    for(let i of newArr){
       square += Number(i) * Number(i)
    }
    return happy(square)
}
const ans = happy(19)
console.log(ans)