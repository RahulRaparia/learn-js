// for printing in Node environment
// console.log('Hello, World!');
// for printing in browser environment
// alert('Hello, World!');


//object literal notation


// console.log("object literal notation");
// const bike = {
//     gears: 10,
//     currentGear: 3,
//     changeGear: function (direction, changeBy) {
//         if (direction === 'up') {
//             this.currentGear += changeBy;
//         } else if (direction === 'down') {
//             this.currentGear -= changeBy;
//         } else {
//             console.log('Invalid direction');
//         }
//     }
// }
// console.log(bike.gears);
// console.log(bike.currentGear);
// bike.changeGear('up', 2);
// console.log(bike.currentGear);
// bike.changeGear('down', 1);
// console.log(bike.currentGear);

/*
    Object literal notation is declarative in nature. 
    The object bike in this example has three members: 
    the gears and currentGear properties and the changeGear function. 
    To reference those members once the object has been created, 
    use dot notation. 

    You may notice JSON and object literal notation resemble each other, 
    but they’re not the same. JSON is a data-interchange format. 
    Object literal notation is a programming syntax. However, 
    the JSON spec is based on object-literal notation, so it’s 
    easy to conflate the two.
*/

//New Objects with Constructors

// console.log("New Objects with Constructors");
// function Bike(gears, startGear) {
//     this.gears = gears;
//     this.currentGear = startGear;
// }
// Bike.prototype.changeGear = function (direction, changeBy) {
//     if (direction === 'up') {
//         this.currentGear += changeBy;
//     } else if (direction === 'down') {
//         this.currentGear -= changeBy;
//     } else {
//         console.log('Invalid direction');
//     }
// }
// const bike = new Bike(10, 3);
// console.log(`Total Gears : `,bike.gears,`Current Gear` ,bike.currentGear);
// bike.changeGear('up', 2);
// console.log(`Current Gear` ,bike.currentGear);
// bike.changeGear('down', 1);
// console.log(`Current Gear` ,bike.currentGear);


/*
    Bike is aFunc that defines a new type of object.
    Bike is a constructor function.
    The new keyword creates an instance of the Bike object.
    The changeGear method is defined on the Bike prototype.
    The Bike prototype is an object that’s shared by all instances of Bike.
    The changeGear method can be called on any instance of Bike.

    We follow JavaScript convention and capitalize the first word to signal that this function is a constructor. 

*/


//  Assigning Properties and Functions to Objects

/*
    At the time of the writing of this module, 
    there are seven primitive types in JavaScript: 
    string, number, Boolean, null, undefined, symbol, and bigint. 
    Primitive types are immutable. 
    When a variable is a primitive type, it’s passed by value 
    when assigned. That is to say, each time a primitive is 
    assigned, a copy of the value is made and assigned to the 
    new variable.  

    Pretty much anything that isn’t a primitive in JavaScript 
    is an object. In object literal notation, object properties 
    are denoted by curly brackets. 

    Arrays themselves are also implemented as objects in 
    JavaScript. Arrays can be created with the Array() 
    constructor function or with literal notation denoted 
    by square brackets. 

    let’s take another pass at defining a more complex 
    bike object using object literal notation.
*/


// console.log("Assigning Properties and Functions to Objects");
// const bike = {
//     frontGearIndex: 0,
//     rearGearIndex: 0,
//     transmission: {
//         frontGearTeeth: [30, 40, 50],
//         rearGearTeeth: [11, 13, 15, 17, 19, 21, 24, 28, 32, 36]
//     },
//     calculateGearRatio: function () {
//         let front = this.transmission.frontGearTeeth[this.frontGearIndex];
//         let rear = this.transmission.rearGearTeeth[this.rearGearIndex];
//         return front / rear;
//     },
//     changeGear: function(frontOrRear, upOrDown) {
//         let shiftFunction = frontOrRear + upOrDown;
//         this[shiftFunction]();
//       },
//       frontUp: function(){
//         this.frontGearIndex += 1;
//       },
//       frontDown: function(){
//         this.frontGearIndex -= 1;
//       },
//       rearUp: function(){
//         this.rearGearIndex += 1;
//       },
//       rearDown: function(){
//         this.rearGearIndex -= 1;
//       },
// };

// //dot notaion
// console.log(bike.frontGearIndex);
// console.log(bike.transmission.frontGearTeeth);
// console.log(bike.calculateGearRatio());

// //bracket notation
// console.log(bike["frontGearIndex"]);
// console.log(bike["transmission"]["frontGearTeeth"]);
// console.log(bike["calculateGearRatio"]());

// //log above object
// console.log("bike object before mutation");
// console.log(bike);

// bike.isTandem = true;
// bike.popAWheelie = function() {
//     console.log('Look at me go!');
// };

