//Initialize the current page theme
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

else {

    //See if there's a preferred theme. If not, default to light.
    var preferredTheme = (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    document.documentElement.setAttribute('data-theme', preferredTheme);
}

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

//These run after the page has loaded
window.onload = function () {

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

    //Table of contents toggler
    window.showTOC = function showTOC() {
        var toc = document.getElementById("toc");
        toc.classList.toggle("unfold");

        console.log(this);

        var dropbtn = toc.parentElement.getElementsByTagName("button");
        if (toc.classList.contains("unfold")) {                        
            dropbtn[0].style.borderRadius = "10px 10px 0 0";
        }
        else {
            dropbtn[0].style.borderRadius = "10px";
        }
    }

    //Sidebar item toggler
    window.unfold = function unfold(obj) {
        var lists = obj.parentElement.parentElement.getElementsByTagName('ul');
        lists[0].classList.toggle("unfold-sidebar");

        var svgs = obj.parentElement.getElementsByTagName('svg');
        if (lists[0].classList.contains("unfold-sidebar")) {            
            svgs[0].style.transform = 'rotate(90deg)';
        }
        else {
            svgs[0].style.transform = '';
        }
    }

    //Theme toggler
    const toggle = document.getElementById("theme-toggle");

    //Set initial value
    if (currentTheme === 'light') {
        toggle.checked = true;
    }

    //Add a listener to the theme switcher
    toggle.addEventListener('change', switchTheme, true);

    //Add copy button for code blocks - thanks to Bard!
    let codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(codeBlock => {
        let button = document.createElement('button');
        button.className = 'copy-button';
        button.innerText = 'Copy';

        codeBlock.parentNode.style.position = 'relative';
        button.style.position = 'absolute';

        codeBlock.parentNode.appendChild(button);

        button.addEventListener('click', () => {
            navigator.clipboard.writeText(codeBlock.innerText)
                .then(() => {
                    button.innerText = 'Copied!';
                    setTimeout(() => {
                        button.innerText = 'Copy';
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                    button.innerText = 'Error';
                });
        });
    });
};