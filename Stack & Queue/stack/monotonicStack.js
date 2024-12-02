//increadning stack 

function incresingStack(nums){
    let stack = []
    for(i=0;i<nums.length;i++){
        while(stack.length > 0 && stack[stack.length-1] > nums[i]){
            stack.pop()
        }
        stack.push(nums[i])
    } 
    return stack 
}


console.log('stack : ',incresingStack([0,8,1,2,4,8,5,0,90]))

function decresingStack(nums){
    let stack = []
    for(i=0;i<nums.length;i++){
        while(stack.length > 0 && stack[stack.length-1] < nums[i]){
            stack.pop()
        }
        stack.push(nums[i])
    }
    return stack  
}


console.log('stack2 : ',decresingStack([0,8,1,2,4,8,5,0,90]))