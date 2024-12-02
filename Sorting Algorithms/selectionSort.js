function selectionSort(arr){
    let len = arr.length
    for(i = 0;i< len - 1;i++){
        let minIndex = i
        for(j = i+1;j< len; j++){
           if(arr[j] < arr[minIndex]){
            minIndex = j
           }
        }
        if(minIndex != i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
        
    }
    return arr
}

let arr = [64,25,12,23,11]
console.log('sorted array',selectionSort(arr))

let sample = [4, 1, 3, 9, 7]
console.log('sample sorted array',selectionSort(sample))

let sample2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log('sorted sample 2',selectionSort(sample2))


//selection sort is not stable sorting algorithm 

//Time complexity 
//worst and best case = o(n'2)
//space complexity = o(1)