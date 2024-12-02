

function selectionSort(arr,i=0){
    if(i === arr.length-1) return arr
    
    let minIndex = i

    for(let j=i+1;j<arr.length;j++){
        if(arr[minIndex] > arr[j]){
            minIndex = j
        }
    }

    if(minIndex != i){
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }

    return selectionSort(arr,i+1)
    
}


const arr = [7,7,0,45,8,2]

console.log('selction sort: ',selectionSort(arr))



function selectionSort2(arr,i=0,j=arr.length-1){
    if(i === j-1) return arr

    let minIndex = i
    
}