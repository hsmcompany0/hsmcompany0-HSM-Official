// =====================================================
// HSM - HYPER SONIC MIND
// MAIN WEBSITE JAVASCRIPT
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    // ================= CURRENT YEAR =================

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // ================= SCROLL REVEAL =================

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach((element) => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("visible");
        });

    }


    // ================= ACTIVE NAV =================

    const navLinks = document.querySelectorAll(".nav-menu a");

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach((link) => {

        const linkPage =
            link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {

            navLinks.forEach((item) => {
                item.classList.remove("active");
            });

            link.classList.add("active");
        }

    });


    // ================= CONTACT FORM =================

    const contactForm =
        document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            alert(
                "Thank you for contacting HSM. " +
                "Your message has been received."
            );

            contactForm.reset();

        });

    }


    // ================= SCROLL EFFECT =================

    const navbar =
        document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });


    // ================= CONSOLE MESSAGE =================

    console.log(
        "HSM | Hyper Sonic Mind website loaded successfully."
    );

});