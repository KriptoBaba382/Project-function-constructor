// 'use strict'

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//         Person.incrementCount()
//     }
//     sayHello() {
//         console.log(`Привет! Меня зовут ${this.name}`);
//     }
// }

// const person = new Person('Vlad', 23)
// console.log(person)
// person.sayHello()

// class FrontEndDev extends Person {
//     constructor(name, age, skills = []) {
//         super()
//         this._skills = skills
//     }
//     get skills() {
//         return this._skills
//     }
// }

// const dev = new FrontEndDev('Vlad', 23)

// console.log(dev);
// dev.sayHello()

class First {
    hello() {
        console.log("Привет я метод родителя!");
    }
}

class Second extends First {
    hello() {
        super.hello();
        console.log("А я наследуемый метод!");
    }
}