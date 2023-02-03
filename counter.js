let counter = 0;

const increment = () => {
    if (counter <= 15) {
        console.log(counter++)
    }
}

setInterval(increment, 2000);