//Find the largest number in array

function fundLargestNumberInArray(params) {

    var maximum = 0;
    
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element > maximum)
            {
                maximum = element;
            }
            
    }

    return maximum;    
}   