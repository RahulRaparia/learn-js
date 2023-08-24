const Bike = function(frontIndex, rearIndex){
    this.frontGearIndex = frontIndex || 0;
    this.rearGearIndex = rearIndex || 0;
    this.transmission = {
        frontGearTeeth: [10, 20, 30],
        rearGearTeeth: [40, 50, 60]
    };

    // Bike.prototype.changeGear = function(frontOrRear, changeBy) {
    //     const shiftIndexName = frontOrRear + "GearIndex"
    //     const that = this;
    //     //contains state change for making the shift
    //     let shiftObject = {
    //       currentIndex: this[shiftIndexName],
    //       maxIndex: this.transmission[frontOrRear + "GearTeeth"].length,
    //       changeBy: changeBy
    //     }
    //     // // invoke async function with anonymous callback
    //     // this.changeGearAsync(shiftObject, function(err, newIndex){
    //     //   if (err) {
    //     //     console.log("No Change");
    //     //   } else {
    //     //     that[shiftIndexName] = newIndex;
    //     //   }
    //     // });

    //     // invoke async function with arrow callback
    //     this.changeGearAsyncArrow(
    //         shiftObject, (err, newIndex)=>{
    //             if(err){
    //                 console.log("No Change");
    //             } else {
    //                 this[shiftIndexName] = newIndex;
    //             }
    //         }
    //     );
    // };

    // invoke async function with promise
    Bike,prototype.changeGearAsyncPromise = function (shiftObject){
        return new Promise(
            (resolve, reject) => {
                let newIndex = shiftObject.currentIndex + shiftObject.changeBy;
                if (newIndex < 0 || newIndex > shiftObject.maxIndex) {
                    reject("No Change");
                } else {
                    resolve(newIndex);
                } 
            }
        );
    };
}