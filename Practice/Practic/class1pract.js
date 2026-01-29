class Users {
    constructor(login, password) {
        this.login = login;
        this.password = password;
        this.isBan = false;
    }

    getLLogin() {
        console.log(this.login);
    }
}

class Admin extends Users {
    constructor (login, password) {
        super(login, password);
    }

    Ban(user) {
        console.log(`Admin banned user: ${user.login}`);
        user.isBan = true;
        

    }

    showProfile(user) {
        if (user.isBan === true) {
            console.log('This user is banned');
        } else {
            console.log(`User login: ${user.login}`);
        }
    }
}


class Sign extends Users {
    constructor(login, password) {
        super(login, password);
    }

    signIn(user, inputLogin, inputPassword) {
    if (user.isBan) {
        console.log('This user is banned');

    } else if (user.login === inputLogin && user.password === inputPassword) {
            console.log('Sign in successful');
        } else {
            console.log('Sign in failed');
        }    }

    }



let admin1 = new Admin('admin1', 'adminpass');
let user1 = new Users('user1', 'userpass');
let user2 = new Users('user2', 'userpass2');
let signUser = new Sign()
admin1.Ban(user1);
signUser.signIn(user1, 'user1', 'userpass');


