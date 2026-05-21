// Display the current date on load
document.addEventListener('DOMContentLoaded', () => {
    const dateElement = document.getElementById('date-display');
    const now = new Date();
    dateElement.innerText = "Broadcasting Live: " + now.toDateString();
    
    console.log("TBA News Network script initialized.");
});

// Simple button function
function alertUser() {
    alert("Full story coming soon to TBA News Network!");
}
