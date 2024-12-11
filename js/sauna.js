document.addEventListener("DOMContentLoaded", function() {
    // Set up IntersectionObserver to trigger animations when elements are in view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add class to trigger animation when the element comes into view
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Target elements that you want to animate
    const sections = document.querySelectorAll('.hidden');
    sections.forEach(section => {
        observer.observe(section);
    });

    // GSAP Animations for immediate effects
    gsap.from(".intro h2", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".intro p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".card", { opacity: 0, scale: 0.8, duration: 1, stagger: 0.3 });

    // Hotspot Info Display
    document.querySelectorAll(".hotspot").forEach(hotspot => {
        hotspot.addEventListener("mouseover", function() {
            const info = document.createElement("div");
            info.classList.add("tooltip");
            info.innerText = this.dataset.info;
            this.appendChild(info);
        });
        hotspot.addEventListener("mouseout", function() {
            this.querySelector(".tooltip").remove();
        });
    });
});