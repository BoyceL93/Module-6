// const numbers = [1, 2 ,3 ,4 , 5, 6, 7, 8, 9, 10].reduce(
//     (a, b) => a + b, 0);
    
// console.log(numbers);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let a = 0;
numbers.forEach((number) => {
    a += number;
})

console.log(a);

