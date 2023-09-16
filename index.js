"use strict";
/*function sum (num1:number,num2:number){
    return num1 + num2
}

console.log(sum(2,3));

function sum1(num1:number,num2:number) {
    //var num1:number=10;
    //var num2:number=30;
    var result:number=num1+num2;
    //result = result+5;
    return result
    console.log(result);
}
var sumresult:number=sum1(40,50)
sumresult=sumresult+5;
console.log(sumresult);

function burhan(num:number,gum:number) {
   // var num:number=10;
   // var gum:number=5;
    var result1:number=num+gum;
    return result1
    console.log(result1);
    
}
var add2:number=burhan(10,5)
console.log(add2);




var sumresult:number=sum(40,50)
sumresult=sumresult+5;
console.log(sumresult);
//Arrow
var sumArrow=(num3:number,num4:number):number=>{
    //var num3:number=25;
    //var num4:number=35;
    var sumAdd=num3+num4;
    return sumAdd
    console.log(sumAdd);
}
var addSum:number=sumArrow(35,45)
console.log(addSum);

var arrow=() => {
    var num5:number=20;
    var num6:number=15;
    var addArrow=num5+num6;
    return addArrow
    console.log(addArrow);
    
}
var add:number=arrow();
console.log(add);

function cTof(temp:number) {
    

//var temp:number=20;
var F:number=(temp*9/5)+32;
var C:number=(temp-32)*5/9;
//return
console.log(F);
console.log(C);
}
//var fToc:number=cTof(20);
//console.log(fToc);
cTof(20);

function weekAndday() {
const days:number=0;
const weeks:number=days/7;
const remainingdays:number=days%7;
//console.log("weeks"+weeks,"days"+remainingdays);

//weekAndday();

if (weeks>0 && remainingdays>0) {
    console.log(`weeks,${weeks},remaingdays,${remainingdays}`);
    
} else if(weeks>0 && remainingdays<=0) {
    console.log(`weeks,${weeks},no remainingdays,${remainingdays}`);
    
}
else if(weeks<=0 && remainingdays>0) {
    console.log(`no weeks,${weeks},remaingdays,${remainingdays}`);
}
    else{console.log(`no weeks,${weeks},no remaingdays,${remainingdays}`);
}}
weekAndday()

var colour:string="black";
switch (colour) {
    case "green":{console.log("green colour");break;}
        case "red":{console.log("red colour");break;}

    default:{console.log("blue colour");break;}
}

var student:number[]=[10,20,30,40,50]
student.pop();
student.push(50);
student.shift();
student.unshift(10);
student.splice(0,0,200)
var studentname=student.slice(5);
console.log(studentname);

var studentnames:string[]=["ali","hassan","burhan","hussain"];

function push(studentnum:string) {
studentnames[studentnames.length]=studentnum;
}
console.log(studentnames);
push("akber");
console.log(studentnames);

for (let index = 0; index < 5; ++index) {
    console.log(1);
}
var index:number=1;
while (index<10) {
    console.log(index);
    index=index+1;
}
let table:number=1;
while (table<=10) {
    let tables=2*table;
    console.log("2*"+table+"="+tables);
    table++
    
}

var numArray2: number[] = [];
var j = 1;
while (j <= 25) {
  numArray2.push(j);
  console.log(j);
  
  j++;
}

var farray:number[]=[];
var f:number=1;
while (f<=25) {
farray.push(f);
console.log(farray);

    f++;
}

var numArray1: number[] = [];
var evenNumber: number = 0;
var count: number = 0;
while (count < 10) {
  if (evenNumber % 2 == 0) {
    numArray1.push(evenNumber);
    count++;
  }
  evenNumber++;
}


var garray:number[]=[];
var g:number=1;
while (g<=10) {
    garray.push(g);
  console.log("g", g);
    
    g++;
}*/
//QUESTION 2
// Personal Message: Store a person’s name in a variable, and print a message to 
// that person. Your message should be simple, such as, “Hello Eric, would you like 
// to learn some Python today?”
var faisalName = "Hello Eric";
console.log(+faisalName + " would you like to learn some type script today");
// QUESTION 3
// Name Cases: Store a person’s name in a variable, and then print that person’s 
// name in lowercase, uppercase, and titlecase.
var faisalCase = "Muhammad Burhan";
var lowerCase = faisalCase.toLowerCase();
var upperCase = faisalCase.toUpperCase();
var titleCase = faisalCase.toString();
console.log(lowerCase);
console.log(upperCase);
console.log(titleCase);
// Question 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the
// name of its author. Your output should look something like the following,
// including the quotation marks:
const quote = "Winner Never Quit, Quitter Never Win";
const author = "Vince Lombardi";
console.log(`${author},once said,${quote}`);
//Question 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in
//a variable called famous_person. Then compose your message and store it in a new 
//variable called message. Print your message.
const famous_person = "Vince Lombardi";
const message = "Winner Never Quit, Quitter Never Win";
console.log(message);
// Question 6
// Stripping Names: Store a person’s name, and include 
// some whitespace characters at the beginning and end of the name. 
// Make sure you use each character combination, "\t" and "\n", at least once. 
// Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the whitespaces.
var strippingName = `Muhammad\tBurhan`;
console.log(strippingName.trim());
//Question 7 & 8
// Number Eight: Write addition, subtraction, multiplication, and division operations
// that each result in the number 8. Be sure to enclose your operations in print 
// statements to see the results.
var a = 5;
var b = 3;
var c = 10;
var d = 2;
var e = 4;
var f = 16;
console.log(a + b);
console.log(c - d);
console.log(d * e);
console.log(f / d);
// Question 9
// Favorite Number: Store your favorite number in a variable. Then, using that 
// variable, create a message that reveals your favorite number. Print that message.
let favoriteNum = 7;
let myMessage = "My favorite number is";
console.log(`${myMessage}:${favoriteNum}`);
// Adding Comments: Choose two of the programs you’ve written, and add at least one
// comment to each. If you don’t have anything specific to write because your 
// programs are too simple at this point, just add your name and the current date 
// at the top of each program file. Then write one sentence describing what the 
// program does.
//HELLO MY NAME IS Faisal Latif 06.09.2023, I AM TRYING TO DEVELOP A SOFTWARE.
// QUESTION 11
// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.
var friendsNames = ["Ali", "Ahmad", "Aslam", "Suleman"];
for (var i = 0; i < friendsNames.length; i++) {
    var friendsName = friendsNames[i];
    console.log(friendsName);
}
// QUESTION 12
// Greetings: Start with the array you used in Exercise 11, but instead of just
// printing each person’s name, print a message to them. The text of each message 
// should be the same, but each message should be personalized with the person’s 
//name.
console.log("How are you", friendsNames[0]);
console.log("Are you fine", friendsNames[1]);
console.log("Hello dear", friendsNames[2]);
console.log("Good Morning", friendsNames[3]);
// Question 13
// Your Own Array: Think of your favorite mode of transportation, such as a 
// motorcycle or a car, and make a list that stores several examples. 
// Use your list to print a series of statements about these items, such as 
// “I would like to own a Honda motorcycle.”
var myCar = ["red colour", "best fuel average", " good Air Conditioner", "excellent suspension"];
for (let i = 0; i < 1; i++) {
    console.log("I like", myCar[0], "with", myCar[1], "an", myCar[2], "and", myCar[3]);
}
// Question 14
// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like 
// to invite to dinner. Then use your list to print a message to each person, 
// inviting them to dinner.
let dinner = ["Burhan", "Rohan", "Subhan"];
for (let i = 0; i < dinner.length; i++) {
    console.log("Dear Mr.", dinner[i], "You are invited to join us on a dinner");
}
// Question 15
// Changing Guest List: You just heard that one of your guests can’t make the 
// dinner, so you need to send out a new set of invitations. You’ll have to think 
// of someone else to invite.
// Start with your program from Exercise 14. Add a print statement 
// at the end of your program stating the name of the guest who can’t make it.
console.log("Announcement: Mr.", dinner[2], "Will not be the part of dinner");
// Modify your list, replacing the name of the guest who can’t 
// make it with the name of the new person you are inviting.
dinner.splice(2, 1, "Salman");
console.log(dinner[2]);
//Print a second set of invitation messages, one for each person who is 
//still in your list.
console.log("Announcement with Revision: Mr.", dinner, "You are invited to join us on a dinner");
// QUESTION 16
// More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.Start with your program from 
// Exercise 15. Add a print statement to the end of your program informing people 
// that you found a bigger dinner table.
dinner.unshift("Arsalan");
console.log(dinner);
//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
dinner.splice(2, 0, "Salman");
console.log(dinner);
dinner.push("Owaise");
console.log(dinner);
console.log("Mr.", dinner, "You re invited to join us on a dinner");
//question 17
// Shrinking Guest List: You just found out that your new dinner table won’t 
// arrive in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message 
// saying that you can invite only two people for dinner.
// Remove guests from your list one at a time until only two names remain in your 
// list. Each time you pop a name from your list, print a message to that person 
// letting them know you’re sorry you can’t invite them to dinner.
console.log(dinner[5], "We are sorry you can not invite for dinner");
dinner.pop();
console.log(dinner[0], "We are sorry you are not invited for dinner");
dinner.shift();
console.log(dinner[1], "We are sorry you are not invited for dinner");
dinner.splice(1, 1);
console.log(dinner[2], "We are sorry you are not invited for dinner");
dinner.splice(2, 1);
console.log(dinner);
//Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(dinner, "You are invited for dinner");
//question 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var places = ["Makkah ", "Turkey", "Iran", "madina", "Iraq",];
// • Print your array in its original order.
console.log("original order", places);
// • Print your array in alphabetical order without modifying the actual list.
let placesModify = [...places].sort();
console.log("alphabet order", placesModify);
// • Show that your array is still in its original order by printing it.
console.log("original order", places);
//  • Print your array in reverse alphabetical order without changing the order of the original list.
let placesReverse = [...places].reverse();
console.log("reverse alphabet order", placesReverse);
// • Show that your array is still in its original order by printing it again.
console.log("original order", places);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("reverse order again", places.reverse());
console.log("original order again", places.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("alphabet order", places.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order
// has changed.
console.log("reverse alphabet order", places.reverse());
// question 19
// Dinner Guests: Working with one of the programs from Exercise --s 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
console.log("people you are inviting to dinner", dinner.length);
// question 20
// Think of something you could store in a array. For example, you could make a 
// list of mountains, rivers, countries,cities, languages, or anything else 
//you’d like. Write a program that creates a list containing these items.
let cityList = ["Faisalabad", "Lahore", "Islamabad", "Karachi", "peshawar"];
for (let index = 0; index < cityList.length; index++) {
    console.log(cityList[index]);
}
//question 21
//They think of something you could store in a TypeScript Object. Write a program
//that creates Objects containing these items.
var object = {
    Name: "Faisal",
    age: 40,
    isStudent: true,
    hobbies: 'Learning","Codding'
};
console.log(object);
// question 22
// Intentional Error: If you haven’t received an array index error in one of your
// programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the
// program.
const indexArray = [1, 2, 3, 4, 5];
// Intentionally access an element at an invalid index
console.log(indexArray[5]);
// Correct the error by accessing a valid index
console.log(indexArray[2]);
//question 23
/*Conditional Tests: Write a series of conditional tests. Print a statement describing
 each test and your prediction for the results of each test. Your code should look something like this:*/
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//1
let age = 40;
console.log("is age == '40'? I predict True");
console.log(age == 40);
//2
console.log("is age > '40'? I predict False");
console.log(age > 40);
//3
let amI = "developer";
console.log("is amI == 'developer'? I predict True");
console.log(amI == "developer");
//4
console.log("is amI == 'doctor'? I predict False");
console.log(amI == "doctor");
//5
let myRole = "learner";
console.log("is myRole == 'learner'? I predict True");
console.log(myRole == "learner");
//6
console.log("is myRole == 'player'? I predict False");
console.log(myRole == "player");
//7
let practice = "Yes";
console.log("is practice == 'Yes'? I predict True");
console.log(practice == "Yes");
//8
console.log("is practice == 'yes'? I predict False");
console.log(practice == "yes");
//9
let month = "june";
console.log("is Month == 'june'? I predict True");
console.log(month == "june");
//10
console.log("is Month == 'may'? I predict False");
console.log(month == "may");
//question 24
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests. Have at least one True and one
 False result for each of the following:*/
// Tests for equality and inequality with strings
let myName = 'Faisal';
// Tests for equality
console.log("Tests for equality? predict True");
console.log(myName == 'Faisal');
// Tests for inequality
console.log("Tests for inequality? predict False");
console.log(myName != 'Faisal');
// Tests using the lower case function
let studentpractice = "Yes";
console.log("Tests using the upper case 'Yes'? I predict True");
console.log(studentpractice == "Yes");
console.log("Tests using the lower case 'yes'? I predict False");
console.log(studentpractice == "yes");
// Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
let n1 = 3;
let n2 = 7;
console.log(n1 == n2);
console.log(n2 != n1);
console.log(n1 < n2);
console.log(n1 > n2);
console.log(n2 <= n1);
console.log(n1 >= n2);
// • Tests using "and" and "or" operators
console.log(n1 < n2 && n2 > n1); //true
console.log(n2 > n1 && n1 > n2); //false
// or ||
console.log(n1 < n2 || n2 < n1); //true
console.log(n1 > n2 || n2 < n1); //false
// • Test whether an item is in a array
const color = ["red", "blue", "green", "yellow"];
console.log(color.includes("black")); //false
console.log(color.includes("green")); // true
// • Test whether an item is not in a array
const fruits = ["banaba", "apple", "orange", "guava"];
console.log(!fruits.includes("kiwi")); //true
console.log(!fruits.includes("apple")); // false
//question 25
/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable
called alien_color and assign it a value of 'green', 'yellow', or 'red'. */
var alien_color = ["green", "yellow", "red"];
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
if (alien_color.includes("green")) {
    console.log("player just earned 5 points");
}
// • Write one version of this program that passes the if test and another that fails.
// (The version that fails will have no output.)
if (alien_color.includes("green")) {
    console.log("passes");
}
else {
    console.log("fails");
}
// question 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25,
// and write an if-else chain.
var alien_color2 = ["green", "yellow", "red"];
// a. If the alien’s color is green, print a statement that the player just earned 5 
// points for shooting the alien.
if (alien_color2.includes("grren")) {
    console.log("player just earned 5 points for shooting the alien.");
    // b. If the alien’s color isn’t green, print a statement that the player just earned 
    //10 points. 
}
else {
    console.log("player just earned 10 points.");
}
// question 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
var alien_color3 = ["green", "yellow", "red"];
//a. If the alien is green, print a message that the player earned 5 points.
for (let i = 0; i < alien_color3.length; i++) {
    if (alien_color3[i] == "green") {
        console.log(alien_color3[i], "So, player earned 5 points.");
        //b. If the alien is yellow, print a message that the player earned 10 points.
    }
    else if (alien_color3[i] == "yellow") {
        console.log(alien_color3[i], "So,player earned 10 points.");
        //c. If the alien is red, print a message that the player earned 15 points.
    }
    else if (alien_color3[i] == "red") {
        console.log(alien_color3[i], "So,player earned 15 points.");
    }
}
//question 28. Stages of Life: Write an if-else chain that determines a person’s stage of life.
// Set a value for the variable age, and then:
var aged = 66;
// a. If the person is less than 2 years old, print a message that the person is a baby.
if (aged < 2) {
    console.log("person is baby");
    // b. If the person is at least 2 years old but less than 4, print a message that
    // the person is a toddler. 
}
else if (aged == 2 && aged < 4) {
    console.log("person is a toddler.");
    // c. If the person is at least 4 years old but less than 13, print a message that
    // the person is a kid.   
}
else if (aged == 4 && aged < 13) {
    console.log("person is a kid");
    // d. If the person is at least 13 years old but less than 20, print a message that
    // the person is a teenager.    
}
else if (aged == 13 && aged < 20) {
    console.log("person is a teenager.");
    // e. If the person is at least 20 years old but less than 65, print a message that
    // the person is an adult.   
}
else if (aged == 20 && aged < 65) {
    console.log("person is an adult.");
    // f. If the person is age 65 or older, print a message that the person is an elder    
}
else {
    console.log("person is an  elder");
}
//question 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of
// independent if statements that check for certain fruits in your array.
// a. Make a array of your three favorite fruits and call it favorite_fruits.
var favoriteFruits = ["apple", "banana", "mango"];
// b. Write five if statements. Each should check whether a certain kind of fruit is
// in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
favoriteFruits.map((fruit) => {
    if (fruit == "apple") {
        console.log("you really like apple");
    }
    else if (fruit == "banana") {
        console.log("you really like banana");
    }
    else if (fruit == "mango") {
        console.log("you really like mango");
    }
    else if (fruit == "orange") {
        console.log("you do not like orange");
    }
    else if (fruit == "guava") {
        console.log("you do not like guava");
    }
    else {
        console.log("you do not like");
    }
});
//question 30. Hello Admin: Make a array of five or more usernames, including the name
// 'admin'. Imagine you are writing code that will print a greeting to each user after
// they log in to a website. Loop through the array, and print a greeting to each user:
var usernames = ["admin", "faisal", "ali", "burhan"];
// a. If the username is 'admin', print a special greeting, such as Hello admin, would
// you like to see a status report?
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "admin") {
        console.log("Hello", usernames[i], "would you like to see a status report?");
    }
    // b. Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.     
    else {
        console.log("Hello", usernames[i], "thank you for logging in again.");
    }
}
//question 31
//No Users: Add an if test to Exercise --28 to make sure the list of users is not empty.
let users = ["faisal", "hussain", "hassan", "burhan", "rohan"];
//Remove all of the usernames from your array, and make sure the correct message is printed.
while (users.length > 0) {
    users.pop();
}
console.log(users.length);
//question 32
// Checking Usernames: Do the following to create a program that simulates how websites
// ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users = ["asgar", "akber", "amer", "arshad", "amjad"];
// • Make another list of five usernames called new_users. Make sure one or two of the
// new usernames are also in the current_users list.
let new_users = ["asgar", "akber", "ahsan", "essa", "ibrahim"];
// • Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.
for (var i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i])) {
        console.log(new_users[i], "the person will need to enter a new username");
    }
    else {
        console.log(new_users[i], "the username is available");
    }
}
// question 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 
//1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// a. Store the numbers 1 through 9 in a array.
var ordinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// c. Use an if-else chain inside the loop to print the proper ordinal ending for each
//number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th",and each result
// should be on a separate line.
for (let i = 0; i < ordinalNumber.length; i++) {
    if (ordinalNumber[i] == 1) {
        console.log(ordinalNumber[i] + "st");
    }
    else if (ordinalNumber[i] == 2) {
        console.log(ordinalNumber[i] + "nd");
    }
    else if (ordinalNumber[i] == 3) {
        console.log(ordinalNumber[i] + "rd");
    }
    else {
        console.log(ordinalNumber[i] + "th");
    }
}
//question 34. Pizzas: Think of at least three kinds of your favorite pizza. Store 
//these pizza names in a array, and then use a for loop to print the name of each pizza.
var pizzas = ["chicken fajita", "home town", "malai boti"];
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
// a. Modify your for loop to print a sentence using the name of the pizza instead of
// printing just the name of the pizza. For each pizza you should have one line of
// output containing a simple statement like I like pepperoni pizza.
for (let i = 0; i < pizzas.length; i++) {
    console.log("i like", pizzas[i], "pizza");
    // • Add a line at the end of your program, outside the for loop, that states how much 
    // you like pizza. The output should consist of three or more lines about the kinds of
    // pizza you like and then an additional sentence, such as I really love pizza!
    console.log("I really love pizza!");
}
// question 35. Animals: Think of at least three different animals that have a common
// characteristic. Store the names of these animals in a list, and then use a for loop
// to print out the name of each animal. 
var animals = ["dog", "cow", "goat"];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Modify your program to print a statement about each animal, such as A dog would make
// a great pet.
for (let i = 0; i < animals.length; i++) {
    console.log("A", animals[i], " would make a great pet");
}
// Add a line at the end of your program stating what these animals have in common.
// You could print a sentence such as Any of these animals would make a great pet!
console.log("Any of these animals would make a great pet!");
//question 36. T-Shirt: Write a function called make_shirt() that accepts a size and
//the text of a message that should be printed on the shirt. The function should print
//a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log(`you order ${size} T-shirt and message  you want to print is "${message}"`);
}
make_shirt("small", "6 month baby");
// question 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a 
//medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size) {
    if (size === `large`) {
        console.log("I love TypeScript.");
    }
    else if (size === `medium`) {
        console.log("I love Pakistan.");
    }
    else if (size === `small`) {
        console.log("I love you");
    }
}
makeShirt("large");
makeShirt("medium");
makeShirt("small");
// question 38. Cities: Write a function called describe_city() that accepts the name 
//of a city and its country. The function should print a simple sentence, such as 
// Karachi is in Pakistan. Give the parameter for the country a default value. Call 
//your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "default country") {
    console.log(`${city} is in ${country}`);
}
describe_city("lahore", "pakistan");
describe_city("istanbol", "turkey");
describe_city("amritsar");
/*question 39. City Names: Write a function called city_country() that takes in the
name of a city and its country. The function should return a string formatted like his:
"Lahore, Pakistan" Call your function with at least three city-country pairs, and print
 the value that’s returned.*/