// //log above object
// console.log("bike object after mutation");
// console.log(bike);



// Objects and Inheritance

/*
    Inheritance is a way to share functionality between objects.
    Inheritance in JavaScript is prototype-based.
    Despite not having classes as defined by classical languages, 
    JavaScript still has an inheritance model, called 
    prototype inheritance. 

    In JavaScript, objects have a special hidden property
    called [[Prototype]]. This property is either null or
    references another object. That object is called the
    object’s prototype. Nearly all objects in JavaScript
    are instances of Object which sits on the top of a
    prototype chain.

    When trying to access a property of an object,
    the property will not only be sought on the object
    but on the prototype of the object, the prototype
    of the prototype, and so on until either a property
    or null is found. This is called delegation.

    The prototype property is used primarily for inheritance;
    you add methods and properties on a function’s prototype
    property to make those methods and properties available
    to instances of that function. This is called prototype
    inheritance.

    The prototype property is not the prototype of the
    constructor function itself but the prototype of
    all instances created by the constructor function.
    The constructor function is Function.prototype.
    The prototype of Function.prototype is Object.prototype.
    Object.prototype has no prototype, and its prototype
    is null.

    Traditionally in JavaScript objects share the same prototype
    by sharing the same constructor function. Remember the 
    Bike constructor. We assign the changeGear function to 
    something called prototype. 

*/

// function Bike(gears, startGear) {
//     this.gears = gears;
//     this.currentGear = startGear;
//   }
//   Bike.prototype.changeGear = function(direction, changeBy) {
//     if (direction === 'up') {
//       this.currentGear += changeBy;
//     } else {
//       this.currentGear -= changeBy;
//     }
//   }


  /*
    You can also implement multilevel inheritance with prototypes.
    It is referred to as a prototype chain. Implementing a 
    prototype chain using constructor functions is complex, 
    and requires a fair amount of boilerplate code. 
    It’s also beyond the scope of this module. What you need to 
    know is that in order to address prototype chain complexity, 
    ECMA put a standard in place for a more straightforward 
    syntax to implement inheritance: the class syntax. 
  */


// Classes and JavaScript

/*
    If you read the word "class" and got a warm fuzzy feeling, 
    thinking that you’d be looking at something that creates 
    true class-based inheritance, prepare to be disappointed. 
    Still, the class keyword in JavaScript is a nice bit of 
    syntactic sugar to address the complexities of prototype 
    inheritance using constructor functions. Under the covers, 
    the engine is still using Object.create and there is still 
    no class (in the object-oriented sense), just that in-memory 
    prototype object that is the actual source of inheritance. 

The good news is that it does read a lot more like code from 
Java or C#, with a few JavaScript-specific things to take into 
account. 

While used by Lightning Web Components, multilevel prototype chains including class syntax are beyond this module. See the resources links at the end of this unit for more details on working with newer features of JavaScript objects. We strongly recommend taking the other module in this trail, Modern JavaScript Development, which has an entire unit on Classes
*/

// console.log("Classes and JavaScript");
// class Bike {
//     constructor(gears, startGear) {
//         this.gears = gears;
//         this.currentGear = startGear;
//     }
//     changeGear(direction, changeBy) {
//         if (direction === 'up') {
//             this.currentGear += changeBy;
//         } else {
//             this.currentGear -= changeBy;
//         }
//     }
// }
// const bike = new Bike(18, 5);
// console.log(bike.gears, bike.currentGear);
// bike.changeGear('up', 2);
// console.log(bike.gears, bike.currentGear);

/*
    As you can see, the syntax looks a lot more like a 
    class in Java or Apex. A clear difference is that 
    the constructor function is always named constructor. 
    An important feature is that functions and attributes 
    automatically belong to the prototype chain without 
    having to directly reference Object.prototype. This also 
    simplifies creating multilevel prototype inheritance. 
*/

// Lightning Web Components and Objects
/*
    Lightning Web components take advantage of many of the 
    modern improvements to JavaScript, most notably, the use 
    of class syntax. Components are typically defined by a 
    JavaScript class that extends another class called 
    LightningElement. Here’s what it looks like: 
*/

import{ LightningElement } from 'lwc';
export default class Bike extends LightningElement {
    myProperty = 'myValue';
    myFunction() {
        // do something
        console.log(this.myProperty);
    }
}

/*
    The functionality of a Lightning web component is defined in a JavaScript class. This example also uses some syntax we haven’t addressed yet regarding modules (import and export).
    In some examples in this module, for the purposes of learning how objects work, we declare functions inside object literals. Note that this is not a recommended practice in modern JavaScript. Object literals are a great way to create ad hoc data structures to pass data between functional parts of a JavaScript program, but you should avoid defining a function in an object literal. 
*/
