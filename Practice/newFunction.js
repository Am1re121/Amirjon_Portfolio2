const func = new Function('a', 'b', 'return a + b;');
console.log(func(2, 3)); 

const func2 = new Function('x', 'y', 'return x * y;');
console.log(func2(4, 5));

export const func3 = new Function('name', 'return "Hello, " + name + "!";');    
