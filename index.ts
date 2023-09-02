function sum (num1:number,num2:number){
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
}

