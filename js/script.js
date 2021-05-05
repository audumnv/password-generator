// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");




  passwordText.value = password;

}

// Add event listener to generate button



generateBtn.addEventListener("click", writePassword);



function generatePassword() {
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

  var charset = "";
  ranPassword = "";
  var uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseStr = "abcdefghijklmnopqrstuvwxyz";
    var numberStr = "1234567890";
    var symbolStr = "!@#$%^&*(){}[]=<>/,."

  var listPassword = "";
  var finalPassword = "";

  if (uppercase)  {
    listPassword = listPassword + uppercaseStr;
  }

  if (lowercase){
    listPassword = listPassword + lowercaseStr;
  }

  if (numbers) {
    listPassword = listPassword + numberStr;
  }

  if(symbols) {
    listPassword = listPassword + symbolStr;
  }

  for(var i = 0; i < length; i++){
    var randomIndex = Math.floor(Math.random() * listPassword.length);
    finalPassword = finalPassword + listPassword[randomIndex]

   }

   return finalPassword;

//   if (uppercase) ranPassword += Math.random(charset.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
//   if (lowercase) ranPassword += Math.random(charset.lowercase = "abcdefghijklmnopqrstuvwxyz");
//   if (numbers) ranPassword += Math.random(charset.numbers = "1234567890");
//   if (symbols) ranPassword += Math.random(charset.symbols = "!@#$%^&*(){}[]=<>/,.");

//   for (var i = ranPassword.length; i < length; i++) ranPassword += random(random(charset).value);
// console.log(charset)
// console.log(ranPassword)
  
// return ranPassword;

}









   


  
