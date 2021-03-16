"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined
            && another.email == this.email
            && another.password == this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "teste@teste.com": new User('teste@teste.com', 'Teste 1', '1234'),
    "teste@gmail.com": new User('teste@gmail.com', 'Teste 2', '1234')
};
