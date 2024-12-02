

function bbls(arr,i=0,j=arr.length-1){
    console.log(arr)
    if(j === 1) return arr

    if(i < j){
        if(arr[i] > arr[i+1]){
            [arr[i], arr[i + 1]] = [arr[i+1], arr[i]]
        }
        return bbls(arr,i+1,j)
    }else{
        return bbls(arr,i=0,j-1)
    }
    
}


const arr = [78,90,56,1,2]

console.log(bbls(arr))