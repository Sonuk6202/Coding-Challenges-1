// Variable storing the delay time in seconds
let delayInSeconds = 3;

// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
}

// Function to update the progress every second
function updateProgress() {
    let timeRemaining = delayInSeconds;
    let intervalId = setInterval(function() {
        if (timeRemaining > 0) {
            document.getElementById("progress").textContent = `Time remaining: ${timeRemaining} seconds`;
            timeRemaining--;
        } else {
            clearInterval(intervalId);
            document.getElementById("progress").textContent = "Generating random number...";
            let randomNumber = generateRandomNumber();
            document.getElementById("result").textContent = `Generated Random Number: ${randomNumber}`;
        }
    }, 1000);
}

// Start the progress update
updateProgress();
