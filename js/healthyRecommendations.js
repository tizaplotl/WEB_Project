document.addEventListener("DOMContentLoaded", () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const processEntries = (evt) => {
        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const phone = $("#phone").val().trim();
        const age = $("#age").val().trim();
        const genre = $("#genre").val();

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
        } else {
            alert("The registration form was successfully sent.");
        }
    };

    const form = document.getElementById("registrationform");
    if (form) {
        form.addEventListener("submit", processEntries);
    }

    //Weight Calculation
    const calculateButton = document.getElementById("calculate");
    const clearButton = document.getElementById("clear");

    const calculateValues = () => {
        const weight = parseFloat(document.getElementById("weight").value.trim());
        const height = parseFloat(document.getElementById("height").value.trim());
        const ageInput = document.getElementById("age2").value.trim();
        const age2 = parseInt(ageInput); 
        const gender2 = document.getElementById("gender2").value;
        const activityLevel = parseFloat(document.getElementById("activityLevel").value);
        const targetWeight = parseFloat(document.getElementById("targetWeight").value.trim());
        const calorieAdjustment = parseFloat(document.getElementById("calorieadjustment").value.trim());

        if (isNaN(weight) || isNaN(height) || isNaN(age2) || isNaN(targetWeight) || isNaN(calorieAdjustment) ) {
            alert("Please fill in all required fields with valid numbers.");
            return;
        }


        let idealBodyWeight;
        if (gender2 === "male") {
            idealBodyWeight = 50 + 2.3 * (height - 60);
        } else {
            idealBodyWeight = 45.5 + 2.3 * (height - 60);
        }


        const heightCm = height * 2.54;
        let bmr;
        if (gender2 === "male") {
            bmr = 10 * weight + 6.25 * heightCm - 5 * age2 + 5;
        } else {
            bmr = 10 * weight + 6.25 * heightCm - 5 * age2 - 161;
        }
        const dailyCaloricNeeds = bmr * activityLevel + calorieAdjustment;


        const weightChange = targetWeight - weight;


        document.getElementById("idealbodyweight").value = idealBodyWeight.toFixed(2);
        document.getElementById("dailycaloricneeds").value = dailyCaloricNeeds.toFixed(2);
        document.getElementById("lossorgaincalculator").value = weightChange.toFixed(2);
    };


    const clearValues = () => {
        document.querySelectorAll("input").forEach((input) => {
            input.value = "";
        });
    };

    if (calculateButton) {
        calculateButton.addEventListener("click", calculateValues);
    }

    if (clearButton) {
        clearButton.addEventListener("click", clearValues);
    }
});
