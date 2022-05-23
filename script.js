function myFunction() {
    var hamburgerMenu = document.getElementById("myLinks");
    if (hamburgerMenu.style.display === "block") {
        hamburgerMenu.style.display = "none";
    } else {
        hamburgerMenu.style.display = "block";
    }
}