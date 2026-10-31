function findDuplicates(arr) {
    const duplicates = new Set();
    const seen = new Set();

    for (const num of arr) {   
        if (seen.has(num)) {
            duplicates.add(num);
        }
        seen.add(num);
    }

    return [...duplicates].sort((a, b) => a - b);

}

console.log("Find duplicates in array");
console.log(findDuplicates([1, 2, 3, 2, 4, 1]));
console.log(findDuplicates([5, 5, 5, 5]));
console.log(findDuplicates([1, 2, 3, 4]));
console.log(findDuplicates([]));
console.log(findDuplicates([7, 8, 7, 9, 8]));