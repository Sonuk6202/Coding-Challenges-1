// Function to validate LinkedIn profile URLs using regex
function validateLinkedInURL(url) {
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}$/;

    if (regex.test(url)) {
        return "Valid LinkedIn profile URL";
    } else {
        return "Invalid LinkedIn profile URL";
    }
}

// Handle button click event
document.getElementById('validateButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    const result = validateLinkedInURL(urlInput);
    document.getElementById('result').textContent = result;
});
