
const arr = [7,1,8,8,4,0,2]

function find(arr, target, i=0){
    if(i === arr.length) return false

    return arr[i] === target || find(arr, target, i+1)
}

console.log(find(arr,2))

function findIndex(arr,target,i=0){
    if(i === arr.length) return false

    if(arr[i] === target) return i

    return findIndex(arr, target, i+1)
}

console.log(findIndex(arr,8))

function findIndexFromLast(arr, target, i = arr.length-1){
    if(i === -1) return false

    if(arr[i] === target) return i

    return findIndexFromLast(arr, target, i-1)
}

console.log(findIndexFromLast(arr,8))


function findAllIndex(arr, target, i=0, ans=[]){
    if(i === arr.length) return ans
    
    if(arr[i] === target){
        ans.push(i)
    }
    
    return findAllIndex(arr,target,i+1,ans)
}

console.log(findAllIndex(arr,8))



//without passing the empty in the argument

function findAllIndex2(arr,target,i=0){
    let ans = []
    if(i === arr.length) return ans

    if(arr[i] === target){
        ans.push(i)
    }

    let returnedArr = findAllIndex2(arr,target,i+1)
    return returnedArr.concat(ans)
    

}

console.log('witout passing ans array in argument',findAllIndex2(arr,8))

function findAllIndex3(arr,target,i=0){
    if(i === arr.length) return []

    let result = findAllIndex3(arr,target,i+1)

    if(arr[i] === target){
        result.unshift(i)
    }
    return result
}

console.log('witout passing ans array in argument third  approach',findAllIndex3(arr,8))