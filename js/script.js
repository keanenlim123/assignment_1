function validateContactUs() {
    const emailInput = document.getElementById('emailInput').value;
    const messageInput = document.getElementById('messageInput').value;

    if (emailInput === "") {
        alert("Please fill in your email address.");
        return false;
    }

    if (messageInput === "") {
        alert("Please enter your message.");
        return false;
    }

    alert("The email has been sent!");
    return true;
}


document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    document.addEventListener("click", (event) => {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickHamburger) {
            navLinks.classList.remove("open");
        }
    });
});


