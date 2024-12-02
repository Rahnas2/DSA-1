
function search(arr,value,start = 0, end = arr.length){
    if(start > end){
        return -1
    }
    mid = Math.floor((start + end) / 2)
    if(arr[mid] == value){
        return mid
    }
    if(value < arr[mid]){
        let end = mid-1
        return search(arr, value , start , end = end)
    }else{
        let start = mid+1
        return search(arr ,value ,start = start, end)
    }
}

let arr = [1,4,6,7,8,9,10]
const ans = search(arr,-5)
console.log(ans)