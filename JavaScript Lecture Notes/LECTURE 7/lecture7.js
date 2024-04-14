//Events in JS

//The change in the state of an object is known as an event.
//Events are fired to notify code of "interesting changes" that may affect code execution.

//node.event = () => {
    //handle here
//}

// JS Event >>> Inline Event

//Event Object
//It is a special object that has details about the event
//All the event handlers have access to the event object's properties and methods

//node.event = (e) => {
    //handle here
//}

//e.target,e.type,e.clientX,e.clientY

//Event Listener
//node.addEventListener(event,callback)
//node.removeEventListener(event,callback) --> call back reference should be same to remove.

// for a same event we can assign as many functions we want to use by the use of addEventListener, but all will trigger at the same time.

