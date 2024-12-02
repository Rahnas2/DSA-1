
function mergeSort(arr){
    if(arr.length <= 1) return 

    let mid = Math.floor(arr.length / 2)

    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    mergeSort(left)
    mergeSort(right)

    return merge(left,right,arr)
}

function merge(left, right, arr){
    let leftSize = left.length
    let rightSize = right.length

    i = 0
    l = 0
    r = 0

    while(l < leftSize && r < rightSize){
        if(left[l] < right[r]){
            arr[i] = left[l]
            l++
        }else{
            arr[i] = right[r]
            r++
        }
        i++
    }

    while(l < leftSize){
        arr[i] = left[l]
        l++
        i++
    }

    while(r < rightSize){
        arr[i] = right[r]
        r++
        i++
    }

    return arr
}

const arr = [38, 27, 43, 10]

console.log(mergeSort(arr))


//Time complexity
//Best case O(n log n) , when the array is already sorted 
//Average case O(n log n), when the array is randomly  ordered
//worst case O(n log n), when the array is sorted in reverse order

//space complexity
//O(n), aditional space is required for the temperary array used during merging


//merge sort is stable sorting algorithm, which means it maintain the relative order of equal element in the input array