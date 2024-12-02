
class MaxHeapPriority{
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

    enquee(key, priority){
        const node = {key, priority}
        this.heap.push(node)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length - 1
        while(index > 0){
            let parentIndex = this.getParent(index)
            if(this.heap[parentIndex].priority < this.heap[index].priority){
                this.swap(parentIndex, index)
                index = parentIndex
            }else{
                break
            }
        }
    }

    dequee(){
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

        if(leftChildIndex < this.heap.length && this.heap[largest].priority < this.heap[leftChildIndex].priority){
            largest = leftChildIndex
        }

        if(rightChildIndex < this.heap.length && this.heap[largest].priority < this.heap[rightChildIndex].priority){
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

const pq = new MaxHeapPriority()
pq.enquee('test 1', 1)
pq.enquee('test 2', 5)
pq.enquee('test 3', 3)

console.log(pq.dequee())
console.log(pq.dequee())
console.log(pq.dequee())

console.log(pq.heap)