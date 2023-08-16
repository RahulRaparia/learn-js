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
console.log("Assigning Properties and Functions to Objects");
const bike = {
    frontGearIndex: 0,
    rearGearIndex: 0,
    transmission: {
        frontGearTeeth: [30, 40, 50],
        rearGearTeeth: [11, 13, 15, 17, 19, 21, 24, 28, 32, 36]
    },
    calculateGearRatio: function () {
        let front = this.transmission.frontGearTeeth[this.frontGearIndex];
        let rear = this.transmission.rearGearTeeth[this.rearGearIndex];
        return front / rear;
    },
    changeGear: function(frontOrRear, upOrDown) {
        let shiftFunction = frontOrRear + upOrDown;
        this[shiftFunction]();
      },
      frontUp: function(){
        this.frontGearIndex += 1;
      },
      frontDown: function(){
        this.frontGearIndex -= 1;
      },
      rearUp: function(){
        this.rearGearIndex += 1;
      },
      rearDown: function(){
        this.rearGearIndex -= 1;
      },
};

//dot notaion
console.log(bike.frontGearIndex);
console.log(bike.transmission.frontGearTeeth);
console.log(bike.calculateGearRatio());

//bracket notation
console.log(bike["frontGearIndex"]);
console.log(bike["transmission"]["frontGearTeeth"]);
console.log(bike["calculateGearRatio"]());

//log above object
console.log("bike object before mutation");
console.log(bike);

bike.isTandem = true;
bike.popAWheelie = function() {
    console.log('Look at me go!');
};

//log above object
console.log("bike object after mutation");
console.log(bike);




//Inheritance

// console.log("Inheritance");

