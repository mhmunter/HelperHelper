// Assignment code here


blank = []
var LowerCase =function(){
for (var i = 97; i < 123; i++){
  String.fromCharCode(i)
  blank.push(String.fromCharCode(i))
 }
 return blank[Math.floor(Math.random() * blank.length)];
};




blank2 = []
var UpperCase =function(){
for (var i = 65; i < 91; i++){
  String.fromCharCode(i)
  blank2.push(String.fromCharCode(i))
 }
 return blank2[Math.floor(Math.random() * blank2.length)];
};




blank3 = []
var SpChr = function(){
  for (var i = 58; i < 65; i++){
    String.fromCharCode(i)
    blank3.push(String.fromCharCode(i))
  }
    return blank3[Math.floor(Math.random() * blank3.length)];
};




blank4 = []
var Numbers = function(){
  for (var i = 0; i <= 9; i++){
    // console.log((i));
    blank4.push(i)
  }
  return blank4[Math.floor(Math.random() * blank4.length)];
};





// document.getElementById("generate").addEventListener("click" , function(){
//    generatePassword()
// });

// Promts--------------------------------------------

var generatePassword = function(){
    var promptNumDigits = window.prompt("Please pick a password between 8 - 128 charcters");

    if (isNaN(promptNumDigits) || promptNumDigits > 128 || promptNumDigits < 8){
        window.alert("You need to pick a number betwwen 8 - 128 charcters, please.");
        // console.log("test");
        return generatePassword();

    }
    else{
        var promtCap = window.prompt("Would you like your password to have capital letters?").toUpperCase();
        // if(promtCap.toUpperCase() === "YES"){
            // console.log(promtCap)
        // }
            var promtLow = window.prompt("Would you like your password to have lower letters?").toUpperCase();
        // if(promtLow.toUpperCase() === "YES"){
        //     console.log("Lower Letters")
            // console.log(promtLow)
            var promtNum = window.prompt("Would you like your password to have numbers?").toUpperCase();
            // if(promtNum.toUpperCase() === "YES"){
            //     console.log("Numbers")
            // console.log(promtNum0)
                var promtSp = window.prompt("Would you like your password to have special characters?").toUpperCase();
                // if(promtSp.toUpperCase() === "YES" && ){
                    

                 
        }







// puts the seprate parts of password together




        // intro = []
        var intro = ''

    for (var i = 0; i < promptNumDigits ; i++){
        // intro.push(i)
            
    if (promtCap === "YES"){
    intro = intro.concat(UpperCase())
}
 if(promtLow === "YES"){
intro = intro.concat(LowerCase())
}
 if (promtNum === "YES"){
    intro = intro.concat(Numbers())
}
if( promtSp === "YES")
intro = intro.concat(SpChr())

}

// console.log(intro)
// console.log(intro.length)
return intro



// shows password

// document.getElementById("password").innerHTML = intro;
}
    











// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
