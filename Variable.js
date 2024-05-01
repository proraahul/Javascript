/* 
Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:
1. var 
2. let
3. const 

!Rule for naming variables
1. Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
2. After first letter we can use digits (0 to 9), for example value1.
3. JavaScript variables are case sensitive, for example x and X are different variables. 
*/

let firstName = 'Rahul'
console.log(firstName);

console.log('RahulSaini');

// Variable Name Conventions
 let rahul_saini = 'RS';
 const $age = 21;
 var person = 'rahul';
 const PI = 3.1415;
 let myFirstJob = 'developer';
 let job = 'programmer';



/* 
!JavaScript local variable:
A JavaScript local variable is declared inside block or function. It is accessible within the function or block only. 
*For example:
*/ 
function abc(){  
var  x = 10; //local variable  
};
abc();
console.log(x)
// If (10<13) {  
//    var y = 20;  /* JavaScript local variable */
// }; 

/*
JavaScript global variable
A JavaScript global variable is accessible from any function. A variable i.e. declared outside the function or declared with window object is known as global variable. For example:
*/
var data=200; //gloabal variable  
function a(){  
    console.log(data);  
}  
function b(){  
    console.log(data);  
}  
a(); //calling JavaScript function  
b();  
