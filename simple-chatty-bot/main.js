console.log("Hello! My name is Keith.");
console.log("I was created in 2022.");
console.log("Please, remind me your name.");

// const prompt = require('prompt-sync')();
// // Notice the extra () after require().
// // The prompt-sync module is a function that creates prompting functions,
// // so you need to call prompt-sync in order to get your actual prompting function.
//
// const name = prompt('What is your name? > ');


//Node.js process.stdin Property
const name = process.stdin.on('data', data => {
    console.log(`Hello! ${data.toString()}`);
    process.exit();
});



//https://nodejsdev.ru/api/process/
// В process Объект предоставляет информацию о текущем процессе Node.js.
// и контролирует его. Хотя он доступен как глобальный,
// рекомендуется явно получить к нему доступ через require или import:
//
//
// import process from 'process';
//
// const process = require('process');
