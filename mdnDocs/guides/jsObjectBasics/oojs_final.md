# oojs_final 

## rundown 
The code you provided is an example of object-oriented JavaScript. It defines an object named person with properties such as `name`, `age`, `gender`, `interests`, and methods such as `bio` and `greeting`. The object’s properties are accessed using dot notation, for example, `person.name` or `person.age`. The object’s methods are invoked using dot notation followed by parentheses, for example, `person.bio()` or `person.greeting()`. 

The code also demonstrates how to add a new property to an object using square bracket notation. In this case, a new property named height with a value of `'1.75m'` is added to the `person` object. The code is embedded in an HTML file that provides some instructions for the user on how to interact with the example. The user is instructed to enter commands in the browser’s JavaScript console to interact with the example.

## instructions

1. Open the HTML file in your browser.
2. Open the browser’s JavaScript console.
3. Enter the following commands in the console to interact with the example:


    ```javascript
    >> person
    <- Object { name: (2) […], age: 32, gender: "female", interests: (2) […], bio: bio(), greeting: greeting(), height: "1.75m" }
    >> typeof person.name
    <- "object"
    >> person.interests[1]
    <- "skiing"
    >> console.log(person.interests[1])
        skiing                  debugger eval code:1:9
    <- undefined
    
    ```

    ### rundown:
    The user entered several commands in the browser’s JavaScript console to interact with the person object defined in the HTML file. Here is a rundown of the console interaction:

>>>`person`: The user entered the command person to display the properties and values of the person object. The console returned an object with properties such as name, age, gender, interests, and methods such as bio and greeting. The object also has a new property named height with a value of '1.75m' that was added to the object in the script.

>>>`typeof person.name`: The user entered the command typeof person.name to check the data type of the name property of the person object. The console returned "object" indicating that the value of the name property is an object (in this case, an array).

>>>`person.interests[1]`: The user entered the command person.interests[1] to access the second element of the interests array property of the person object. The console returned `"skiing"` indicating that the second element of the interests array is `"skiing"`.

>>>`console.log(person.interests[1])`: The user entered the command console.log(person.interests[1]) to log the value of the second element of the interests array property of the person object to the console. The console displayed `"skiing"` and returned undefined. The return value of a call to console.log() is always undefined.

    Or, if you prefer, you can enter the following commands in the console to interact with the example:

    ```javascript
    person.name
    person.age
    person.interests[1]
    person.bio()
    person.greeting()
    person.farewell()
    person.height
    person['height']
    person['eye color'] = 'blue'
    person
    ```