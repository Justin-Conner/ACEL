// Update your JavaScript file with showMenu and hideMenu functions
// You can define these functions based on your specific requirements

function showMenu() {
    var menu = document.getElementById("servicesMenu");
    if (menu) {
        // Logic to display the menu when the mouse enters the button
        console.log('Mouse entered, show menu');
        menu.style.display = "block";
        // Add your code to display the menu or perform other actions
    }
}
  
function hideMenu() {
    var menu = document.getElementById("servicesMenu");
    if (menu) {
        // Logic to hide the menu when the mouse leaves the button
        console.log('Mouse left, hide menu');
        menu.style.display = "none";
        // Add your code to hide the menu or perform other actions
    }
}
