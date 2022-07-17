interface User {
    readonly name: string
    age?: number
    sayHi(): string
}

const user: User = {
    name: 'yamada',
    age: 32,
    sayHi() {
        return 'こんにちは'
    }
}

console.log(user.name)
user.name = 'saito'



interface AddFunc {
    (a: number, b?: number): number
}

let add: AddFunc

add = (a, b): number => {
    return b ? a + b : a
}

console.log(add(1))


interface UserInterface {
    name: string
    age: number
    sayHi(): string
}

interface SuperUserInterface extends UserInterface {
    deleteUser(): void
}

class SuperUser implements SuperUserInterface {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHi(): string {
        return 'こんにちは'
    }
    deleteUser(): void {
        console.log('delete user')
    }
}

const user = new SuperUser('yamada', 32)

console.log(user.deleteUser())



function echoValue<T>(arg: T): T {
    return arg
}

let val = echoValue(1)


class test<T> {
    val: T
}

let test1 = new test<number>()
test1.val = 100

let test2 = new test<string>()
test2.val = '100'