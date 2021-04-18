// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = Number(prompt("How many characters would you like?"));
while (isNaN(length) || length < 8 || length > 128);
var uppercase = confirm("Would you like uppercase letters?");
var lowercase = confirm("Would you like lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var symbols = confirm("Would you like to use special characters?");
 while (!uppercase && !lowercase && !numbers && !symbols) {
  uppercase = confirm("Would you like to use uppercase letters?");
  lowercase = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like numbers?");
  symbols = confirm("Would you like special characters?");
}
  var password = generatePassword();
  var passwordText = document.querySelector("#password");




  passwordText.value = password;

}

// Add event listener to generate button



generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  var charset = "";
  ranPassword = "";
  if (uppercase) ranPassword += random(charset.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (lowercase) ranPassword += random(charset.lowercase = "abcdefghijklmnopqrstuvwxyz");
  if (numbers) ranPassword += random(charset.numbers = "1234567890");
  if (symbols) ranPassword += random(charset.symbols = "!@#$%^&*(){}[]=<>/,.");

  for (var i = ranPassword.length; i < length; i++) ranPassword += random(random(charset).value);

return ranPassword;

}









   


  
