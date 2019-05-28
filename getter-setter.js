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
    this.diagonal = _width * Math.sqrt(2);
    this.numOfRequestsForArea = 0;
  }

  get area () {
    this.numOfRequestsForArea++;
    return this.width * this.height;
  }

  set area (area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
    this.diagonal = this.width * Math.sqrt(2);
  }
}

let square1 = new Square(4);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.numOfRequestsForArea);
console.log(square1.diagonal);

let square2 = new Square();
square2.area = 25;
console.log(square2.area);
console.log(square2.width);
console.log(square2.height);
console.log(square2.diagonal);
