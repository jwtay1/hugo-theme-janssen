
const menuToggler = document.getElementById("menuToggler");
const html = document.documentElement;
var isNavOpen = false;

/**
 * Closes the sidebar menu if it is open
 * @param {*} ev 
 */
function handleClicks(ev) {
    ev.stopPropagation();

    if (ev.target.id !== "navmenu") {
        closeNav();
    }
}

/**
 * Open the sidebar menu by appending the 'show' class
 */
function openNav() {
    menu = document.getElementById('navmenu');

    if (!menu.classList.contains('show')) {
        console.log("Adding show");
        menu.classList.add('show');
    }
    
    html.addEventListener("click", handleClicks, true);

}

/**
 * Closes the sidebar menu by removing the 'show' class
 */
function closeNav() {

        console.log("Close")

        menu = document.getElementById('navmenu');

        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }

        html.removeEventListener("click", handleClicks, true);

}

menuToggler.onclick = openNav;

//Theme toggler

const toggle = document.getElementById("theme-toggle");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)

toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};
