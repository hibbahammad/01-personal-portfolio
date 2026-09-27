// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Close menu after clicking a link

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// ================= FOOTER YEAR =================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    formMessage.textContent =
        "Thank you! Your message has been submitted.";

    contactForm.reset();

});