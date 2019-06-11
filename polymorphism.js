
class Animal {
  constructor(_name) {
    this.name = _name;
  }

  makeSound() {
    console.log('Generic Animal Sound!!');
  }
}

class Dog extends Animal {
  constructor(_name) {
    super(_name);
  }

  makeSound() {
    super.makeSound();
    console.log("Woof! Woof!");
  }
}

const ani1 = new Animal("dau");
const ani2 = new Dog("den");

ani1.makeSound();
ani2.makeSound();
