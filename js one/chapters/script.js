                                                        // ch varables for string 

/*let firstName = "mariyam";
let lastName = "saleem";
let fullName = firstName + " " + lastName;
document.write("fullName:"+fullName);*/

//alert("student name"+ studentName); //it is not defined

/*let studentName;
console.log("student name"+ " " + studentName);*/ //it is undefined


                                                            // ch varables for numbers 
/* let num1 = 6;
 let num2 = 8;
 let result = num1+num2;
 console.log(result);*/

 //let currentNum = 6;
 //let myNum = "20";
 //currentNum = "hello world"; //change to string
 //console.log("currentNum is "+currentNum);
 //onsole.log(currentNum+10+Number(myNum)); //change to number answer 36


                                                    // ch Math expressions Familiar operators
// alert(10/2);     //divition
// alert(10%3);   //module

 /*var originalNum = "23";
var newNum = originalNum + 7;
console.log(newNum);*/          //answer will be 237

/*var originalNum = "23";
var newNum = originalNum - 7;
console.log(newNum); */         //now answer will be 16


                                                        //ch Math expressions: Unfamiliar operators
/* 
var num = 10;
alert(num);*/
/* num++; //increase 1
 alert(num);*/
 /*
 num++;             //post
 ++num;             //pre
 num--;
 alert(num);*/

/*  var num =2 + 2 * 4 - 5 * 2;
 alert(num);*/                //answer will be 0

 
 /*var num =( 2 + 2) * 4 - 5 * 2;
 alert(num); */               //now answer will be 6

 
 /*let a = 2;
 let b = 3;
 let result = (a++ + --b) - b++ - --a * a++;
              // 2 + 2 - 2 - 2 * 2
              //  4 - 2 = 2   2 - 4 = -2
 alert(result);        
 //answer will be -2 
 */


                                                        //ch Math expressions: Eliminating ambiguity
//console.log( 5 * 2 - ((2 + 2)* 2) - 2 * 4);   //answer will be -6


//Concatenating text strings
/*
 var message = "Thanks, ";
 var userName = "mariyam"
 var banger = "!";*/
 //alert(message + userName + banger);
 //we can also do 
 /*var customMess = message + userName + banger;
 alert(customMess);
 */



/*var getNumber = prompt("Enter your number");
console.log(typeof getNumber);  
// answer is string becuse I do'nt use + or parseInt before prompt
var getNumber = parseInt(prompt("Enter your number"));
console.log(typeof getNumber);    //answer is number
// you can also do it
var getNumber = prompt("Enter your number");
var getUserName = prompt("Enter your name");
console.log(Number(getNumber) + typeof getUserName); */



                                                        //if...else and else if statements

/*
var studentName = prompt("Enter your name");
if (studentName.toLowerCase() == "mariyam") {
alert("you are right user");
}
else if (studentName.toLowerCase() == "hina") {
    alert("you are new user");
}
else{
    alert("you are not right user");
}*/

/*
var salary = amountThree;
var amountOne = 10000;
var amountTwo = 25000;
var amountThree = 100000;
var amountFour = 1000000;
var amountFive = 10000000;*/
//else condition will be work because I assigned variable to value before initializ and js works top to bottom.
/*var amountOne = 10000;
var amountTwo = 25000;
var amountThree = 100000;
var amountFour = 1000000;
var amountFive = 10000000;
var salary = amountThree;
 // now it will work answer will be  you are average
if (salary === amountOne) {
    console.log("you are poor" + " " + studentName);
} else if (salary === amountTwo) {
    console.log("you are middle" + " " + studentName);
} else if (salary === amountThree) {
    console.log("you are average" + " " + studentName);
} else if (salary === amountFour) {
    console.log("you are rich" + " " + studentName);
} else if (salary === amountFive) {
    console.log("you are highly rich" + " " + studentName);
} else {
    console.log("I don't know about your status" + " " + studentName); 
}*/

/*var flag = true;
if (flag) {
console.log("It is raining!");
}
else{
    console.log("else is running!");  
}
*/
/*
var studentName = "mariyam";
var dairyMilk = "chocolete";
var lays = "chips";
if (studentName === "mariyam") {
alert("she likes"+" "+dairyMilk);
}
 if (studentName === "hina") {
    alert("she likes"+" "+lays);
}
else{
    alert("she likes nothing");
} */
// we can also use if multi times but else will only work with nearest if not work with first if 

