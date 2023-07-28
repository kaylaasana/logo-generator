// importing data from shapes.js
const {Triangle, Circle, Square} = require("./shapes");
// testing Triangle class
describe("Triangle", () => {
  it("should render a blue Triangle", () => {
    const triangle = new Triangle();
    triangle.shapeColor = "blue";
    const SVG = triangle.render();

    expect(SVG).toEqual(
      `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
    );
  });
});
// testing Circle class
describe("Circle", () => {
  it("should render a blue Circle", () => {
    const circle = new Circle();
    circle.shapeColor = "blue";
    const SVG = circle.render();

    expect(SVG).toEqual(
      `<circle cx="150" cy="100" r="100" fill="blue" />`
    );
  });
});
// testing Square class
describe("Square", () => {
  it("should render a blue Square", () => {
    const square = new Square();
    square.shapeColor = "blue";
    const SVG = square.render();

    expect(SVG).toEqual(
      `<rect x="50" y="20" width="150" height="150" fill="blue" />`
    );
  });
});
