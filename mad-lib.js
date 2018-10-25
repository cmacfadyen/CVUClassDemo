var animal = window.prompt("Enter a noun");
var action = window.prompt("Enter a verb");
var adj = window.prompt("Enter an adjective");

var story1 = "Yesterday I got a new pet.  It's a ";
var story2 = "! It's kind of ";
var story3 = "and it likes to ";

//put story into the paragraph
document.getElementById("story").innerHTML = story1 + animal + story2 + adj + story3 + action;
