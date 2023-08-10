//Primitive Assignment



var myBike = "Mountain Bike"; 

let currentGear = 5; 

const numberOfGears = 12; 

//reassignment

myBike = "Penny Farthing"; // works

currentGear = 1; // works

// numberOfGears = 1; //error 

// print the values 
console.log(`My Bike var : ${myBike}`);
console.log(`Current Gear let : ${currentGear}`);
console.log(`Number of Gears const : ${numberOfGears}`);
class Bike {
    constructor() {
      // properties and methods

      //define changeGear method
        this.changeGear = function (gear, direction) {
            // change internal state
            if (direction === "Up") {
                currentGear += 1;
            } else if (direction === "Down") {
                currentGear -= 1;
            }
            }
        //define calculateGearRatio method
        this.calculateGearRatio = function () {
            return numberOfGears / currentGear;
        }
    }
  }
  
// call constructor, new object, assign it to bike
const bike = new Bike();
//Change internal state by calling a function
bike.changeGear("front", "Up");
// add a new member to bike that did not exist before
bike.type = "Penny Farthing";
// check for success
console.log("Log calc gear ratio",bike.calculateGearRatio()); // 4.0909...
console.log(bike.type); // "Penny Farthing"
// attempt to point bike to new instance of Bike
// bike = new Bike(1,2); // error