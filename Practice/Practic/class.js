class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log('Privet', this.name, "tvoy vozrast", this.age)
    }
}

const user = new Human('aziz', 20)
user.sayHi()



class Accaunt{
    constructor(login, password){
    this.login = login;
    this.password = password;
    }
    
    signIn(){
        console.log('Login:', this.login)
        console.log('Password:', this.password)
    }

}

const user1 = new Accaunt('azizbek', '12345')
user1.signIn()

class Vhod{
    constructor(login, password){
        this.login = login;
        this.password = password;
    }

    signUp(){
        if(this.login === 'azizbek' && this.password === '12345'){
            console.log('Welcome', this.login)
        } else {
            console.log('Error: Invalid login or password')
        }
    }
}

const user2 = new Vhod('azizbek', '12345')
user2.signUp()


class Product{
    constructor(name, price){
        this.name = name;
        this._price = price;
    }

    get price(){
        return this._price + '$';
    }

    set price(value){
        if(value < 0){
            console.log('Error: Price cannot be negative');
        }else{
            this.price_ = value;
        }
    }
}

const product = new Product('Laptop', 1000);
console.log(product.price);
