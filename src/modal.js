// Get the modal
const modal = document.getElementById("window1");
const modal2 = document.getElementById("window2");
const modal3 = document.getElementById("window3");
const modal4 = document.getElementById("window4");

// Get the button that opens the modal
const btn = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const btn4 = document.getElementById("button4");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let span2 = document.getElementsByClassName("close")[1];
let span3 = document.getElementsByClassName("close")[2];
let span4 = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}

btn4.onclick = function() {
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}

span4.onclick = function() {
    modal4.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    } else if (event.target === modal2) {
        modal2.style.display = "none";
    } else if (event.target === modal3) {
        modal3.style.display = "none";
    } else if (event.target === modal4) {
        modal4.style.display = "none";
    }
}

