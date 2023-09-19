// ANONYMOUS MESSAGE POPUP
const writeButton = document.getElementById("writeButton");
const closePopupButton = document.getElementById("closePopup");
const submitMessageButton = document.getElementById("submitMessage");
const messageText = document.getElementById("messageText");

writeButton.addEventListener("click", () => {
    popup.style.display = "flex";
});

closePopupButton.addEventListener("click", () => {
    popup.style.display = "none";
    // Reset the messageText field
    messageText.value = "";
    document.getElementById("anon-messageError").textContent = ""; // Clear any error messages
});

submitMessageButton.addEventListener("click", () => {
    const message = messageText.value;
    if (message === "") {
        document.getElementById("anon-messageError").textContent = "Please enter a Message.";
    }
    else {
        console.log("Anonymous Message:", message);
        popup.style.display = "none";
        // Reset the messageText field
        messageText.value = "";
        document.getElementById("anon-messageError").textContent = ""; // Clear any error messages
    }
});


// CONTACT POPUP
const contactButton = document.getElementById("contactButton");
const closeContactPopupButton = document.getElementById("closeContactPopup");
const submitContactButton = document.getElementById("submitContact");
const phoneNumberInput = document.getElementById("user_phone"); // Add this line

// Event listener for input on the phone number field
phoneNumberInput.addEventListener("input", (event) => {
    const sanitizedValue = event.target.value.replace(/[^0-9]/g, "");
    let formattedValue = "";
    for (let i = 0; i < Math.min(10, sanitizedValue.length); i++) {
        if (i === 3 || i === 6) {
            formattedValue += "-";
        }
        formattedValue += sanitizedValue[i];
    }
    event.target.value = formattedValue;
    
});

// Rest of your contact form code (event listeners, form submission, etc.)
contactButton.addEventListener("click", () => {
    contactPopup.style.display = "flex";
});

closeContactPopupButton.addEventListener("click", () => {
    contactPopup.style.display = "none";
});

document.getElementById("submitContact").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the form from submitting as a traditional HTML form

    // Get a reference to the form by its id
    const contactForm = document.getElementById("contactForm");

    // Get values from the input fields
    const lastName = document.getElementById("user_lname").value;
    const firstName = document.getElementById("user_fname").value;
    const email = document.getElementById("user_email").value;
    const phoneNumber = document.getElementById("user_phone").value;
    const message = document.getElementById("user_message").value;

    // Clear previous error messages
    document.getElementById("lnameError").textContent = "";
    document.getElementById("fnameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Regular expression pattern for validating email addresses and phone number
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    // Check each field and display individual error messages
    if (lastName === "") {
        document.getElementById("lnameError").textContent = "Please enter your Last Name.";
    }

    if (firstName === "") {
        document.getElementById("fnameError").textContent = "Please enter your First Name.";
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Please enter your Email Address.";
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email address format.";
    }

    if (phoneNumber === "") {
        document.getElementById("phoneError").textContent = "Please enter your Phone Number.";
    } else if (!phonePattern.test(phoneNumber)) {
        document.getElementById("phoneError").textContent = "Invalid phone number, make sure you add a ' - '.";
    }

    if (message === "") {
        document.getElementById("messageError").textContent = "Please enter a Message.";
    }

    // Check if any of the fields are empty or if the email format is incorrect
    if (lastName === "" || firstName === "" || email === "" || !emailPattern.test(email) || phoneNumber === "" || message === "") {
        document.getElementById("lnameError").scrollIntoView();
    } else {
        emailjs.init("x9cQ8PtXlRNn8pbZt"); //init email service
        // Use the form element when calling emailjs.send
        emailjs.sendForm("service_jvi8adj", "template_434468s", contactForm, {
            user_lname: lastName,
            user_fname: firstName,
            user_email: email,
            user_phone: phoneNumber,
            user_message: message,
        }).then(
            function (response) {
                console.log("Email sent successfully:", response);
                // Optionally, reset the form or show a success message
                document.getElementById("contactForm").reset();
                contactPopup.style.display = "none";
            },
            function (error) {
                console.error("Email could not be sent:", error);
                // Optionally, show an error message to the user
            }
        );
    }
});
