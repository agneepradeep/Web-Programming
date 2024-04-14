//DOM - Document Object Model
//When a web page is loaded, the browser creates a Document Object Model(DOM) of the page
//window.document --> return the whole html css file of the web page

//Window Object
//The window object represents an open window in a browser. It is browser's object (not JavaScript's) & is automatically created by browser

//It is a global object with lots of properties & methods
//Can be used to change html elements attribute dynamically at runtime
//console.dir("class/id/tag object") --> returns all the attributes related to the object

//DOM Manipulation
//I)Selection with ID
//document.getElementById("MyId")
//#Id

//II)Selecing with class
//document.getElementsByClassName("MyClass")
//.ClassName

//III)Selecting with tag
//document.getElementsByTagName("p")

//IV)Query Selector
//A)document.querySelector("#myId/.myclass/tag") --> returns matching first element on the basis of myId,myclas or tag
//B)document.querySelectorAll(".myclass/tag") --> returns a matching nodeList on the basis of myId,myclas or tag

//Properties
//* tagName - returns tag for element nodes
//* innerText - returns the text content of the element and all its children
//* innerHTML - returns the plain text or HTML contents in the element
//* textContent - returns textual content even for hidden elements

//Node has 2 properties
//* first child
//* last child

//Attributes
// .getAttribute(attr) --> to get the attribute value
// .setAttribute(attr,value) --> to set the attribute value

//Style
// .style.{style Attribute}

//Insert Elements - let el = document.createElement("div")
// node.append(el) --> adds at the end of node(inside)
// node.prepend(el) --> adds at the start of node(inside)
// node.before(el) --> adds before the node(outside)
// node.after(el) --> adds after the node(outside)

//Delete Element
// node.remove() --> removes the node