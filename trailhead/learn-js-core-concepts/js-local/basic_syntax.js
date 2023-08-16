// for printing in Node environment
console.log('Hello, World!');
// for printing in browser environment
// alert('Hello, World!');


//object literal notation

const bike = {
    gears: 10,
    currentGear: 3,
    changeGear: function (direction, changeBy) {
        if (direction === 'up') {
            this.currentGear += changeBy;
        } else if (direction === 'down') {
            this.currentGear -= changeBy;
        } else {
            console.log('Invalid direction');
        }
    }
}
console.log(bike.gears);
console.log(bike.currentGear);
bike.changeGear('up', 2);
console.log(bike.currentGear);
bike.changeGear('down', 1);
console.log(bike.currentGear);

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



