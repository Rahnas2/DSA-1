
const array = [1,2,3,4,5,6,7,8,9]

//retrun index of 4
function FindIndex(value){
for(i=0;i<array.length;i++){
    if(array[i] === value){
        return console.log(`index of ${value} = ${i}`)
    }
}
return -1
}

FindIndex(4)
const arr = [1,2,3,4,5]
function binarySearch(value){
    let startIndex = 0 
    let endIndex = arr.length - 1
    while(startIndex <= endIndex){
        let middleIndex = Math.floor((startIndex + endIndex) / 2)
        if(value == arr[middleIndex]){
            return middleIndex
        }
        if(value < arr[middleIndex]){
            endIndex = middleIndex - 1
        }
        else{
            startIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch(5))