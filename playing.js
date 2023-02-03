const printHello = () => {
    console.log('Hello');
} 

// setTimeout(() => {
//     console.log(printHello());
// }, 3000);

const executeAfterDelay = (delay, callbackFunction) => {
    setTimeout(callbackFunction, delay * 1000);
}

executeAfterDelay(4, printHello);