// Variable storing the input string
let input = "Hello, World!";

// Function to reverse the string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Using setTimeout to delay the execution of the reverseString function by 2 seconds
setTimeout(function() {
    let reversedString = reverseString(input);
    document.getElementById("output").textContent = "Reversed String: " + reversedString;
}, 2000);
