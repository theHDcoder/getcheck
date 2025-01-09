// script.js

// This function gets the last string after '=' in the URL query string
function getLastStringFromURL() {
  const urlParams = new URLSearchParams(window.location.search); // Get query parameters
  const name = urlParams.get("name"); // Get the 'name' parameter

  return name || "No name provided"; // Return the name, or a fallback message
}

// This function updates the h1 tag with the extracted value
function displayName() {
  const name = getLastStringFromURL(); // Get the name from the URL
  document.getElementById("name-display").textContent = name; // Set the text in the h1 tag
}

// Call the displayName function when the page loads
window.onload = displayName;
