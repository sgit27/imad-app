
var button=document.getElementById('counter');
//alert("I am here");
button.onclick = function() {
    

//Create a request object
var request = new XMLHttpRequest();
//get and store the counter end point data
request.onreadystatechange = function() {
    if(this.readyState===4 && this.status === 200){
        var Counter = reqeust.responseText;
        var span = document.getElementById('count');
        span.innerHTML = counter.toString();
        alert("I am done with the request to get the counter end point data");
    }
};
// make the request
request.open('GET', 'http://vpsarav.imad.hasura-app.io/counter', true);
request.send(null);
alert("I have clicked the button");
};

