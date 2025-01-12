
const themeSelector = document.getElementById('theme-selector');


function changeTheme() {
    const body = document.body;

    
    if (themeSelector.value === 'dark') {
        body.classList.add('dark'); 
    } else {
        body.classList.remove('dark'); 
    }
}


themeSelector.addEventListener('change', changeTheme);