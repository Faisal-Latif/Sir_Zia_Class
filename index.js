"use strict";
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(2, 3));
function sum1(num1, num2) {
    //var num1:number=10;
    //var num2:number=30;
    var result = num1 + num2;
    //result = result+5;
    return result;
    console.log(result);
}
var sumresult = sum1(40, 50);
sumresult = sumresult + 5;
console.log(sumresult);
function burhan(num, gum) {
    // var num:number=10;
    // var gum:number=5;
    var result1 = num + gum;
    return result1;
    console.log(result1);
}
var add2 = burhan(10, 5);
console.log(add2);
var sumresult = sum(40, 50);
sumresult = sumresult + 5;
console.log(sumresult);
//Arrow
var sumArrow = (num3, num4) => {
    //var num3:number=25;
    //var num4:number=35;
    var sumAdd = num3 + num4;
    return sumAdd;
    console.log(sumAdd);
};
var addSum = sumArrow(35, 45);
console.log(addSum);
var arrow = () => {
    var num5 = 20;
    var num6 = 15;
    var addArrow = num5 + num6;
    return addArrow;
    console.log(addArrow);
};
var add = arrow();
console.log(add);
function cTof(temp) {
    //var temp:number=20;
    var F = (temp * 9 / 5) + 32;
    var C = (temp - 32) * 5 / 9;
    //return
    console.log(F);
    console.log(C);
}
//var fToc:number=cTof(20);
//console.log(fToc);
cTof(20);
function weekAndday() {
    const days = 0;
    const weeks = days / 7;
    const remainingdays = days % 7;
    //console.log("weeks"+weeks,"days"+remainingdays);
    //weekAndday();
    if (weeks > 0 && remainingdays > 0) {
        console.log(`weeks,${weeks},remaingdays,${remainingdays}`);
    }
    else if (weeks > 0 && remainingdays <= 0) {
        console.log(`weeks,${weeks},no remainingdays,${remainingdays}`);
    }
    else if (weeks <= 0 && remainingdays > 0) {
        console.log(`no weeks,${weeks},remaingdays,${remainingdays}`);
    }
    else {
        console.log(`no weeks,${weeks},no remaingdays,${remainingdays}`);
    }
}
weekAndday();
var colour = "black";
switch (colour) {
    case "green": {
        console.log("green colour");
        break;
    }
    case "red": {
        console.log("red colour");
        break;
    }
    default: {
        console.log("blue colour");
        break;
    }
}
var student = [10, 20, 30, 40, 50];
student.pop();
student.push(50);
student.shift();
student.unshift(10);
student.splice(0, 0, 200);
var studentname = student.slice(5);
console.log(studentname);
var studentnames = ["ali", "hassan", "burhan", "hussain"];
function push(studentnum) {
    studentnames[studentnames.length] = studentnum;
}
console.log(studentnames);
push("akber");
console.log(studentnames);
for (let index = 0; index < 5; ++index) {
    console.log(1);
}
var index = 1;
while (index < 10) {
    console.log(index);
    index = index + 1;
}
let table = 1;
while (table <= 10) {
    let tables = 2 * table;
    console.log("2*" + table + "=" + tables);
    table++;
}
var numArray2 = [];
var j = 1;
while (j <= 25) {
    numArray2.push(j);
    console.log(j);
    j++;
}
var farray = [];
var f = 1;
while (f <= 25) {
    farray.push(f);
    console.log(farray);
    f++;
}
var numArray1 = [];
var evenNumber = 0;
var count = 0;
while (count < 10) {
    if (evenNumber % 2 == 0) {
        numArray1.push(evenNumber);
        count++;
    }
    evenNumber++;
}
var garray = [];
var g = 1;
while (g <= 10) {
    garray.push(g);
    console.log("g", g);
    g++;
}
