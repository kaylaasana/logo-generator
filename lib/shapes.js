//  set up shapes
class SVG {
  constructor(text, shape) {
    this.text = text;
    this.shape = shape;
  }
  setText(textInput, textColor) {
    this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textInput}</text>`;
  }
  setShape(chosenShape) {
    this.shape = chosenShape.render();
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
  }
}

class Triangle {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

class Circle {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  render() {
    return `<circle cx="50" cy="50" r="40" fill="${this.shapeColor}" />`;
  }
}

class Square {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  render() {
    return `<rect x="50" y="20" width="150" height="150"style="fill:${this.shapeColor};stroke:black;stroke-width:1;" />`;
  }
}

module.exports = {Triangle, Circle, Square, SVG};