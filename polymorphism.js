
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
    console.log("Woof! Woof!");
  }
}
