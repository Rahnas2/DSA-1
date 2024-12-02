
function insertionSort(arr){
    for(i=1;i<arr.length;i++){
        let temp = arr[i]
        let j = i-1
        while(j >= 0 && arr[j] < temp){
            arr[j+1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }
    return arr
}


let arr = [89,12,67,90,23,90]
let sample = [9,8,7,6,5,4,3,2,1]

console.log('sample sorted array',insertionSort(sample))

console.log('sorted array',insertionSort(arr))



//insertion sort is stable sorting algorithm

//Time complexity
//worst and average case complexity is O(n'2)
//best case complexity is O(n)
//best case occurs the array is already sorted