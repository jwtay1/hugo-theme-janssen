
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

    if (menu.classList.contains('hide')) {
        menu.classList.remove('hide');
    }

    if (!menu.classList.contains('show')) {
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
            menu.classList.add('hide');
            menu.addEventListener("animationend", function () {
                menu.classList.remove('hide');
            })
        }

        html.removeEventListener("click", handleClicks, true);

}

menuToggler.onclick = openNav;

//Theme toggler

const toggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'light') {
        toggle.checked = true;
    }
}

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)

function switchTheme(e) {

    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }

}

toggle.addEventListener('change', switchTheme, false);