function city_country(city, country) {
    console.log(`"${city}, ${country}"`);
}
;
city_country("Faislabad", "Pakistan");
city_country("Istanbul", "Turkey");
city_country("Madina", "Sudia Arabia");
/* question 40.
Album: Write a function called make_album() that builds a Object describing a music
album. The function should take in an artist name and an album title, and it should
return a Object containing these two pieces of information. Use the function to make
three dictionaries representing different albums. Print each return value to show that
Objects are storing the album information correctly. Add an optional parameter to
make_album() that allows you to store the number of tracks on an album. If the calling
line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.*/
function make_album(artist, album) {
    const output = {
        artist,
        album
    };
    console.log(output);
}
;
make_album("guru", "abc");
//question 41.Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
const magicianArray = ["jawad", "fawad", "sajjad", "mujahad", "karamat", "salamat"];
function show_magicians(megician) {
    megician.forEach(element => {
        console.log(element);
    });
}
;
show_magicians(magicianArray);
// question 42.Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to see that the
// list has actually been modified.
const magician = ["jawad", "fawad", "sajjad", "mujahad", "karamat", "salamat"];
function make_great(megician) {
    megician.forEach(element => {
        console.log(element);
    });
}
;
make_great(magician);
function show_magician(megician) {
    const greatMagician = magician.map(magician => `the great ${magician}`);
    return greatMagician;
}
console.log(show_magician(magician));
// question 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the 
// original array will be unchanged, return the new array and store it in a separate 
// array. Call show_magicians() with each array to show that you have one array of the
// original names and one array with the Great added to each magician’s name.
make_great(magician);
const newArray = ["jawad", "fawad", "sajjad", "mujahad", "karamat", "salamat"];
show_magician(newArray);
// question 44. Sandwiches: Write a function that accepts a array of items a person 
// wants on a sandwich. The function should have one parameter that collects as many 
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number of
// arguments each time.
// question 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It should then
// accept an arbitrary number of keyword arguments. Call the function with the required 
// information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.
