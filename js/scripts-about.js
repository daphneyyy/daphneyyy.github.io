document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skill-level");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateSkillBars() {
        skillBars.forEach((bar) => {
            if (isInViewport(bar) && !bar.classList.contains("animated")) {
                const width = bar.dataset.percent;
                bar.classList.add("animated");
                bar.style.width = width + "%";
            }
        });
    }
    window.addEventListener("scroll", animateSkillBars);

    animateSkillBars();
});
