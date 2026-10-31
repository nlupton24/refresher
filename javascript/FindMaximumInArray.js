//Find the largest number in array

function findLargestNumberInArray(array) {

    let maximum = array[0];
    
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element > maximum)
            {
                maximum = element;
            }            
    }

    return maximum;    
}  

console.log("Find the largest number in array");

console.log(findLargestNumberInArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(findLargestNumberInArray([-1, -2, -3, -4, -5, -6, -7, -8, -9]));
console.log(findLargestNumberInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9])); 
console.log(findLargestNumberInArray([-1, -2, -3, -4, -5, -6, -7, -8, -9, 1, 2, 3, 4, 5, 6, 7, 8, 9])); 
