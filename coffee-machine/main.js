const input = require('sync-input');

let suppl = [400, 540, 120, 9, 550];
const espr = [250, 0, 16, 1, 4];
const latt = [350, 75, 20, 1, 7];
const capp = [200, 100, 12, 1, 6];

let result = (suppl) => `
The coffee machine has:
${suppl[0]} ml of water
${suppl[1]} ml of milk
${suppl[2]} g of coffee beans
${suppl[3]} disposable cups
$${suppl[4]} of money
`;

let action = 'start';
while(action !== 'exit') {
  action = input("Write action (buy, fill, take, remaining, exit):\n");
  choice(action);
}

function choice(action) {
  // console.log();
  switch (action) {
    case 'buy':
      let option = input('\n' + "What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n");
      buy(option);
      break;
    case 'fill':
      fill();
      break;
    case 'take':
      take();
      break;
    case 'remaining':
      console.log(result(suppl));
  }
}

function buy(option) {
  switch (option) {
    case '1':
      return console.log(checkSupplies(suppl, espr));
    case '2':
      return console.log(checkSupplies(suppl, latt));
    case '3':
      return console.log(checkSupplies(suppl, capp));
    default:
      return console.log();
  }
}

function fill() {
  let addWater = input("\nWrite how many ml of water you want to add:\n");
  let addMilk = input("Write how many ml of milk you want to add:\n");
  let addBeans = input("Write how many grams of coffee beans you want to add:\n");
  let addCaps = input("Write how many disposable coffee cups you want to add:\n");
  suppl = [suppl[0] + addWater * 1,
    suppl[1] + addMilk * 1,
    suppl[2] + addBeans * 1,
    suppl[3] + addCaps * 1,
    suppl[4]];
  console.log();
}

function take() {
  console.log(`I gave you $${suppl[4]}`);
  suppl.pop();
  suppl.push(0);
  console.log()
}

function checkSupplies(arr1, arr2) {
  let item = 0;
  let notEnough = (item) => {
    return 'Sorry, not enough ' + item + '!\n';
  };
  let newArr = [];

  for (let i = 0; i < arr1.length - 1; i++) {
    if (arr1[i] >= arr2[i]) {
      newArr.push(arr1[i] - arr2[i]);
    } else {
      // console.log(i);
      switch(i) {
        case 0:
          item = 'water';
          return notEnough(item);
        case 1:
          item = 'milk';
          return notEnough(item);
        case 2:
          item = 'coffee beans';
          return notEnough(item);
        case 3:
          item = 'disposable cups';
          return notEnough(item);
      }
    }
  }
  newArr.push(arr1[4] + arr2[4]);
  suppl = newArr;
  return '\nI have enough resources, making you a coffee!\n';
}