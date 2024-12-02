const map = new Map([['a',1], ['b',2]])
map.set('c',3)
map.set('d',3)
console.log(map.has('c'))
map.delete('d')
map.set('',6)
map.set('c',7)
map.set('c',map.get('c')+1)
console.log('map',map)
console.log(map.size)

for(const [key,value] of map){
    console.log('item',value)
}