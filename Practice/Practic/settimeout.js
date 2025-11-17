let count = 0;

let intervalId = setInterval(() => {
    count += 1;
    console.log('count', count);
}, 1000);



setTimeout(() => {
    console.log('stop');
    clearInterval(intervalId);
}, 5000);

