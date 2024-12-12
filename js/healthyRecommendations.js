const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const processEntries= evt => {
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const phone = $("#phone").val().trim();
    const age = $("#age").val().trim();
    const genre = $("#genre").val()
    
    let isValid = true;

    if (name === "") {
        $("#name_error").text("Name is required.");
        isValid = false;
    } else {
        $("#name_error").text("");
    }

    if (!emailPattern.test(email)) {
        $("#email_error").text("Must be a valid email address.");
        isValid = false;
    } else {
        $("#email_error").text("");
    }

    if (phone === "") {
        $("#phone_error").text("Phone is required.");
        isValid = false;
    } else {
        $("#phone_error").text("");
    }

    if (age === "" || isNaN(age)) {
        $("#age_error").text("The age is required and must be numeric.");
        isValid = false;
    } else {
        $("#age_error").text("");
    }

    if (genre === "") {
        $("#genre_error").text("Please select the genre");
        isValid = false;
    } else {
        $("#genre_error").text("");
    }

    if (!isValid) {
        evt.preventDefault();
    }
};

//DOMContentLoaded Event
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationform");
    form.addEventListener("submit", processEntries);
});