/*
var studentName = "mariyam";
var dairyMilk = "chocolete";
var lays = "chips";
if (studentName === "mariyam") {
alert("she likes"+" "+dairyMilk);
}
 if (studentName === "hina") {
    alert("she likes"+" "+lays);
}*/
 
/*
var a = 3;
var b = 5;
var c = a + b;  // 3 + 5 = 8
var d = 8;
var answer = "good"
if (c === d) {
console.log(answer);
}*/

/*
var courseName = prompt("Enter your course nmae");
if (courseName === "web development" || courseName === "graphic designing" || courseName === "flutter" ) {
alert("you are inrolled in this course");
}
 else {
    alert("you are not inrolled in this course");
  // it is or operator
 }
 */

/*  if (!false) 
{
    console.log("hello");
 }*/
/*
var skill = prompt("Enter your skill"); 
var exp = +prompt("Enter your exp");
var city = prompt("Enter your city");
if((skill === "javascript" && exp > 2) || city === "karachi" ){
  alert("hired");
}
else{
    alert("sorry! you are not hired");
}*/

                                                        //Arrays
/*
var arr = ["1","2","3","4"];
console.log(arr[1]);
arr[4] ="5";
arr[5] = "6";
console.log(arr);
*/

                                            //Adding and removing elements 
 /*                                           
var arr = ["sameena","hina","zunera","amna"];
console.log(arr);
arr.pop();
console.log(arr);
arr.push("rabiya","iqra");
console.log(arr);
*/                             //works from last
/*                                    
var arr = ["sameena","hina","zunera","amna"];
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift("rabiya","iqra");
console.log(arr);
*/                                     //works from start

                                        //Removing, inserting, and extracting elements
// var students = ["fatima","hina","zunera","amna","usra"];
// console.log(students);
// students.splice(2,2,"zoya","asma");   // start from 2nd index to 3rd
// console.log(students);

// var pets = ["dog", "cat", 57,"fly", "bug", "alima", false];
// console.log(pets.slice(1, 5));
// console.log(pets.slice(5));

                                                //for loop
/*
var word = prompt("Enter word");
var reverse = "";

for (let i = word.length - 1; i >= 0; i--) {
     reverse += word[i];
}

if (word === reverse) {
    console.log("It's a plindrome");
}
else{
    console.log("It's not a plindrome");
}*/

/*
var arr = [11, 22, 83, 40, 55, 66, 78,10]
var min = arr[0];

for (let i = 0; i < arr.length; i++) {
 if (min > arr[i]) {
       min = arr[i]
 }
}
console.log(min);*/

// var pakistaniCities = "karachi";
// for (let i = 0; i < pakistaniCities.length; i++) {
//     console.log(pakistaniCities[i]);
// }


                                                            //functions
// function myFunction(){ 
//     console.log("hello world");
// }
// myFunction();

// function myFunction(a,b)  //parameter
//{
//     console.log(a+b);
// }
// myFunction(5,6); //aurgment
// myFunction(3,16);
// myFunction(6,6);

// function sum(x,y){
// s = x+y;
// return s;
// }
// var value = sum(5,6);
// console.log(value);
// var value = sum(4,9);
// console.log(value);

// function sum(x,y)
// {
//     s = x+y;
//     console.log("before");
//     return s;
//     console.log("after");
//     }
// console.log(sum(3,4));

// function multiplication(p1, p2)
// {
//     return p1*p2
// }
// console.log(multiplication(5,8));

// function square(a)
// {
//     return a * a;
// }
// console.log(square(7));
// console.log(square(2));

        //convert fahrenheit to celsius
// function fahrenheitToCelsius(fahrenheit)
// {
//     return(5/9) *(fahrenheit - 32);
// }
// console.log(fahrenheitToCelsius(77));

// function factorial(n)
// {
// if(n === 0 || n === 1)
// {
//   return 1;
// } else {
//     return n * factorial(n - 1);
// }
// }
// console.log(factorial(4));

const additionofNum = (a,b)   =>
{
    return a+b;
}                                                     
console.log(additionofNum(56,87));