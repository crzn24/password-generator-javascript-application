///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordText.value = password;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
}

///////// pseudo code////////
/*
1. Show prompt asking to generate a password (UI)
user chooses generate password (event)
HANDLE EVENT
store value in userChoice (UI)
prompt password criteria: password character length (8-128max)? (UI)
  if user chooses number then choose number of characters
prompt character types:
  prompt include lowercase? (UI)
    if yes then include lowercase
    if no then move on
  prompt include uppercase?
    if yes then include
    if no then move on
  prompt numeric?
    if yes then include
    if no then move on
  prompt special characters?
    if yes include
    if no move on
    

after each prompt, input should be validated
password generated and displayed in alert or on page













*/
