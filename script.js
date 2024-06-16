function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function to check if the user has scrolled past the desktop-nav section
function checkScrollPosition() {
    const desktopNavSection = document.getElementById("desktop-nav");
    const scrollToTopButton = document.getElementById("scrollToTopButton");

    if (window.scrollY > desktopNavSection.offsetTop) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

// Function to scroll to the desktop-nav section
function scrollToDesktopNav() {
    const desktopNavSection = document.getElementById("desktop-nav");
    window.scrollTo({
        top: desktopNavSection.offsetTop,
        behavior: "smooth" // Smooth scrolling
    });
}

// Event listener for scrolling
window.addEventListener("scroll", checkScrollPosition);

// Event listener for button click
const scrollToTopButton = document.getElementById("scrollToTopButton");
scrollToTopButton.addEventListener("click", scrollToDesktopNav);
