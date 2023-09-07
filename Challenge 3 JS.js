// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  // Prompt for password criteria
  var length = prompt("Enter the desired length of the password (between 8 and 128 characters):");
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numeric letters?");
  var includeSpecial = confirm("Include special characters?");
  
  // Valdate the length input
  if (length < 8 || length > 128) {
    alert("Invalid length! Please enter a number between 8 and 128.");
    return; // Exit the function if the length is invalid
  }

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected!");
    return; // Exit the function if no character type is selected
  }

// Genearte the password
var password = generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

// Display the password
var passwordText = document.querySelector("#password");
passwordText.value = password;

// Display the password in an alert
alert("Generated Password: " + password);


// Define character sets based on the selected criteria
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericChars = "0123456789";
var specialChars = "!@#$%^&*(){}|:<>?[]\',./+_-=~`'";

// Initialize the character set to be used for generating the password
var chars = "";

// Add the selected character types to the character set
if (includeLowercase) {
  chars += lowercaseChars;
}
if (includeUppercase) {
  chars += uppercaseChars;
}
if (includeNumeric) {
  chars += numericChars;
}
if (includeSpecial) {
  chars += specialChars;
}

// Generate the password
var password = "";
for (var i = 0; i < length; i++) {
  var randomIndex = Math.floor(Math.random() * chars.length);
  password += chars.charAt(randomIndex);
}

// Return the generated password
return password;
}
