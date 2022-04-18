// let buttonUpper = document.getElementById("upper-case");
// let text = document.querySelector("textarea");
// buttonUpper.onclick = function () {
//     text.value = text.value.toUpperCase();
// }
let text = document.querySelector("textarea");

document.onclick = function(button) {
    if (button.target.id === "upper-case") {
        text.value = text.value.toUpperCase();
    } else if (button.target.id === "lower-case") {
        text.value = text.value.toLowerCase();
    } else if (button.target.id === "proper-case") {
        text.value = toProperCase(text.value);
    } else if (button.target.id === "sentence-case") {
        text.value = toSentenceCase(text.value);
    } else if (button.target.id === "save-text-file") {
        download("text.txt", text.value);
    }
};
