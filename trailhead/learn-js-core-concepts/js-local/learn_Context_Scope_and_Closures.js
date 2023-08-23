// example of closers
// let name1 = () => {             // this is a function
//     console.log('name1');       // log name1
//     const a = "menaihatega";    // a is a variable
//     return () => {              // this is a function
//         console.log('lumda');   // log lumda
//         console.log(a , 1);     // log a and 1
//         return a;               // return a
// }
// }
// let name2 = name1();            // name2 is a variable
// console.log(name2());           // log name2

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


// // Understanding scope of let var and const
function countToThree_var() {
    // i is in the scope of the countToThree function
    for (var i = 0; i < 3; i++){
      console.log(i); // iteration 1: 0
      // iteration 2: 1
      // iteration 3: 2
    }
    console.log(i); // What is this?
}

// // above code example where i is const 
// function countToThree_Const() {
//     // i is in the scope of the countToThree function
//     for (const i = 0; i < 3; i++){
//       console.log(i); // iteration 1: 0
//       // iteration 2: 1
//       // iteration 3: 2
//     }
//     console.log(i); // What is this?
// }

// // above code example where i is let
// function countToThree_Let() {
//     // i is in the scope of the countToThree function
//     for (let i = 0; i < 3; i++){
//       console.log(i); // iteration 1: 0
//       // iteration 2: 1
//       // iteration 3: 2
//     }
//     console.log(i); // What is this?
// }

// // above code with corrent syntax
// function countToThree_Let_correct() {
//     // i is in the scope of the countToThree function
//     for (let j = 0; j < 3; j++){
//       console.log(j); // iteration 1: 0
//       // iteration 2: 1
//       // iteration 3: 2
//     }
//     // console.log(j); // What is this?
// }


// countToThree_Let_correct();

// // another way to understand scope

// var x = 10; // global scope

// function myFunction() {
//   var y = 20; // local scope
//   console.log(x); // 10
//   console.log(y); // 20
// }

// myFunction();

// console.log(x); // 10
// // console.log(y); // ReferenceError: y is not defined



// // context and this keyword
// var obj = {
//     aValue: 0,
//     increment: function(incrementBy) {
//       this.aValue = this.aValue + incrementBy;
//     }
//   }

// obj.increment(2);  
// console.log(obj.aValue);

// // assign that function to another variable
// var newIncrement = obj.increment;
// // invoke through the new pointer
// newIncrement(2);
// console.log(obj.aValue); // still 2 not 4 as new function call refreshed the context
// // The Function.apply(), Function.call(), and Function.bind() functions provide ways to invoke a function while explicitly binding it to a different object context.

// // example for Function.apply()
// var obj = {
//     aValue: 0,
//     increment: function(incrementBy) {
//       this.aValue = this.aValue + incrementBy;
//     }
//   }
  
//   var newIncrement = obj.increment;
//   newIncrement.apply(obj, [2]);
//   console.log(obj.aValue); // 2

//   // example for Function.call()
//     var obj = {
//         aValue: 0,
//         increment: function(incrementBy) {
//         this.aValue = this.aValue + incrementBy;
//         }
//     }
//     var newIncrement =  newIncrement.call(obj, 2);
//     console.log(obj.aValue); // 2

// // example for Function.bind()
//     var obj = {
//         aValue: 0,
//         increment: function(incrementBy) {
//         this.aValue = this.aValue + incrementBy;
//         }
//     }

//     var newIncrement = obj.increment.bind(obj);
//     newIncrement(2);


// The Global Object

// Bike and frontGearIndex rearGearIndex example

// const Bike = function(frontIndex, rearIndex){
//     this.frontGearIndex = frontIndex || 0;
//     this.rearGearIndex = rearIndex || 0;
//     this.transmission = {
//         frontGearTeeth: [10, 20, 30],
//         rearGearTeeth: [40, 50, 60]
//     };
// }
// Bike.prototype.calculateGearRatio = function(){
//     let front = this.transmission.frontGearTeeth[this.frontGearIndex],
//     rear = this.transmission.rearGearTeeth[this.rearGearIndex];
//     if (front && rear) {
//       return (front / rear) ;
//     } else {
//       return 0;
//     }
//   };

// Bike.prototype.setGear = function(frontIndex, rearIndex){
//     this.frontGearIndex = frontIndex;
//     this.rearGearIndex = rearIndex;
// }

// const bike = new Bike (1,2);
// console.log(bike.frontGearIndex);
// console.log(bike.rearGearIndex); 

// let gearRatio = bike.calculateGearRatio();
// console.log(gearRatio);

// const badBike = Bike(1,2);
// console.log(badBike.frontGearIndex); // error
// console.log(window.frontGearIndex); // 1










//-----------------------------------

// let name = 'Jon Bond';
// let message;
// processName(name);
// console.log(message);
// function processName(name) {
//   console.log('processing name');
//   generateMessage(name);
// }
// function generateMessage(name) {
//   message = createString(name);
//   console.log('generated message');
// }
// function createString(name) {
//   console.log('creating string');
//   return `Welcome to the company, ${name}!`;


// }

//---------------------------------------------------------

/*
   The code below was used to test the given function named 'getUser'. There is a record in the database with the id 12. But there is no record with the id 400.
    1. getUser(12);
    2. getUser(400);
    The function returns a Promise object. However, the code snippet does not return any output, except an uncaught error when line 2 is executed. Which of the following can be done to resolve the issue?
    Choose 3 answers.        

*/

let getUser = function (id) {
    return new Promise((resolve, reject) => {
        let user = getUserFromStorage(id);
        if (user) {
            resolve(user);
        } else {
            reject('User not found');
        }
    });
}
/*
A. The ‘then’ method should be called on the Promise object to receive a response when the Promise is fulfilled.
B. The ‘catch’ method should be called on the Promise object to catch the error when the Promise is rejected.
C. The ‘getUser’ method must be wrapped within a console. log statement to display the returned value.
D. The ‘async’ and ‘await’ keywords can be used with a ‘try...catch’ statement to receive a response when the Promise is fulfilled and catch errors when it is rejected.
E. The ‘resolve’ method can be used to receive a value or error based on whether the Promise is fulfilled or rejected.

*/

// // Using then and catch
// getUser(12)
//   .then(response => {
//     // handle response
//     console.log(response);
//   })
//   .catch(error => {
//     // handle error
//     console.error(error);
//   });

// // Using async/await and try/catch
// async function getUserData(id) {
//   try {
//     const response = await getUser(id);
//     // handle response
//     console.log(response);
//   } catch (error) {
//     // handle error
//     console.error(error);
//   }
// }

// getUserData(12);









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



//------------------

// CLOSERS

// const greetingMake = function(greeting){
//     return function(whoGreeting){
//         console.log(greeting + ' ' + whoGreeting);
//     }
// }

// const greeingHello = greetingMake('Hello');
// const greetingBonjour = greetingMake('Bonjour');
// const greetingHola = greetingMake('Hola');

// greeingHello('John');
// greetingBonjour('Jane');
// greetingHola('James');


// function init () {
//     var name = "Morzilla"; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
// }
// init();

// Scoping with let and const


// if (Math.random() > 0.5) {
//     var x = 1;
//   } else {
//     var x = 2;
//   }
//   console.log(x);
  
  
// // 
// if (Math.random() > 0.5) {
//   const x = 1;
// } else {
//   const x = 2;
// }
// console.log(x); // ReferenceError: x is not defined

// makeAdder example

function makeAdder(x) {
    return function (y) {
        result = x + y;
        return result;
    };
}
  
const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
 
  

  



