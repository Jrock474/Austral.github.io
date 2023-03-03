const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("nav-area")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")

})