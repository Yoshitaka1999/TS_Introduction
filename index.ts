const add = (n1: number, n2: number, msg: string, flg: boolean) => {
    if (flg) {
        const sum = n1 + n2
        return msg + sum
    }
    return false
}

let num1 = 1
let num2 = 2
let msg = '合計は、'
let flg = true

const result = add(num1, num2, msg, flg)


// let list: number[] = [1,2,3]
// let list: Array<number | string> = [1, 'hello', 2]
let list: Array<any> = [1, true, 'hello']

let tuple: [string, number]
tuple = ['hello', 10]


const obj: {
    foo: number,
    bar: string,
    hoge: number[],
    fuga: {
        foo: number,
        bar: boolean
    }
} = {
    foo: 1,
    bar: '2',
    hoge: [1,2,3],
    fuga: {
        foo: 1,
        bar: false
    }
}


let a: number | string | boolean

a = 1
a = 'hello'
a = true

let b: any

b = 1
b = 'hello'
b = true


// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role {
    ADMIN = 1,
    READ_ONLY,
    AUTHOR = '書き込み'
}

const userA = {
    id: 0,
    name: 'Yamada',
    type: Role.ADMIN
}

const userB = {
    id: 1,
    name: 'Saito',
    type: Role.AUTHOR
}

namespace Role {
    export function toMessegeKey(role: Role) {
        switch(role) {
            case Role.ADMIN:
                return '管理者ユーザーです'
            case Role.AUTHOR:
                return '書き込み専門です'
        }
    }
}

//リテラル型
let A: 'hello' = 'hello'
A = 'こんにちは'

let number: 10 = 12
let boolean: true = true


type Name = string
let lastName: Name = '山田'
let firstName: Name = '太郎'

type Password = string | number
let password: Password = 'lkjfljnsd2343'

type User = {id: number, name: string}
const user: User = { id: 1, name: 'yamada'}


const area = (height: number, width: number, unit: string): string => {
    return height * width + unit
}

console.log(area(10, 20, 'cm'))

const sum = (num1: number, num2: number): void => {
    console.log(num1 + num2)
    return undefined
}

sum(1, 2)

const showError = (msg: string) : never => {
    throw new Error(msg)
}

showError('エラーが発生しました')

let func: (msg: string) => never

func = showError
func('error')
