class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getName() {
        return this.name
    }
}

const user = new User('yamada', 42)

console.log(user)