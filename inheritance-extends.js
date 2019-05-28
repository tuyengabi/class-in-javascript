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

  code () {
    console.log(`${this.name} is coding`);
  }
}

const programmers = [
  new Programmer("tuyen",31,11),
  new Programmer("tri",22,2)
];

function developer(programmers) {
  for (let programmer of programmers) {
    programmer.code();
  }
}

developer(programmers);
/* person1.describe();
   person1.code();
   programmer1.describe();
   programmer1.code(); 

console.log(person1);
console.log(programmer1); */
