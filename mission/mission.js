// mission.js

// Select the theme selector element
const themeSelector = document.getElementById('theme-selector');

// Function to change the theme
function changeTheme() {
    const body = document.body;

    // Check the selected option
    if (themeSelector.value === 'dark') {
        body.classList.add('dark'); // Add dark class
    } else {
        body.classList.remove('dark'); // Remove dark class
    }
}

// Add event listener for change event
themeSelector.addEventListener('change', changeTheme);
