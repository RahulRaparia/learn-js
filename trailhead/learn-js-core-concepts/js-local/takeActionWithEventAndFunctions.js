//Declaring a Function and Calling a Function

// // declare function
// function calculateGearRatio(driverGear, drivenGear){
//     return (driverGear / drivenGear);
//   }
//   // call function
//   let gearRatio = calculateGearRatio(42, 30);
//   console.log(gearRatio); // 1.4

//Calling Function Before Declaration

// // call function
// let gearRatio = calculateGearRatio(42, 30);
// // function is declared after the line it is called
// // this is allowed in function declaration
// function calculateGearRatio(driverGear, drivenGear){
//   return (driverGear / drivenGear);
// }
// console.log(gearRatio); // 1.4

// Returning a function 
// when invoked, this function will assign a function

// function gearFactory(){
//     return function(driverGear, drivenGear){
//       return (driverGear / drivenGear);
//     }
//   }
//   // calculateGearRatio can now be invoked as a function
//   const calculateGearRatio = gearFactory();
//   // and all the rest
//   console.log(calculateGearRatio(42, 30)); // 1.4

// Anonymous Functions - basically lamdas 

let myArray = [1, 5, 11, 17];
let newArray = myArray.map( function(item){ return item / 2 } ); // anonymous function passed to map method as argument 
// here item is just a placeholder for the value of each element in the array
console.log(newArray); 
// [0.5, 2.5, 5.5, 8.5]

