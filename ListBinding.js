
class ListBinding {
  constructor(element) {
    this.listElement = "element";
    this.textList = [];
  }


  update() {
    //remove all existing in <li> tag
    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }

  }

}
