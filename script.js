// Global variable arrays //
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+'];



var choicesArray = [];


function userChoices() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  choicesArray = [];

  characterLength = parseInt (prompt("How many characters does your password need to be? (8min - 128max)"));
    if (characterLength <= 8 || characterLength > 128) {
      alert("Your password needs to be between 8 and 128 characters long.");
      return false;
    }

  
  if (confirm("Do you want to include lowercase letters?")) {
      choicesArray = choicesArray.concat(lowerCase);
  }
  
  
  if (confirm("Do you want to use Uppercase letters?")) {
      choicesArray = choicesArray.concat(upperCase);
  }
 


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
