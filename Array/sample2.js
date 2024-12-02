const array = [1,2,true,'hello',{obj1:'rahnas'}]

for(const item of array){
    console.log(item)
}

array.unshift({age:20,place:'kannur',hobbies:['cricket', 'football']})

console.log('array',array[0].hobbies[1])