document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;

    function showSlides() {
        let i;
        const slides = document.querySelectorAll(".slides img");
        if (slideIndex >= slides.length) {slideIndex = 0}
        if (slideIndex < 0) {slideIndex = slides.length - 1}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    };

    showSlides();
});
