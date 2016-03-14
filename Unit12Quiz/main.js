
console.log("Hello World!");

var items = ["I", "passed", "the", "quiz"];

var divWrapper = document.getElementById("wrapper");

for(var i = 0; i < items.length; i++)
{
    var pElement = document.createElement("p");
    pElement.className = "quiz-word";
    pElement.innerHTML = items[i];
    //console.log(items[i]);
    divWrapper.appendChild(pElement);
}