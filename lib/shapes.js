//  set up shapes
class SVG {
  constructor() {
    this.shape = "";
    this.text = "";
  }
  setText(textColor, chosenText) {
    this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${chosenText}</text>`;
  }
  setShape(chosenShape) {
    this.shape = chosenShape.render();
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
  }
}

class Triangle {
  constructor() {
    this.color = "";
  }
  setColor(shapeColor) {
    this.color = shapeColor;
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}
class Circle {
  constructor() {
    this.color = "";
  }
  setColor(shapeColor) {
    this.color = shapeColor;
  }
  render() {
    return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="1" fill="${this.color}" />`;
  }
}

class Square {
  constructor() {
    this.color = "";
  }
  setColor(shapeColor) {
    this.color = shapeColor;
  }
  render() {
    return `<rect x="50" y="20" width="150" height="150"style="fill:${this.color};stroke:black;stroke-width:1;" />`;
  }
}

module.exports = {Triangle, Circle, Square};