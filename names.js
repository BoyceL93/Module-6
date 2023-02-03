// const names = ['Humphrey', 'Jim Bob', 'Gertrude', 'Phil Mitchell'];

// console.log(names);

// console.log(names[2]);

// const newNames = names.concat('Angelo');

// console.log(newNames);


// const messageArray = [];

// const generateMessages = (arr) => {
//     arr.forEach((name) => {
//         messageArray.push(`Hi ${name}! Have 50% off your order today!`)
//     })
//     return messageArray
// }

// console.log(generateMessages(names));

const namesAndDiscounts = [
    { name: 'Humphrey', discount: 50 },
    { name: 'Graham', discount: 40 },
    { name: 'Lauren', discount: 75 },
    { name: 'Boris', discount: 30 },
    { name: 'Dan', discount: 50 }
];

const generateMessages = (obj) => {
    return namesAndDiscounts.map((obj) => ['Hi ' + obj.name + `! ` +  obj.discount + `% off our best candies for you today!`]);
}

console.log(generateMessages());




