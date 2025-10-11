export function objecttest(find) {
    let obj = [
        { name: 'Amirjon', age: 19, city: 'Dushanbe' },
        { name: 'Alex', age: 20, city: 'Moscow' },
        { name: 'John', age: 21, city: 'New York' }
    ]

    if (find === 'Amirjon') {
        return obj[0];
    } else if (find === 'Alex') {
        return obj[1];
    } else if (find === 'John') {
        return obj[2];
    } else {
        return 'net takogo imeni';
    }
    
}