// // q1
var arr1 = [];
// // q2
var arr2 = new Array();
// // q3
var arr3 = ["moosa"];
// // q4
var arr4 = [21];
// // q5
var arr5 = [true,false];
// // q6
var arr6 = ["eijaz","dilawer","nooria",123,true,false];
// // q7
var education = ["SSC", "HSC", "BCS","BS", "BCOM", "Phil","PhD"  + "<br />"]
var a = ""
for (var i = 0; i < 7; i++) {
    document.write(education[i] + "<br />" ) ;
}
// // q8
var studentName = ["moosa","eijaz","ali"];
var total = [360,400,466];
var totalScore = 500;
for (var i = 0; i < total.length; i++) {
    document.write("Score of "  + studentName[i] + " "  + total[i]  + " "  + "parsentage" + " "  + (total[i] / totalScore   ) * 100 + " " + "%"  + "<br />" + "<br />") 
}
// q9
newFunction();
function newFunction() {
    var color = [];
    var colorName = prompt("enter a color name1");
    var colorName0 = prompt("enter a color name2");
    var colorName1 = prompt("enter a color name3");
    var colorName2 = prompt("enter a color name4");
    color.unshift(colorName);
    color.push(colorName0);
    color.unshift(colorName1);
    color.unshift(colorName2);
    color.shift(colorName);
    document.write(color + "<br />");
    var user = prompt("enter a index number of element you want delate")
    var result = color.splice(user,1);
    console.log(result)
    console.log(user);
    console.log(color);
}
// q10
var studentScore = [320,230,480,120];
studentScore.sort();
document.write(studentScore);
// q11
var citeName = ["karachi", "pakistan", "london", "north korea"]
var london = citeName.slice(0,3)
console.log(citeName);
document.write(london);
// q12
var cat = ['This ', 'is ', 'my', ' cat']
var cat1 = cat.join('')
document.write(cat1);
// q13
var newArr = [];
newArr.push("red","green","blur","moosa")
console.log(newArr);
for (let i = 0; i < newArr.length; i++) {
    document.write( newArr[i] + " " + "<br />");    
}
// q14
var newArr1 = [];
newArr1.push("red1","green1","blur1","moosa1")
document.write(newArr1);
for (let i =  newArr1.length-1; i >=  0; i--) {
    document.write( newArr1[i] + " " + "<br />" + "<br />");    
}
// q15
var res = "";
var  manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
for (let i = 0; i < manufacturers.length; i++) {
    res+= (manufacturers[i]) + "<br />";
}
document.write(res);