
const menuCheckbox = document.getElementById('check');

// Function to close the submenu for small screens
function closeSubMenu() {
    menuCheckbox.checked = false; // Uncheck the checkbox
}

// Check for scroll and turn off the menu
window.addEventListener('scroll', closeSubMenu);
