window.onscroll = function() {
    const navbar = document.getElementById("navbar");
    const scrollPosition = window.scrollY;

    // Change background color when the page is scrolled
    if (scrollPosition > 50) {
        navbar.style.backgroundColor = "#222";
    } else {
        navbar.style.backgroundColor = "#333";
    }
};

// Optional: Additional interactivity
const menuItems = document.querySelectorAll("nav ul li a");

menuItems.forEach(item => {
    item.addEventListener("mouseover", function() {
        item.style.color = "#333";
        item.style.backgroundColor = "#fff";
        item.style.borderRadius = "5px";
    });

    item.addEventListener("mouseout", function() {
        item.style.color = "#fff";
        item.style.backgroundColor = "transparent";
    });
});
