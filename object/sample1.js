let obj1 = {
    name: 'rahnas',
    age: 20,
    'place': 'kannur'
}
obj1.hobby = 'cricket'
obj1['gender'] = 'male'

delete obj1.place
console.log('obj1',obj1)

console.log('name:',obj1.name)

console.log('age:',obj1['age'])

console.log(Object.keys(obj1))
console.log(Object.entries(obj1))

// console.log('obj first:',obj1)

// obj1 = Object.values(obj1)

// console.log('obj last:',obj1)

const obj = {
    b: 2,
    a: 1,
    10: "ten",
    2: "two"
  };



for(const key in obj){
    console.log('keys: ',key)
}

const objWithPrototype = {};
console.log('prototype: ', Object.getPrototypeOf(objWithPrototype));