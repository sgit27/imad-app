
var button=document.getElementById('counter');
//alert("I am here");
button.onclick = function() {
    

//Create a request object
var request = new XMLHttpRequest();
//get and store the counter end point data
request.onreadystatechange = function() {
    if(this.readystate===4 && this.status === 200){
        var buttonCounter = reqeust.responseText;
        var span = document.getElementById('count');
        span.innerHTML = buttonCounter.toString();
    }
};
// make the request
request.open("GET", "http://vpsarav.imad.hasura-app.io/counter", true);
request.send();
};

