// Assignment code here
blank = []
var LowerCase =function(){
for (var i = 97; i < 123; i++){
  console.log(String.fromCharCode(i))
  blank.push(String.fromCharCode(i))
 }
 console.log(blank[Math.floor(Math.random() * blank.length)]);
};
console.log(LowerCase());

console.log(blank)



blank2 = []
var UpperCase =function(){
for (var i = 65; i < 91; i++){
  console.log(String.fromCharCode(i))
  blank2.push(String.fromCharCode(i))
 }
 console.log(blank2[Math.floor(Math.random() * blank2.length)]);
};
console.log(UpperCase());






blank3 = []
var SpChr = function(){
  for (var i = 58; i < 65; i++){
    console.log(String.fromCharCode(i))

  }
      // console.log(blank3[Math.floor(Math.random() * blank3.length)]);
};
console.log(SpChr());
console.log(blank3)



// blank3 = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]
// var Numbers = function(){
//   for (var i = 0; i < 8; i++){
//     console.log(Numbers(i));
//   }
// };







// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
