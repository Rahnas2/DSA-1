

function RBS(arr, target, start, end = arr.length){
    if(start > end){
        return -1
    }

    let mid = Math.floor((start + end) / 2) 
    console.log('mid',mid)
    if(target === arr[mid]) return mid
    
    if(arr[start] <= arr[mid]){
        if(target >= arr[start] && target < arr[mid]){
            return RBS(arr, target ,start, mid-1)
        }else{
          return RBS(arr, target, mid+1, end)
        }
    }

    if(target > arr[mid] && target <= arr[end]){
        return RBS(arr, target, mid+1, end)
    }

    return RBS(arr, target, start, mid-1)
}



const arr = [5,6,7,8,9,10,1,2,3]

console.log('index = ',RBS(arr, 11,0))