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

var studentName = "mariyam";
var dairyMilk = "chocolete";
var lays = "chips";
if (studentName === "mariyam") {
alert("she likes"+" "+dairyMilk);
}
 if (studentName === "hina") {
    alert("she likes"+" "+lays);
}