'use strict'

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        Person.incrementCount()
    }
    static count = 0

    static getCount() {
        return Person.count
    }
    static incrementCount() {
        Person.count++
    }
    sayHello() {
        console.log(`Привет! Меня зовут ${this.name}`);
    }
}

const person = new Person('Vlad', 23)
// console.log(JSON.stringify(person).length)
console.log(person)
person.sayHello()
console.log(person);