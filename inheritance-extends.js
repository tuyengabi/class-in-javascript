//Parent and Child class

class Person {
  constructor(_name,_age) {
    this.name = _name;
    this.age = _age;
  }

  describe () {
    console.log(`i am ${this.name} and i am ${this.age} years old`);
  }
}

class Programmer extends Person {
  constructor(_name,_age,_yearOfExperience) {
    super(_name,_age);

    // custom behaviour
    this.yearOfExperience = _yearOfExperience;
  }

}

let person1 = new Person("a", 20);
let programmer1 = new Programmer("b", 40, 10);

console.log(person1);
console.log(programmer1);
