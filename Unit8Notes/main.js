console.log("Hello World!");

//var $someDiv = jQuery("#some-div"); //prefix variable name with a $ sign to show its jquery
var $someDiv = $("#some-div"); //$ sign to show its jquery
console.log($someDiv);

$someDiv.css('background-color', 'purple')
        .css('color', 'white');
        
if(1 > 0){
    $someDiv.css('padding','20px');
}
$someDiv.addClass("big-margin"); //no period before class name

//create element and add a class
var $anotherDiv = $("<div></div>");
$anotherDiv.addClass("another-class");

$someDiv.append($anotherDiv);
var $someText = $("<p></p>");
$anotherDiv.append($someText);

$someText.html("hello from a paragraph element");

//rigging up a click event handler
$someDiv.click(function(){
    alert("you clicked me!");
    $someDiv.hide();    
});