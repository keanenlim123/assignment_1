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

function checkForm(e) {

    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById("email").value;
    let nameofcard = document.getElementById("nameofcard").value;
    let plan = document.querySelector('input[name="plan"]:checked')?.value;
    let carddetails = document.getElementById("carddetails").value;
    let cvv = document.getElementById("cvv").value;
    let date = document.getElementById("date").value;

    let isValid = true;
    let errorMsg = "";

    if (fullname.length < 1) {
        errorMsg = `Please fill in your name`;
        document.getElementById('errorFullName').innerHTML = errorMsg;
        isValid = false;
    } else {
        document.getElementById('errorFullName').innerHTML = "";
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        errorMsg = `Please enter a valid Email Address`;
        document.getElementById('errorEmail').innerHTML = errorMsg;
        isValid = false;
    } else {
        document.getElementById('errorEmail').innerHTML = "";
    }

    if (!plan) {
        errorMsg = `Please select a Plan`;
        document.getElementById('errorPlan').innerHTML = errorMsg;
        isValid = false;
    } else {
        document.getElementById('errorPlan').innerHTML = "";
    }

    if (nameofcard.length < 3) {
        errorMsg = `Name on Card should be at least 3 characters`;
        document.getElementById('errorNameCard').innerHTML = errorMsg;
        isValid = false;
    } else {
        document.getElementById('errorNameCard').innerHTML = "";
    }

    if (carddetails.length !== 16) {
        errorMsg = `Card Details should be exactly 16 digits`;
        document.getElementById('errorCard').innerHTML = errorMsg;
        isValid = false;
    } else {
        document.getElementById('errorCard').innerHTML = "";
    }

    if (cvv.length !== 3) {
        errorMsg = `CVV should be exactly 3 digits`;
        document.getElementById('errorCVV').innerHTML = errorMsg;
        isValid = false;
    } else {
        document.getElementById('errorCVV').innerHTML = "";
    }

    if (!date) {
        errorMsg = `Please select an Expiry Date`;
        document.getElementById('errorDOE').innerHTML = errorMsg;
        isValid = false;
    } else {
        document.getElementById('errorDOE').innerHTML = "";
    }

    if (isValid) {
        let newOrder = {
            fullname: fullname,
            email: email,
            nameofcard: nameofcard,
            plan: plan,
            carddetails: carddetails,
            cvv: cvv,
            date: date
        };
        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(newOrder);
        localStorage.setItem("orders", JSON.stringify(orders));

        alert('Form submitted successfully!');
    }
}

