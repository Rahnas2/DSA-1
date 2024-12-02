
function partion(arr, start, end){
    let pivot = arr[end]
    let i = start - 1
    for(j = start; j <= end; j++){
        if(arr[j] < pivot || j == end){
            i++
            if(j != i){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return i 
}

function quickSort(arr, start, end){
    if(start >= end){
        return
    }
    let pi = partion(arr, start, end)
    quickSort(arr,start,pi-1) 
    quickSort(arr,pi+1,end)
    return arr
}


let arr = [1,2,3,4]

let sample = [8,2,5,3,9,4,7,6,1]

console.log('sorted array',quickSort(arr, 0 , arr.length-1))

quickSort(sample, 0 , sample.length-1)
console.log('sample sorted array',sample)


//Time Complexity
//Best case complexity is O(n log n)
//average case complexity is O(n log n)
//worst case complexity is O(n'2)


//space complexity 
//best and average case complexity is O(log n)
//worst case complexity is O(n)


//quick sort not stable