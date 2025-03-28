document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("mobile-menu");
    const hamburger = document.querySelector(".hamburger");
    const closeBtn = document.querySelector(".close-btn");

    if (hamburger) {
        hamburger.addEventListener("click", toggleMenu);
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", toggleMenu);
    }

});
