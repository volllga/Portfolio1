// let text = "i'm a little. funNy dog! what am I? haY there.";

function toSentenceCase(text){
    text = text
        .split(". ")
        .map(word => (word[0].toUpperCase() + word.slice(1).toLowerCase()))
        .join(". ");

    text = text
        .split("! ")
        .map(word => (word[0].toUpperCase() + word.slice(1)))
        .join("! ");

    text = text
        .split("? ")
        .map(word => (word[0].toUpperCase() + word.slice(1)))
        .join("? ");

    return text
}

// console.log(toSentenceCase(text));

