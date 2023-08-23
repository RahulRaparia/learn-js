import { getX, setX } from "./myModule.js";

const e = 10;
function sum(a) {
    return function(b){
        return function (c){
            // outer functions scope
            return function (d){
                // local scope 
                return a + b + c + d + e;
            };
        };
    };
}

// with anonymous functions
console.log(sum(1)(2)(3)(4));

//without anonymous functions
const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result);


function outer (){
    let getY;
    {
        const y = 6;
        getY = () => y
    }
    console.log(typeof y);
    console.log(getY());
}

outer();


console.log(getX()); // 5
setX(6);
console.log(getX()); // 6