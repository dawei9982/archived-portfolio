document.addEventListener("DOMContentLoaded", function () {
    const fadeInSection = document.querySelector(".fade-in");

    if (!fadeInSection) {
        console.error("Fade-in element not found");
        return;
    }

    console.log("Observer initialized");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("Element is visible, adding 'show' class");
                    entry.target.classList.add("show");
                } else {
                    console.log("Element is not visible, removing 'show' class");
                    entry.target.classList.remove("show"); // Optional: Remove for fade-in only
                }
            });
        },
        {
            threshold: 0.2, // Trigger when 20% of the section is visible
        }
    );

    observer.observe(fadeInSection);
});