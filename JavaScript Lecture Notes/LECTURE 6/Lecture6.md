# Document Object Model (DOM)

## Introduction
When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.
```javascript
window.document; // Returns the whole HTML and CSS of the web page
```

## Window Object
The window object represents an open window in a browser. It is the browser's object (not JavaScript's) and is automatically created by the browser.

### Features
- It is a global object with many properties and methods.
- Can be used to change HTML element attributes dynamically at runtime.
- Use `console.dir("class/id/tag object")` to return all attributes related to the object.

## DOM Manipulation

### Selection Methods
1. **Selection by ID**
   ```javascript
   document.getElementById("MyId"); // #Id
   ```

2. **Selection by Class**
   ```javascript
   document.getElementsByClassName("MyClass"); // .ClassName
   ```

3. **Selection by Tag**
   ```javascript
   document.getElementsByTagName("p");
   ```

4. **Query Selector**
   - `document.querySelector("#myId/.myclass/tag")`: Returns the first matching element based on ID, class, or tag.
   - `document.querySelectorAll(".myclass/tag")`: Returns a matching NodeList based on class or tag.

### Properties
- **tagName**: Returns the tag name for element nodes.
- **innerText**: Returns the text content of the element and all its children.
- **innerHTML**: Returns the plain text or HTML contents of the element.
- **textContent**: Returns textual content even for hidden elements.

### Node Properties
- **firstChild**: Returns the first child node.
- **lastChild**: Returns the last child node.

### Attributes
- `.getAttribute(attr)`: Gets the attribute value.
- `.setAttribute(attr, value)`: Sets the attribute value.

### Style
- `.style.{styleAttribute}`: Used to set the style attribute of an element.

### Insert Elements
```javascript
let el = document.createElement("div");
node.append(el); // Adds at the end of node (inside)
node.prepend(el); // Adds at the start of node (inside)
node.before(el); // Adds before the node (outside)
node.after(el); // Adds after the node (outside)
```

### Delete Element
```javascript
node.remove(); // Removes the node
```
