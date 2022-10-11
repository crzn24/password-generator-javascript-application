





function userChoices() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  

  
}



///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var userPrompts = userChoices();
  var passwordText = document.querySelector("#password");

if(userPrompts) {
  var password = generatePassword();
  passwordText.value = password;
}
 else {
  passwordText.value = "";
 } 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////












///////// pseudo code////////
/*
1. Show prompt asking to generate a password (UI)
2 user chooses generate password (event)
HANDLE EVENT
3 store answer? (UI)
4 prompt password criteria: password character length (8-128max)? (UI)
  if user chooses number then store number of characters
5 prompt character types:
6 prompt include lowercase? (UI)
    if yes then include lowercase
    if no then move on
7 prompt include uppercase?
    if yes then include
    if no then move on
8 prompt numeric?
    if yes then include
    if no then move on
9 prompt special characters?
    if yes include
    if no move on
10 Alert user of new password?    

after each prompt, input should be validated
password generated and displayed in alert or on page


var characterLength = ""
var lowercase = ""
var uppercase = ""
var numeric = ""
var special characters = ""


*/
