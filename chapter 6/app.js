// q1
var character = ("enter a character"); 
if(character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) {
    console.log("uppercase letter");
}
else if(character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
    console.log("lower case letter");
}
// q2
var integers1 = prompt("enter a integers1")
var integers2 = prompt("enter a integers2")
if (integers1 > integers2) {
    console.log("the larger " + integers1);
}
else if (integers2 > integers1) {
    console.log("the larger "  + integers2);
} else {
    console.log("equal");
}
console.log(integers1);
console.log(integers2);
// q3
var user = prompt("enter your wether");

if (user >= 0) {
    console.log(" positive");
}
else {
    console.log(" negative");   
}
// q4
var vowel = prompt("enter a vowel");
if (vowel == "a"){
    console.log("vowel");
}
else if (vowel == "e"){
    console.log("vowel");
}
else if (vowel == "i"){
    console.log("vowel");
}
else if (vowel == "o"){
    console.log("vowel");
}
else if (vowel == "u"){
    console.log("vowel");
}
else{
    console.log("not a vowel");
}
// q5
var password = 101326;

var password1 = +prompt( " enter your password")
if(password == password1){
    console.log("Correct");
}
else{
    console.log("Please enter your password");
}
// q6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening"
};
console.log(greeting);
// q7
var clock = +prompt("enter your time");

if (clock == 19.00){
    console.log(7 +  "PM");
}
else if (clock == 20.00){
    console.log(8 +  "PM");
}
else if (clock == 21.00){
    console.log(9 +  "PM");
}
else if (clock == 22.00){
    console.log(10 +  "PM");
}
else if (clock == 23.00){
    console.log(11 +  "PM");
}
else if (clock == 24.00){
    console.log(12 +  "PM");
}