function validateEmail() {
    const emailInput = document.getElementById('emailInput').value;
    
    if (emailInput === "") {
        alert("Please fill in your email address.");
        return false;
    }
    
    alert("The email has been sent!");
    return true; 
}
