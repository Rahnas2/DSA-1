

function mergeSort(arr){
    if(arr.length === 1) return arr

    let mid = Math.floor(arr.length / 2)

    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

function merge(left, right){
    let sorted = []

    let l = 0  //left array
    let r = 0  //right array
    let i = 0  //sorted array

    while(l < left.length && r < right.length){
        if(left[l] < right[r]){
            sorted[i] = left[l]
            l++
        }else{
            sorted[i] = right[r]
            r++
        }
        i++
    }

    while(l < left.length){
        sorted[i] = left[l]
        l++
        i++
    }

    while(r < right.length){
        sorted[i] = right[r]
        l++
        r++
    }

    return sorted
}

const arr = [5,4,3,2,1]
console.log('sorted array: ',mergeSort(arr))