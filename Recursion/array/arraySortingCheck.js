

function sortingCheck(arr,i=0){
    if(i === arr.length-1) return true
   if(arr[i] > arr[i+1]) return false
   i++
   return sortingCheck(arr,i)
}

const arr = [1,2,4,3,5,6,7,9,8]

console.log(sortingCheck(arr))


function sortCheck2(arr, i=0){
    if(i === arr.length-1) return true

    return arr[i] < arr[i + 1] && sortCheck2(arr, i+1)
}


console.log('result from second method: ',sortCheck2(arr))


//here the second algorithm is best (sortCheck2)