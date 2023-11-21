function validateForm() {
    var name = document.getElementById("name").value;
    var date = document.getElementById("Date").value;
    var time = document.getElementById("time").value;
    var guest = document.getElementById("guest").value;
    var phoneno = document.getElementById("Phoneno").value;
    var email = document.getElementById("email").value;
    var location = document.getElementById("Location").value;

    // Validate Name
    if (name.trim() === "") {
        alert("Please enter your name");
        return false;
    }

    // Validate Date
    if (date === "") {
        alert("Please select the date of registration");
        return false;
    }

    // Validate Time
    if (time === "") {
        alert("Please select the time");
        return false;
    }

    // Validate Number of Guests
    if (guest === "" || isNaN(guest) || guest <= 0) {
        alert("Please enter a valid number of guests");
        return false;
    }

    // Validate Phone Number
    if (phoneno === "" || isNaN(phoneno) || phoneno.length !== 10) {
        alert("Please enter a valid 10-digit phone number");
        return false;
    }

    // Validate Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Validate Location
    if (location === "") {
        alert("Please select a location");
        return false;
    }

    // Redirect to success.html
    window.location.href = "success.html";

    return false; // Prevents the form from submitting
}
