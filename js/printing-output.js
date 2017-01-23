
/*
//TASK 1 - head start

Declare three variables, a and b and c. 

If a has value 3, b has value 5, and c doesn't have a vlue, alert the following expressions ( one after anoter ). Alert popup box has to show the following content for each expression (concatenate everything in one long expression using "n\" to make new lines): */


var a = 3;
var b = 5;
var c;

alert("var a =3;\nvar b =5;\nvar c;\n--------\n\n" + 
      "a + b = " + (a + b) + "\n" +
      "a - b = " + (a - b) + "\n" +
      "a * b = " + (a * b) + "\n" +
      "a / b = " + (a / b) + "\n" +
      "a % b = " + (a % b) + "\n" +
      "a += b = " + (a += b) + "\n" +
      "a -= b = " + (a -= b) + "\n" +
      "a *= b = " + (a *= b) + "\n" +
      "a /= b = " + (a /= b) + "\n" +
      "a %= b = " + (a %= b) + "\n" +
      "a == b = " + (a == b) + "\n" +
      "a != b = " + (a != b) + "\n" +
      "a > b  = " + (a > b)  + "\n" +
      "a < b  = " + (a < b)  + "\n" +
      "!a && !c = " + (!a && !c) + "\n" +
      "!a || !c = " + (!a || !c) + "\n");
      
var first_name = "Martina";
var last_name = "Dionne";
var email = "dion0100@algonquinlive.com";
      
var output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email + ".";
//print output
console.log(output);
    

// alert( "description of alerted_value: " + alerted_value );

/* a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c*/

     
//Task 3
var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

console.log(numbers[0]);// first array element
console.log(numbers[4]);// last array element
   
var math = numbers [0] + numbers[4];         

console.log(numbers[0] + " + " + numbers[4] + " = " + (numbers[0] + numbers[4]));

console.log("numbers[0] + numbers[4] = " + math);

/*check if number is even or odd?
5 % 2 = 1 // means a number is odd*/

if (math % 2 == 0){
alert((numbers[0] + " + " + numbers[4] + " = " + math) + "\nThis is an even number!");
} else{
 alert((numbers[0] + " + " + numbers[4] + " = " + math) + "\nThis is an odd number!");
}
/*6 % 2 = 0 // means a numbers is even */

//+ " = " + (numbers [0] + numbers [4]));
//alert( "description of alerted_value: ");
//ARRAYS

