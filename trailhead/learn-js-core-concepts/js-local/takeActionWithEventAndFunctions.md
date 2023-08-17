# Take Action with Events and Functions

## Learning Objectives
After completing this unit, you’ll be able to:



*Define functions
*Distinguish between function declaration and function expressions
*Invoke functions
*Pass and assign functions
*Describe uses of functions and events in Lightning Web Components

With JavaScript in the browser, events are all over the place. Parts of the DOM emit events that correspond to what that DOM object does. Buttons have click events, input and select controls have change events, and virtually every part of the visible DOM has events for when the mouse cursor interacts with it (like passing over it). The window object even has event handlers for handling device events (like detecting the motion of mobile devices). 
To make something happen in a web page, functions get assigned to these events as event handlers. 

DOM events and other events related to the browser environment are not actually part of the core JavaScript language, rather they are APIs that are implemented for JavaScript in the browser. 


_italic_ When an event is emitted, a message is created in the engine. It is 

_italic_ these messages that are placed in the event queue we talked about earlier._italic_ 

![https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/javascript-essentials-salesforce-developers/take-action-events-functions/images/4999e793b0432e8c4e10e440784ca5f5_cjksehj-0-s-000-w-0-t-6-rvvlpiln-9.png]

Once the stack is free, the event handler is invoked. This creates what’s referred to as a frame on the call stack. Each time one function invokes another, a new frame is added to the stack, and when complete, it is popped off the stack, until finally the frame for the actual event handler is popped, the stack is empty, and we start all over again. 