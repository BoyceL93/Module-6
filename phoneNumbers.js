const checkLength = (number) => {
    if (number.length <= 10) {
        return true
    } else {
        return false
    }
}

const numbers = [
    '07367282525',
    '0756485738',
    '5739395748',
    '0375768',
    '4858868583'
];

const filterLongNumbers = (arr) => {
    console.log(arr.filter(checkLength));
}

filterLongNumbers(numbers);
