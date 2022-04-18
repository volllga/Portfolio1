// let text = "i'm a little funny dog";
//
// text = text.split(" ");
// console.log(text);
//
// text = text.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
// console.log(text);
//
// text = text.join(" ");
// console.log(text);

function toProperCase(text) {
    return text
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

// console.log(toProperCase("i'm a little funny cat"));