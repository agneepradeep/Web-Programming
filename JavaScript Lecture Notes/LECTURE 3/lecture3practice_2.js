/*Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length*/

let name = prompt("Enter Your Fullname");
let username = `@${name}${name.length}`
alert(username);