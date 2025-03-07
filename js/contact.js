document.getElementById("contactForm").addEventListener("submit", function(event) {
    let isValid = true;

    // Get form fields
    let nameField = document.getElementById("Name");
    let emailField = document.getElementById("Email");
    let messageField = document.getElementById("cMessage");

    let name = nameField.value.trim();
    let email = emailField.value.trim();
    let message = messageField.value.trim();

    // Get error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");

    // Reset previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // Name validation
    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.textContent = "Invalid email format.";
        isValid = false;
    }

    // Message validation
    if (message === "") {
        messageError.textContent = "Message is required.";
        isValid = false;
    }

    // Prevent form submission if not valid
    if (!isValid) {
        event.preventDefault();
    }
});

// Remove error message when the user starts typing
document.querySelectorAll("#Name, #Email, #cMessage").forEach((field) => {
    field.addEventListener("input", function() {
        let errorElement;

        // Match the correct error message element
        if (this.id === "Name") {
            errorElement = document.getElementById("nameError");
        } else if (this.id === "Email") {
            errorElement = document.getElementById("emailError");
        } else if (this.id === "cMessage") {
            errorElement = document.getElementById("messageError");
        }

        if (errorElement) {
            errorElement.textContent = "";
        }
    });
});

// Move to the next field when Enter is pressed
document.querySelectorAll("#Name, #Email, #cMessage").forEach((field, index, fields) => {
    field.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission
            
            // Move to next field if it exists
            let nextField = fields[index + 1];
            if (nextField) {
                nextField.focus();
            } else {
                document.getElementById("contactForm").submit(); // Submit if last field
            }
        }
    });
});


