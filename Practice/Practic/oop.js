class User {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }

    showlogin() {
        console.log(`Login: ${this.login}`);
    }

    get password() {
        return this._password;
    }

    set password(value) {
        if (value.length < 6) {
            console.log("Слишком короткий пароль");
        }
    }
}

