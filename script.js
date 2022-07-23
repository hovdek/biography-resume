
//function for the hamburger menu to be used while on mobile
function myFunction() {
    var hamburgerMenu = document.getElementById("myLinks");
    if (hamburgerMenu.style.display === "block") {
        hamburgerMenu.style.display = "none";
    } else {
        hamburgerMenu.style.display = "block";
    }
}

// smooth scroll to the top. it works when you click the "back to top" on the pages
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});