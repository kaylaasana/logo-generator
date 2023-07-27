// import packages
const fs = require("fs");
const inquirer = require("inquirer");

const shapes = require("./lib/shapes");
const Triangle = shapes.Triangle;
const Circle = shapes.Circle;
const Square = shapes.Square;
const SVG = shapes.SVG;

const questions = [
  {
    // // prompt user for text (no more than three char), shape, color of text, color of shape
    type: "input",
    message: "Please chose a name for your logo (no more than 3 characters)",
    name: "text",
    validate: function (input) {
      return input.length <= 3;
    },
  },
  {
    type: "input",
    message: "What color would you like the text to be?",
    name: "textColor",
  },
  {
    type: "list",
    message: "What shape would you like your logo to be?",
    name: "shape",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    message: "What color would you like the background of the shape to be?",
    name: "shapeColor",
  },
];

function renderLogo(text, textColor, shape, shapeColor){
    let logo = '';
    if (shape === 'Triangle'){
        let triangleLogo = new Triangle(shapeColor)
        let triangleSvg = new SVG()
        triangleSvg.setText(text, textColor)
        triangleSvg.setShape(triangleLogo)
        logo = triangleSvg.render()
    }else if(shape === "Circle"){
        let circleLogo = new Circle(shapeColor)
        let circleSvg = new SVG()
        circleSvg.setText(text, textColor)
        circleSvg.setShape(circleLogo)
        logo = circleSvg.render()
    }else{// the user chose square
        let squareLogo = new Square(shapeColor)
        let squareSvg = new SVG()
        squareSvg.setText(text, textColor)
        squareSvg.setShape(squareLogo)
        logo = squareSvg.render()
    }
    return logo
}

function init() {

  inquirer
    .prompt(questions)
    .then((answers) => {
      // console.log(answers)
      let genLogo = renderLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor)      
      writeToFile("./examples/logo.svg", genLogo);
    })
    .catch((error) => {
      console.log(error);
    });
}
// // once answers are received, create SVG file
//     // write file
function writeToFile(fileName, genLogo) {
  fs.writeFile(fileName, genLogo, (err) =>
    err ? console.error(err) : console.log("yay!")
  );
}

init();