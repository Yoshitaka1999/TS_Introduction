abstract class User {

    constructor(protected name: string, private age: number) {}

    getName(): string {
        return this.name
    }
}

const user = new User('yamada', 42)

class SuperUser extends User {
    constructor(name: string, age: number) {
        super(name, age)
    }

    changeName(): void {
        this.name = 'root'
    }
}