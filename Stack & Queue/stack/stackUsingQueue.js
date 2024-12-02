class stack {
    constructor(){
        const queue1 = []
    }

    push(value){
        this.queue1.push(value)
        for(i=0;i<this.queue1.length-1;i++){
            this.queue1.push(this.shift())
        }
    }

    pop(){
        return this.queue1.shift()
    }

    peek(){
        return this.queue1[0]
    }
}


//using two quese

class stack2 {
    constructor(){
        this.queue1 = []
        this.queue2 = []
    }

    push(value){
        this.queue1.push(value)
    }

    pop(){
        while(this.queue1.length > 1){
            this.queue2.push(this.queue1.shift())
        }

        const popped = this.queue1.shift()

        [this.queue1, this.queue2] = [this.queue2, this.queue1]

        return popped
 
    }

    peek(){
        return this.queue1[this.queue1.length-1]
            
    }
}