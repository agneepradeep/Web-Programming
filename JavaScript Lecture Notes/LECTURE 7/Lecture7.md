# Events in JavaScript

## Introduction
An event is a change in the state of an object. Events are fired to notify code of "interesting changes" that may affect code execution.

## Event Handling
```javascript
node.event = () => {
    // Handle event here
};
```

## Inline Event
JavaScript events can be directly assigned to HTML elements as inline events.

## Event Object
The event object is a special object containing details about the event. All event handlers have access to the event object's properties and methods.
```javascript
node.event = (e) => {
    // Handle event here
};
```
### Common Properties
- `e.target`: The target element of the event.
- `e.type`: The type of the event.
- `e.clientX`: The X-coordinate of the mouse pointer relative to the viewport.
- `e.clientY`: The Y-coordinate of the mouse pointer relative to the viewport.

## Event Listener
Event listeners allow multiple functions to be assigned to a single event.
```javascript
node.addEventListener(event, callback);
node.removeEventListener(event, callback); // Callback reference should be the same to remove.
```
### Note
For a single event, multiple functions can be assigned using `addEventListener`, and all will trigger at the same time.
