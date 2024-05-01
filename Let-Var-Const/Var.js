
/*
!JavaScript Var keyword:- 
The var is the oldest keyword to declare a variable in JavaScript. 
Scope:-  Global scoped or function scoped. The scope of the var keyword is the global or function scope. It means variables defined outside the function can be accessed globally, and variables defined inside a particular function can be accessed within the function. 

*Variable ‘a’ is declared globally. So, the scope of the variable ‘a’ is global, and it can be accessible everywhere in the program. The output shown is in the console.
*/ 

var a = 10
function f() {
	console.log(a)
}
f();
console.log(a);

/* Example2:- 
*The variable ‘a’ is declared inside the function. If the user tries to access it outside the function, it will display the error. Users can declare the 2 variables with the same name using the var keyword. Also, the user can reassign the value into the var variable. The output is shown in the console. */

function f() {
	/* It can be accessible any where within this function */
	var a = 10;
	console.log(a)
}
f();
/* A cannot be accessible outside of function */
console.log(a);

/* 
*The user can re-declare the variable using var and the user can update the var variable. The output is shown in the console. 
*/
var a = 10;
/* User can re-declare variable using var */
var a = 8;
/* User can update var variable */
a = 7;

//* If users use the var variable before the declaration, it initializes with the undefined value. The output is shown in the console.

console.log(a);
var a = 10;



/* 
!Var :
* The scope of a var variable is functional scope.
* It can be updated and re-declared into the scope.
* It can be declared without initialization.
* It can be accessed without initialization as its default value is “undefined”.
* hoisting done, with initializing as ‘default’ value
*/