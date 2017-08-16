
var button=document.getElementById('counter');
//alert("I am here");
var buttonCounter = 0;
button.onclick = function() {
    buttonCounter = buttonCounter + 1;
    //alert("I am here clicking button " + buttonCounter.toString());
    var span = document.getElementById('count');
    span.innerHTML = buttonCounter.toString();
};
