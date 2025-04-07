
const menuToggler = document.getElementById("menuToggler");
const html = document.documentElement;
var isNavOpen = false;

function handleClicks(ev) {
    //Close the sidebar menu if it's open and remove the event listener
    ev.stopPropagation();

    console.log(ev.target.id);

    if (ev.target.id !== "navmenu") {
        closeNav();
    }
}

function openNav() {
    console.log("Open")
    document.getElementById("navmenu").style.display = "block";

    html.addEventListener("click", handleClicks, true);

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {

        console.log("Close")
        document.getElementById("navmenu").style.display = "none";
        html.removeEventListener("click", handleClicks, true);

}

menuToggler.onclick = openNav;