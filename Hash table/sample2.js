
class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = 0
    }

    _hash(key){
        let hashIndex = 0
        for(let i=0;i<key.length;i++){
            hashIndex += key.charCodeAt(i)
        }
        return hashIndex % this.table.length
    }

    set(key,value){
        let index = this._hash(key)
        if(this.table[index]){
            for(let i=0;i<this.table[index].length;i++){
                if(this.table[index][i][0] === key){
                    this.table[index][i][1] = value
                    return
                }
            }
            this.table[index].push([key,value])
        }else {
            this.table[index] = [[key,value]]
        }
        this.size++
    }

    get(key){
        let index = this._hash(key)

        if(this.table[index]){
            for(let i=0;i<this.table[index].length;i++){
                if(this.table[index][i][0] === key){
                    return this.table[index][i][1]
                }
            }
        }
        return undefined
    }

    remove(key){
        let index = this._hash(key)

        if(this.table[index]){
            for(let i=0;i<this.table[index].length;i++){
                if(this.table[index][i][0] === key){
                    this.table[index].splice(i,1)
                    this.size--
                }
            }
        }else{
            return 'not found'
        }
    }

    display(){
        this.table.forEach((values, index) =>{
            const items = values.map(([key, value]) => `[ ${key}: ${value} ]` )
            console.log(`${index}: ${items} `)
        })
    }
}

const sample = new HashTable(127);

sample.set("France", 111);
sample.set("Spain", 150);
sample.set("ǻ", 192);


sample.display();



sample.remove("Spain");
sample.display();
