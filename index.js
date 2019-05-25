/* 
    Class -> Object 

    Instance Properties : what they have
      - name 
      - age
      - height

    Instance Methods : what they do
      - talk
      - run 
      - jump
 
*/

class Rectangle {
  //set up
  constructor (_width, _height, _color) {
    console.log('The Rectangle is being created');

    this.width = _width;
    this.height = _height;
    this.color = _color;

  }

  getArea () {
    return this.width * this.height;
    
  }

  printDescription () {
    console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`);
  }

}

let myRectangle1 = new Rectangle(3, 5, 'blue');
let myRectangle2 = new Rectangle(5, 10, 'red');

console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());

myRectangle2.printDescription();


class Square {
  constructor (_width) {
    this.width = _width;
    this.height = _width;
  }

  get area () {
    return this.width * this.height;
  }
}

let square1 = new Square(25);
console.log(square1.area);
