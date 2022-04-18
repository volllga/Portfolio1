document.addEventListener("keydown", function(event) {
    if (event.code === "AltRight") {
        console.log(event, event.code);
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "W") {
        console.log("W Pressed", 'event.key = ', event.key, 'event.code = ', event.code);
    }
});

document.addEventListener("keydown", function(e) {
    if (e.code === "Digit2") {
        console.log(e);
    }
});

document.addEventListener("keyup", function(event) {
    if (event.code === "ControlLeft") {
        console.log(event);
        return event;
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "V") {
        return event;
    }
});