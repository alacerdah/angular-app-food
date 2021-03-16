export class User {
    constructor(
        public email: string,
        public name: string,
        private password: string,
    ) {
    }

    matches(another: User): boolean {
        return another !== undefined
               && another.email == this.email
               && another.password == this.password;
    }
}

export const users: {[key: string]: User} = {
    "teste@teste.com": new User('teste@teste.com', 'Teste 1', '1234'),
    "teste@gmail.com": new User('teste@gmail.com', 'Teste 2', '1234')
}