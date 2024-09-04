// Function to validate a URL using regex
function validateURL(url) {
    const regex = /^(https?:\/\/)[\w.-]+(\.[a-z]{2,})$/i;

    if (regex.test(url)) {
        return "Valid URL";
    } else {
        return "Invalid URL";
    }
}

// Handle button click event
document.getElementById('validateButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    const result = validateURL(urlInput);
    document.getElementById('result').textContent = result;
});
