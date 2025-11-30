function isArmstrongNumber(numbers) {
    let num = numbers.toString();
    let sum = 0;
    let order = num.length;
    for (let i = 0; i < order; i++) {
        sum **= num[i];
        if (sum === numbers) {
            console.log(`${numbers} is an Armstrong number`);
            return true;
        }
}
}

isArmstrongNumber(153);