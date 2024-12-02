class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let Total = 0
        for(let i=0;i<key.length;i++){
            Total += key.charCodeAt(i)
            
        }
        
        return Total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        this.table[index] = value
    }

    get(key){
        const index = this.hash(key)
        return this.table[index]
    }

    remove(key){
        const index = this.hash(key)
        this.table[index] = undefined
    }


    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
        return
    }
}

const table = new HashTable(50)
table.hash('iam')
table.set('iam','rahnas')
table.set('age',20)
table.set('place','kannur')
table.set('price',2000)

table.display()


//after handling collision
class HashTable2{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let Total = 0
        for(let i=0;i<key.length;i++){
            Total += key.charCodeAt(i)
        }
        return Total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKey = bucket.find(item => item[0] === key)
            if(sameKey){
                sameKey[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }
    
    get(key){
        const index = this.hash(key)
        const bucket = this.table[index] 
        if(bucket){
            const sameKey = bucket.find(item => item[0] === key)
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKey = bucket.find(item => item[0] === key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey),1)
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
            
        }
    }
}

let test = new HashTable2(50)

test.set('name', 'razal')
test.set('age',20)
test.set('place','malappuram')
test.set('hello','poor')
test.set('name','bilal')
test.display()
console.log('hello',test.get('hello'))
console.log(test.table)