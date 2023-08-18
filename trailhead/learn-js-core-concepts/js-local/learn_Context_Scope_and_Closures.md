# Learn About Context, Scope, and Closures

## Learning Objectives

After completing this unit, you’ll be able to:

* Identify how variables are scoped in JavaScript.
* Describe how this changes depending on where a function is called.
* Use closures to capture references to variables in functions.
* A critical piece of understanding any programming language is understanding the availability of variables, how state is maintained, and how to access that state. 

In JavaScript the availability and visibility of variables is referred to as scope. Scope is determined by where a variable is declared. 

Context is the state of the current execution of code. It is accessed through the `this` pointer. 

## Variable Scope

Variables in JavaScript are declared using the `var`, `let`, or `const` keywords. Where you call the keyword dictates the scope of variable being created. 

Understanding the difference between these three comes down to two factors: 
1. assignment mutability 
2. supporting nonfunction block scope.

In JavaScript, variables are scoped to the function in which they are declared. This means that variables declared inside a function are not visible outside of that function. 

### Fun with Scope
The block of code where a variable or argument is declared determines its scope. But var does not recognise nonfunction blocks of code. This means calling var in an if block or a loop block will assign the variable to the scope of the nearest enclosing function. This feature is called hoisting. 

When using let or const, an argument’s or a variable’s scope is always the actual block in which it is declared. There is a classic thought exercise to show this.

```
    function countToThree() {
  // i is in the scope of the countToThree function
  for (var i = 0; i < 3; i++){
    console.log(i); // iteration 1: 0
    // iteration 2: 1
    // iteration 3: 2
  }
  console.log(i); // What is this?
}
