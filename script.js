
//Variables
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

//Check Us Number format
const checkUsNumber = () => {
    const phoneNumber = userInput.value.trim();
    if (!phoneNumber) {
        alert("Please provide a phone number");
        return;
    }

    const isValidUSNumber = validateUSPhoneNumber(phoneNumber);
    if (isValidUSNumber) {
        resultsDiv.textContent = "Valid US number: " + phoneNumber;
    } else {
        resultsDiv.textContent = "Invalid US number: " + phoneNumber;
    }
}

checkBtn.addEventListener("click", checkUsNumber);

clearBtn.addEventListener("click", () => resultsDiv.textContent = ""
);

const validateUSPhoneNumber = (phoneNumber) => {
    // Regular expression to match US phone number formats
    const regex = /^(1[- ]?)?(\([2-9]\d{2}\)|[2-9]\d{2})[- ]?\d{3}[- ]?\d{4}$/;
    return regex.test(phoneNumber);
}