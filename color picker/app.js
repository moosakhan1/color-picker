var colorpicker = document.querySelector("#colorpicker");
var color = document.querySelector("#color");
var body = document.querySelector(".body")
// console.log(body);

colorpicker.addEventListener("input", function(){
    var colorpicker1 = colorpicker.value
    color.textContent = colorpicker1
    body.style.backgroundColor = color.textContent
})