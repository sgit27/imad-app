// code for counter

var button = document.getElementById("counter");
var buttonCounter = 0;
button.onclick = function() {
    buttonCounter = buttonCounter + 1;
    document.alert("I am here clicking button " + buttonCounter.toString());
    var span = document.getElementById("count");
    span.innerHTML = buttonCounter.tostring();
}