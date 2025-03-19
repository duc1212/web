document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    function revealSections() {
        const triggerBottom = window.innerHeight * 0.8;
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});

document.getElementById("learn-more").addEventListener("click", function () {
    window.location.href = "Contact.html";
});
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    let lastScrollY = window.scrollY;

    function handleScroll() {
        if (window.scrollY > lastScrollY) {
            header.classList.remove("show");
        } else {
            header.classList.add("show");
        }
        lastScrollY = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);
    header.classList.add("show");
});

