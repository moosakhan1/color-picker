// qu1
var sum1 = 3
var sum2 = 5
var sum3 = 8
console.log(sum1 + sum2 + sum3)
// qu2
var sub1 = 3
var sub2 = 5
var sub3 = 8
console.log(sub1 - sub2 - sub3)
var mul1 = 3
var mul2 = 5
var mul3 = 8
console.log(mul1 * mul2 * mul3)
var div1 = 3
var div2 = 5
var div3 = 8
console.log(div1 / div2 / div3)
var mod1 = 3
var mod2 = 5
var mod3 = 8
console.log(mod1 % mod2 % mod3)
// qu3
document.write("<h1>quastion 3</h1>")
var a;
a = 9;
document.write("<span>“Value after variable declaration is: ??”. </span> " + a + "<br />" + "<br />")
a++
document.write("<span>Value after increment is:</span>" + a + "<br / >" + "<br />")
a = a + 7
document.write("<span>Value after addition is:</span>" + a + "<br />" + "<br />")
a--
document.write("<span>Value after decrement is: ??”. </span> " + "<br />" + "<br />")

a = a % 3
document.write("<span>the remainder</span>" + a)

// qu4
document.write("<h1>quastion 4</h1>")
var ticket_price = 600
var ticket5 = 5;
document.write("<span>total cost to but 5 ticket to a movie is:</span>" + ticket_price * ticket5 + "<br />" + "<br />");
// qu5
document.write("<h1>quastion 5</h1>")

var b = 0;
b++
document.write("4 * " + b + " = " + 4 * b + "<br />")
b++
document.write("4 * " + b + " = " + 4 * b + "<br />")
b++
document.write("4 * " + b + " = " + 4 * b + "<br />")
b++
document.write("4 * " + b + " = " + 4 * b + "<br />")
b++
document.write("4 * " + b + " = " + 4 * b + "<br />")
b++
document.write("4 * " + b + " = " + 4 * b + "<br />")
b++
document.write("4 * " + b + " = " + 4 * b + "<br />")
b++
document.write("4 * " + b + " = " + 4 * b + "<br />" + "<br />" + "<br />")

// qu6
document.write("<h1>quastion 6</h1>")
var Celsius_temperature = 20;
var formula = (Celsius_temperature * 9 / 5) + 32;
document.write(Celsius_temperature + "  is  " + formula + "  f  " + "<br />" + "<br />")

var Fahrenheit_temperature = 12;
var formula1 = (Fahrenheit_temperature - 32) * 5 / 9
document.write(Fahrenheit_temperature + "  is  " + formula1 + "  C  " + "<br />" + "<br />")

// q7
document.write("<h1>quastion 7</h1>")
var price1 = 650;
var price2 = 100;
var quantityOfItem1 = 3;
var quantityOfItem2 = 7;
var sippingCharge = 100;
var totalCost = (price1 * quantityOfItem1) + (price2 * quantityOfItem2) + (sippingCharge)
document.write("price of item 1 is " + price1 + "<br />" + "<br />")
document.write("quantity of item 1 is " + quantityOfItem1 + "<br />" + "<br />")
document.write("price of item 2 is " + price2 + "<br />" + "<br />")
document.write("Quantity of item 2 is " + quantityOfItem2 + "<br />" + "<br />")
document.write("Shipping charges " + sippingCharge + "<br />" + "<br />")
document.write("Total cost of  your order is :" + totalCost + "<br />" + "<br />")

// q8
document.write("<h1>quastion 8</h1>")
var Mark_obtained = 804;
var Total_marks = 980;
var percentage = (Mark_obtained / Total_marks)  * 100
document.write("Total marks" + Total_marks + "<br />" + "<br />")
document.write("Mark_obtained" + Mark_obtained + "<br />" + "<br />")
document.write("percentage" + percentage + "<br />" + "<br />")
// q9
document.write("<h1>quastion 9</h1>")
var dollars = 10;
var Saudi = 25;
var total = (dollars * 104.80) + (Saudi * 28)
document.write("Total Currency in PKR:" + total + "<br />" + "<br />")
// q10
document.write("<h1>quastion 10</h1>")
var number = 8;
var result = (number + 5) / 2 *10;
document.write(result + "<br />" + "<br />")
// q11
document.write("<h1>quastion 11</h1>")
var year = 2024;
var birth_year = 2011
var year_age = year % birth_year
document.write( " year "  + year  + "<br />" + "<br />")
document.write( " birth "  + birth_year  + "<br />" + "<br />")
document.write( " year age "  + year_age  + "<br />" + "<br />")
// q12
document.write("<h1>quastion 12</h1>")
var radius = 20;
var pi = 3.142;
var circumference = 2*pi*radius;
console.log(circumference)
var area = pi * radius  * radius;
document.write( " radius of a circle "  + radius  + "<br />" + "<br />")
document.write( " the circumference "  + circumference  + "<br />" + "<br />")
document.write( " the area "  + area  + "<br />" + "<br />")
// q13
document.write("<h1>quastion 13</h1>")
var snack = "Chocolate"
var current_age = 15;
var maximum_age = 65;
var per_day = 3;
var eat_total = maximum_age - current_age
document.write( " current_age "  + current_age  + "<br />" + "<br />")
document.write( " Esrimated maximum_age "  +  maximum_age + "<br />" + "<br />")
document.write( " amount of snacks per day "  + per_day  + "<br />" + "<br />")
document.write( " “You will need 150  Chocolate chip to last you untid the ripe old age of "  + eat_total  + "<br />" + "<br />")
