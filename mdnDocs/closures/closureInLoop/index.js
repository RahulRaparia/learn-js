// function showHelp(help) {
//     document.getElementById("help").textContent = help;
//   }

//   function setupHelp() {
//     var helpText = [
//       { id: "email", help: "Your email address" },
//       { id: "name", help: "Your full name" },
//       { id: "age", help: "Your age (you must be over 16)" },
//     ];

//     for (var i = 0; i < helpText.length; i++) {
//       // Culprit is the use of `var` on this line
//       var item = helpText[i];
//       document.getElementById(item.id).onfocus = function () {
//         showHelp(item.help);
//       };
//     }
//   }

//   setupHelp();


// ---- correct impl ---- for closures

// function showHelp(help) {
//     document.getElementById("help").textContent = help;
//   }

//   function makeHelpCallback(help) {
//     return function () {
//       showHelp(help);
//     };
//   }

//   function setupHelp() {
//     var helpText = [
//       { id: "email", help: "Your email address" },
//       { id: "name", help: "Your full name" },
//       { id: "age", help: "Your age (you must be over 16)" },
//     ];

//     for (var i = 0; i < helpText.length; i++) {
//       var item = helpText[i];
//       document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
//     }
//   }

//   setupHelp();




// ----- Anonymus Closures -----

// function showHelp(help) {
//     document.getElementById("help").textContent = help;
//   }

//   function setupHelp() {
//     var helpText = [
//       { id: "email", help: "Your email address" },
//       { id: "name", help: "Your full name" },
//       { id: "age", help: "Your age (you must be over 16)" },
//     ];

//     for (var i = 0; i < helpText.length; i++) {
//       (function () {
//         var item = helpText[i];
//         document.getElementById(item.id).onfocus = function () {
//           showHelp(item.help);
//         };
//       })(); // Immediate event listener attachment with the current value of item (preserved until iteration).
//     }
//   }

//   setupHelp();


// -----Let and Const Solution -----

// function showHelp(help) {
//     document.getElementById("help").textContent = help;
//   }

//   function setupHelp() {
//     const helpText = [
//       { id: "email", help: "Your email address" },
//       { id: "name", help: "Your full name" },
//       { id: "age", help: "Your age (you must be over 16)" },
//     ];

//     for (let i = 0; i < helpText.length; i++) {
//       const item = helpText[i];
//       document.getElementById(item.id).onfocus = () => {
//         showHelp(item.help);
//       };
//     }
//   }

//   setupHelp();



// ----- For each -----

function showHelp(help) {
    document.getElementById("help").textContent = help;
}

function setupHelp() {
    var helpText = [
        { id: "email", help: "Your email address" },
        { id: "name", help: "Your full name" },
        { id: "age", help: "Your age (you must be over 16)" },
    ];

    helpText.forEach(function (text){
        document.getElementById(text.id).onfocus = function () {
            showHelp(text.help);
        };
    });
}

setupHelp();
