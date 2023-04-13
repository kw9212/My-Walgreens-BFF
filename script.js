const idField = document.getElementById("id");
const passwordField = document.getElementById("password");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const submitButton = document.getElementById("submit");
const idError = document.getElementById("id-error");
const passwordError = document.getElementById("password-error");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");

// Validate ID field
idField.addEventListener("input", () => {
  if (idField.value.length < 5) {
    idError.innerText = "ID must be at least 5 characters long";
    submitButton.disabled = true;
  } else {
    idError.innerText = "";
