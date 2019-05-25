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
  constructor () {
    console.log('The Rectangle is being created');

    this.width = 5;
    this.height = 3;
    this.color = 'blue';

  }
}

let myRectangle1 = new Rectangle();
