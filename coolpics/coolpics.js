// Select the menu button and menu
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

// Function to toggle the menu visibility
function toggleMenu() {
    menu.classList.toggle("hide");  // Toggle the 'hide' class
}

// Add click event listener to the menu button
menuButton.addEventListener("click", toggleMenu);

// Function to handle window resizing
function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide"); // Show menu on larger screens
    } else {
        menu.classList.add("hide"); // Hide menu on smaller screens
    }
}

// Call the function immediately to set the correct state
handleResize();

// Add event listener for resize events
window.addEventListener("resize", handleResize);

// Modal functionality
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
              <button class="close-viewer">X</button>
              <img src="${pic}" alt="${alt}">
            </div>`;
}

function viewHandler(event) {
    // Ensure the clicked element is an image
    if (event.target.tagName === 'IMG') {
        // Get the src attribute of the clicked image
        const imageSrc = event.target.src;

        // Split the src to get the base name of the image
        const imageParts = imageSrc.split("-");
        const fullImageSrc = imageParts[0] + "-full.jpeg"; // Adjust the naming if necessary

        // Insert the viewerTemplate into the top of the body element
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImageSrc, event.target.alt));

        // Add a listener to the close button (X) that calls closeViewer when clicked
        const closeButton = document.querySelector('.close-viewer');
        closeButton.addEventListener('click', closeViewer);
    }
}


function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.remove(); // Remove the viewer div from the DOM
}

// Set up event listener for gallery clicks
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    gallery.addEventListener('click', viewHandler); // Listen for click events on the gallery
});
