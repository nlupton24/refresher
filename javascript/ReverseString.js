function reverseString(str) {
  // Check if the input is a string
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

    // Split the string into an array of characters, reverse the array, and join it back into a string

    const chars = str.split('');
    let reversedString = '';

    for (let i=chars.length-1 ; i >= 0; i--) {
        reversedString+= chars[i];
    }

    return reversedString;
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript"));
console.log(reverseString("12345"));
console.log(reverseString("a"));
console.log(reverseString(""));