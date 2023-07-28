// setting up the SVG
class SVG {
  constructor(text, shape) {
    this.text = text;
    this.shape = shape;
  }
  setText(textInput, textColor) {
    this.text = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${textInput}</text>`;
  }
  setShape(chosenShape) {
    this.shape = chosenShape.render();
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
  }
}
// setting up Triangle
class Triangle {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }  
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}
// setting up Circle
class Circle {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`;
  }
}
// setting up Square
class Square {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  render() {
    return `<rect x="50" y="20" width="150" height="150" fill="${this.shapeColor}" />`;
  }
}
// allowing exporting of contents on page
module.exports = {Triangle, Circle, Square, SVG};