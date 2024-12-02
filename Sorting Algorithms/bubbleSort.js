
function bubbleSort(arr){
    let swapped;
    for(i=0;i<arr.length;i++){
     swapped = false
     for(j=0; j<arr.length - i - 1; j++){
         if(arr[j] > arr[j+1]){
             [arr[j] , arr[j+1]] = [arr[j+1], arr[j]]
             swapped = true
         }
     }
     if(!swapped){
         break
     }
    }
    return arr
 }
 
 const arr =  [ 1, 4, 2, 5, -2, 3 ]
 
 const strinArr = ['d','ab','ba','aa','c']
 
 console.log('sorted array',bubbleSort(arr))
 
 console.log('sorted string',bubbleSort(strinArr));
 
 

 
 
 //stable sorting algoritm
 
 //Time complexity
 //worst and average case = O(n'2)
 //best case = O(n)
 //best case occurs the array is already 