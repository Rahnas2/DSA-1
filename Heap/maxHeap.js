class MaxHeap{

    constructor(){
        this.heap = []
    }

    getParent(index){
        return Math.floor((index - 1) / 2)
    }

    leftChild(index){
        return 2 * index + 1
    }

    rightChild(index){
        return 2 * index + 2
    }

    swap(index1, index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
       let index = this.heap.length-1

       while(index > 0){
        let parentIndex = this.getParent(index)
        if(this.heap[parentIndex] < this.heap[index]){
            this.swap(parentIndex, index)
            index = parentIndex
        }else{
            break
        }
       }
    }

    removeMax(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()

        const max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0) 
        return max   
    }

    heapifyDown(index){
        let largest = index

        let leftChildIndex = this.leftChild(index)
        let rightChildIndex = this.rightChild(index)

        if(leftChildIndex < this.heap.length && this.heap[largest] < this.heap[leftChildIndex]){
            largest = leftChildIndex
        }

        if(rightChildIndex < this.heap.length && this.heap[largest] < this.heap[rightChildIndex]){
            largest = rightChildIndex
        }

        if(largest != index){
            this.swap(largest, index)
            this.heapifyDown(largest)
        }
    }

    peek(){
        return this.heap[0]
    }

}

const heap = new MaxHeap()

heap.insert(3)
heap.insert(10)
heap.insert(12)
heap.insert(8)
heap.insert(2)
heap.insert(14)

console.log(heap.peek())

console.log(heap.removeMax())

// console.log(heap.removeMax())
// console.log(heap.removeMax())
// console.log(heap.removeMax())


console.log('heap: ',heap.heap)