// variables





//create an onclick event to register text box and put value into a var
$("#submitBtn").on("click", function(event) {
    event.preventDefault();
    console.log(event);
    //create variable to grab value in the text box use .val .trim
    var newGif = $('#textbox').val();
console.log(newGif);
//generate a button to put value of newGif
var gifyPicked = $("<button>");
//append new gif into a button
gifyPicked.append(" " + newGif);



});