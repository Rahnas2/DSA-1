const set = new Set([1,3,5,8])
console.log('set',set)


console.log(set.has(5))
console.log(set.size)
set.delete(5)
console.log(set.size)
console.log(set.has(5))

let obj1 = {age:20}

set.add(obj1)
set.add(obj1)
console.log('obj1: ',set.has(obj1))

for(const item of set){
    console.log('set items',item)
}

