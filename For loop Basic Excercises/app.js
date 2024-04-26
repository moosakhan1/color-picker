// q1
for (let i = 1; i < 11; i++) {
    document.write(i + "<br />" )
} 
// q2
for(let i = 1; i < 21; i++) {
    if(i%2==0){
        document.write(i + "<br />") 
    }
}
// q3
for(let i = 1; i < 21; i++) {
    if(i%2==1){
        document.write(i  + "<br />")
    }
}
// q4
var fact = 1;
for (var i = 5; i >= 1; i--) {
     fact = fact * i;
}
document.write(fact + "<br />");
// q5
var table7 = 7;
for (let i = 1; i <= 10; i++) {
    document.write(table7 + " * " + i + " = " + (i * 7)  + "<br />" ) ;
}
// q8
var str = "hello";
var str1 = "";
for(var i = str.length - 1; i >= 0; i--) {
    str1 = str[i]
}
console.log(str1);
// q9
for (var i = 1; i <= 10; i++) {
    document.write(i * i  + "<br />");
}
// q10
var arr = [3,7, 2, 9, 5];
var arr1 = arr[0];

for (var i = 1; i < arr.length; i++) {
    if (arr[i] > arr1) {
        arr1 = arr[i]
    }
}
document.write(arr1  + "<br />")