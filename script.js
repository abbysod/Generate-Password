var upCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
var lowCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbolArr = ["!","@","#","$","%","&","*","(",")","?","<",">","|","+","-"];
var numericArr = ["0","1","2","3","4","5","6","7","8","9"];

characterLength = 8;
var choiceArr =[];

//Assignment code
var generateBtn = document.querySelector("#generate");

//Add event listner to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompt = getPrompt(); 
  var passwordText = document.querySelector("#password");

  if(correctPrompt) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
    }  else {
      passwordText.value = "";
    }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = (Math.floor(Math.random() * choiceArr.length));
    password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompt() {
  choiceArr = [];
  characterLength = parseInt(prompt("Input your character length"));
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Password must be min 8 and max 128 characters, and must be a number. Try again.");
    return false;
  }

if (confirm("Do you want upper case characters password?")) {
  choiceArr = choiceArr.concat(upCaseArr);
}
if (confirm("Do you want lower case characters password?")) {
  choiceArr = choiceArr.concat(lowCaseArr);
}
if (confirm("Do you want symbol characters password?")) {
  choiceArr = choiceArr.concat(symbolArr);
}
if (confirm("Do you want numeric characters password?")) {
  choiceArr = choiceArr.concat(numericArr);
}
return true;
}





