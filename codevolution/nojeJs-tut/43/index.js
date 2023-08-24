// console.log("coucou 1");
// ProcessingInstruction.nextTick(()=> console.log("coucou 3"));   
// console.log("coucou 2");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });
  
  myPromise
  .then((value) => `${value} and bar 1`)
  .then((value) => `${value} and bar again 2`)
  .then((value) => `${value} and again 3`)
  .then((value) => `${value} and again 4`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });

  

  