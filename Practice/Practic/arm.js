function isArmstrongNumber(numbers) {
    let num = numbers.toString().length
    let digits = numbers.toString().split('')
    let sum = 0;
    
    digits.forEach(el => {
        sum += el**num;
    });
    if (sum === numbers) {
        return true;
    } else {
        return false;
    }
}

console.log(isArmstrongNumber(153)); 