// reach into DOM and get the button, 
// input, and button
let button = document.getElementById("submit");
let newItem = document.getElementById("iteminput");
let theList = document.getElementById("thelist");

//Modify DOM by adding click to the button
button.addEventListener("click", async function(event){
    //log that process is ending with time stamp in epoche time stamp
    console.log("starting process at " + new Date().getTime());
  
    // turn text input value into HTML text node
    let textNode = document.createTextNode(newItem.value);
  
 
    //create an li DOM node to insert into the list
    let newListItem = document.createElement("li");
  
    //insert text node into new li node
    newListItem.appendChild(textNode);
  
    //insert li into the ul list
    theList.appendChild(newListItem);

    //log that process is ending with time stamp in epoche time stamp
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("ending process at " +new Date().getTime());
});



/*
This code snippet is an example of how to add items to an unordered list in an HTML document using JavaScript. Here’s a detailed explanation of what each part of the code does:

The first three lines of the code use the document.getElementById() method to get references to three elements in the HTML document: a button with the id attribute set to "submit", an input field with the id attribute set to "iteminput", and an unordered list with the id attribute set to "thelist". These references are stored in the variables button, newItem, and theList, respectively.

The next line of the code uses the addEventListener() method to add a click event listener to the button element. This means that when the user clicks on the button, the function passed as the second argument to addEventListener() will be executed.

The function passed as the second argument to addEventListener() is an async function, which means that it can use the await keyword to wait for asynchronous operations to complete.

Inside the function, the first line uses the console.log() method to print a message to the console that includes the current timestamp in milliseconds since the Unix epoch (January 1, 1970). This is done using the getTime() method of a Date object.

The next line of the code uses the createTextNode() method of the document object to create a new text node containing the value of the input field (retrieved using the value property of the newItem element).

The following line uses the createElement() method of the document object to create a new <li> element, which will be used to represent a new item in the unordered list.

The next line uses the appendChild() method of the new <li> element to insert the text node created earlier as a child of the <li> element.

The following line uses the appendChild() method of the theList element (which represents the unordered list) to insert the new <li> element as a child of the list.

The next line of code uses an await statement to wait for a Promise that resolves after a delay of 1 second. This creates a pause in execution before continuing with the rest of the code.

Finally, another message is printed to console.log() with ending process and time stamp in milliseconds since Unix epoch.

*/


    






/*
    The code you provided is asynchronous because it uses the setTimeout() function, 
    which is an asynchronous function. The setTimeout() function schedules a function 
    to be executed after a specified delay, but it does not block the execution of the 
    rest of the code. This means that the rest of the code after the setTimeout() call 
    will continue to execute while the function passed to setTimeout() is waiting to 
    be executed.

    In your code, the console.log("ending process at " +new Date().getTime()); 
    statement is executed immediately after the setTimeout() call, 
    without waiting for the function passed to setTimeout() to be executed. 
    This is why the message “ending process at” is printed before the message “Hello, World!”.
    */