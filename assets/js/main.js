/**
 * Site themer
 * 
 * This function needs to run before the page loads to avoid 'flickering'.
 * The code uses the localStorage to store theme preference.
 */

//Initialize the site theme
var currentTheme = null;

if (localStorage.getItem('theme') === null) {
    //If theme is not set, set it to 'light'
    currentTheme = (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}
else {
    currentTheme = localStorage.getItem('theme');
}

//Set the data-theme of the page
if (currentTheme) {    
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
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

//Scrollspy for the table of contents
window.addEventListener('DOMContentLoaded', () => {

    //Attach a listener to the theme toggler checkbox
    const themetoggle = document.getElementById('themetoggle');

    if (themetoggle !== null) {

        if (localStorage.getItem('theme') === 'light') {
            themetoggle.checked = true;
        }
        else {
            themetoggle.checked = false;
        }

        themetoggle.addEventListener("change", switchTheme, true);
    }

    //Styling the links of table of contents
    const toc = document.getElementById("TableOfContents");

    if (toc !== null) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                if (entry.intersectionRatio > 0) {
                    document.querySelector(`nav li a[href="#${id}"]`).classList.add('active');
                } else {
                    document.querySelector(`nav li a[href="#${id}"]`).classList.remove('active');
                }
            });
        });

        // Track all headings that have an `id` applied
        document.querySelectorAll('h2[id], h3[id], h4[id]').forEach((heading) => {
            observer.observe(heading);
        });

    }

});

window.onload = () => {

    window.toggleSidebar = function toggleSidebar() {

        //Get sidebar object
        var sidebar = document.getElementById("sidebar");

        if (sidebar !== null) {
            sidebar.classList.toggle('show');

            if (sidebar.classList.contains('show')) {
                window.addEventListener("click", handleClick, true);
            }
            else {
                window.removeEventListener("click", handleClick, true);

                var mainmenu = document.getElementById("main-menu");
                console.log(mainmenu)
                if (mainmenu.parentElement.classList.contains('unfold')) {
                    mainmenu.parentElement.classList.remove('unfold');
                }
            }
        }
    }

    function handleClick(event) {

        if (event.target.classList.contains("sidebar")) {
            toggleSidebar();
        }
    }

    window.unfold = function unfold(obj) {

        if (typeof(obj) === "string") {
            obj = document.getElementById(obj);
        }

        obj.parentElement.classList.toggle("unfold");

    }

    //Add a copy button to code blocks
    let codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach(codeBlock => {
        let button = document.createElement('button');
        button.className = 'code-copy-button';
        //button.innerText = 'Copy';
        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#000000"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>';

        codeBlock.parentNode.appendChild(button);

        button.addEventListener('click', () => {
            navigator.clipboard.writeText(codeBlock.innerText)
                .then(() => {
                    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>';
                    setTimeout(() => {
                        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#000000"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>';
                    }, 1000);
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                    button.innerText = 'Error';
                });
        });
    });

}