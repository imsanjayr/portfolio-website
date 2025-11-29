// navbar links
const navLinks = document.querySelectorAll('nav a');

// highlight navbar on click
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// highlight navbar on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200; // prevents header overlap
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});

// header shadow effect on scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Contact Form (Formspree)
const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let formData = new FormData(form);

    try {
        let response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            alert("Thank you! Your message was successfully sent.");
            form.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("Network error — unable to send message.");
    }
});
