// const pressedKeys = ["A", "S", "D", "F", "G", "H", "J" ];

document.addEventListener("keydown", function (event) {
    if (event.code === "KeyA"){
        let audio = document.createElement("AUDIO");
        // console.log("The 'A' key is pressed.");
        audio.src = "../audio/A.mp3";
        // audio.load();
        audio.play();
    } else if (event.code === "KeyS"){
        let audio = document.createElement("AUDIO");
        // console.log("The 'S' key is pressed.");
        audio.src = "../audio/S.mp3";
        audio.play();
    } else if (event.code === "KeyD"){
        let audio = document.createElement("AUDIO");
        // console.log("The 'D' key is pressed.");
        audio.src = "../audio/D.mp3";
        audio.play();
    } else if (event.code === "KeyF"){
        let audio = document.createElement("AUDIO");
        // console.log("The 'F' key is pressed.");
        audio.src = "../audio/F.mp3";
        audio.play();
    } else if (event.code === "KeyG"){
        let audio = document.createElement("AUDIO");
        // console.log("The 'G' key is pressed.");
        audio.src = "../audio/G.mp3";
        audio.play();
    } else if (event.code === "KeyH"){
        let audio = document.createElement("AUDIO");
        // console.log("The 'H' key is pressed.");
        audio.src = "../audio/H.mp3";
        audio.play();
    } else if (event.code === "KeyJ") {
        let audio = document.createElement("AUDIO");
        // console.log("The 'J' key is pressed.");
        audio.src = "../audio/J.mp3";
        audio.play();
    } else if (event.code === "KeyW") {
        let audio = document.createElement("AUDIO");
        // console.log("The 'S' key is pressed.");
        audio.src = "../audio/W.mp3";
        audio.play();
    } else if (event.code === "KeyE") {
        let audio = document.createElement("AUDIO");
        // console.log("The 'S' key is pressed.");
        audio.src = "../audio/E.mp3";
        audio.play();
    } else if (event.code === "KeyT") {
        let audio = document.createElement("AUDIO");
        // console.log("The 'S' key is pressed.");
        audio.src = "../audio/T.mp3";
        audio.play();
    } else if (event.code === "KeyY") {
        let audio = document.createElement("AUDIO");
        // console.log("The 'S' key is pressed.");
        audio.src = "../audio/Y.mp3";
        audio.play();
    } else if (event.code === "KeyU") {
        let audio = document.createElement("AUDIO");
        // console.log("The 'S' key is pressed.");
        audio.src = "../audio/U.mp3";
        audio.play();
    } else {
        console.log("Please, press something from 'ASDFGHJ'!");
    }

});

// let notes = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ"];
//
// document.addEventListener("keydown", function (event) {
//     if (notes.includes(event.code)) {
//         let audio = new Audio(`sounds/${event.code}.mp3`);
//         audio.play();
//     } else {
//         console.warn(`Unsupported key '${event.key}' pressed.`);
//     }
// });

// document.addEventListener("keydown", (event) => {
//     switch (event.code) {
//         case 'KeyA':
//         case 'KeyS':
//         case 'KeyD':
//         case 'KeyF':
//         case 'KeyG':
//         case 'KeyH':
//         case 'KeyJ':
//             let audio = document.createElement("AUDIO");
//             audio.src = `${event.key}.mp3`;
//             audio.play();
//             break;
//         default:
//             break;
//     }
// })