
const conditions = {
    "cold": "HTML FILES/cold.html",
    "medicines" : "HTML FILES/medicinelist.html",
    
    "medicine" : "HTML FILES/medicinelist.html",
    "chestoncold" : "HTML FILES/Products/chestoncold.html",
    
    "coldover P liquid" : "HTML FILES/Products/coldoverp.html",
    
    "coldover orange" : "HTML FILES/Products/coldover orange.html",
    
    "coldmine" : "HTML FILES/Products/coldmine.html",
    
    "dcold" : "HTML FILES/Products/dcold.html",
    
    "namcold" : "HTML FILES/Products/namcold.html",
    
    "sumocold" : "HTML FILES/Products/sumocold.html",
    
    "chestoncold liquid" : "HTML FILES/Products/chestonliq.html"
};

// Function to handle search when clicking the button or pressing Enter
function search() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    if (conditions.hasOwnProperty(query)) {
        window.location.href = conditions[query];
    } else {
        alert("No matching search found.");
        
        window.location.href = "HTML FILES/globals.html";

    }
}

// Allow the search to be triggered when the Enter key is pressed
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        search();
    }
});
