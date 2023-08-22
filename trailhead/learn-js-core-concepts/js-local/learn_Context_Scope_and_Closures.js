// example of closers
let name1 = () => {             // this is a function
    console.log('name1');       // log name1
    const a = "menaihatega";    // a is a variable
    return () => {              // this is a function
        console.log('lumda');   // log lumda
        console.log(a , 1);     // log a and 1
        return a;               // return a
}
}
let name2 = name1();            // name2 is a variable
console.log(name2());           // log name2

/*
    A closer is a function that returns another function 
    and the returned function can access the variables of 
    the parent function.

    In the above example, name1 is a function that returns
    another function and the returned function can access
    the variable a of the parent function.

    The variable a is not accessible outside the function
    name1. But the returned function can access the variable
    a of the parent function.

    The function name1 is called a parent function and the
    function that is returned is called a child function.

    The child function can access the variables of the parent
    function even after the parent function has returned.

*/

// Adding this comment to test git

















// Hoisting snf closers example

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function() {
//       return this.firstName + ' ' + this.lastName;
//     }
//   };
  
//   const person2 = {
//     firstName: 'Jane',
//     lastName: 'Doe'
//   };
  
//   // Using call
//   console.log(person.fullName.call(person2)); // Output: Jane Doe
  
//   // Using apply
//   console.log(person.fullName.apply(person2)); // Output: Jane Doe
  
//   // Using bind
//   const fullName = person.fullName.bind(person2);
//   console.log(fullName()); // Output: Jane Doe


//   Function.prototype.myBind = function (context, ...args) {
//     const fn = this;
//     return function (...innerArgs) {
//       return fn.apply(context, args.concat(innerArgs));
//     };
//   };

//   Function.prototype.myApply = function (context, args) {
//     context.fn = this;
//     const result = context.fn(...args);
//     delete context.fn;
//     return result; 
//   };
  
  
  
  

  



