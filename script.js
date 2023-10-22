// JavaScript code in script.js
const conditions = {
    "cold": "HTML FILES/cold.html",
    "fever": "HTML FILES/fever.html",
    "medicines" : "HTML FILES/medicinelist.html",
    
    "medicine" : "HTML FILES/medicinelist.html"
};

// Function to handle search when clicking the button or pressing Enter
function search() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    if (conditions.hasOwnProperty(query)) {
        window.location.href = conditions[query];
    } else {
        alert("No matching condition found.");
        
        window.location.href = "HTML FILES/globals.html";

    }
}

// Allow the search to be triggered when the Enter key is pressed
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    // Number 13 represents the Enter key
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the search function
        search();
    }
});
