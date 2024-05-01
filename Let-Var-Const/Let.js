/*
!JavaScript let keyword:- 
The let keyword is an improved version of the var keyword. 

!Scope:- 
block scoped: The scope of a let variable is only block scoped. 
*It can’t be accessible outside the particular block ({-}). 
Let’s see the below example.

Example 1: The output is shown in the console.
*/
let a = 10;
function f() {
	let b = 9
	console.log(b);
	console.log(a);
}
f();
/* 
Example 2: 
*The code returns an error because we are accessing the let variable outside the function block. 
The output is shown in the console. */

let a = 10;
function f() {
	if (true) {
		let b = 9
		console.log(b); //it prints 9
	}
	console.log(b); /* it gives error as it defined in if block */
}
f()
console.log(a) // it prints 10

/* 
Example 3: 
*Users cannot re-declare the variable defined with the let keyword but can update it.
*/

let a = 10
let a = 10 // it's not allowed
a = 10 // it's allowed

/* Output: Uncaught SyntaxError: Identifier 'a' has already been declared  */

/* Example 4: 
* Users can declare the variable with the same name in different blocks using the let keyword.
*/

let a = 10
if (true) {
	let a = 9
	console.log(a) // it prints 9
}
console.log(a) // it prints 10

/*
Example 5: 
* If users use the let variable before the declaration, it does not initialize with undefined just like a var variable, and returns an error.
*/
console.log(a);
let a = 10;
/* Output: Uncaught ReferenceError: Cannot access 'a' before initialization */

/*
!Let 
* The scope of a let variable is block scope.
* It can be updated but cannot be re-declared into the scope.
* It can be declared without initialization.
* It cannot be accessed without initialization otherwise it will give ‘referenceError’.
* Hoisting is done, but not initialized (this is the reason for the error when we access the let variable before declaration/initialization
*/