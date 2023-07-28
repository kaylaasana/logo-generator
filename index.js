// import packages
const fs = require("fs");
const inquirer = require("inquirer");
// import shapes.js data and established classes
const shapes = require("./lib/shapes");
const Triangle = shapes.Triangle;
const Circle = shapes.Circle;
const Square = shapes.Square;
const SVG = shapes.SVG;

const questions = [
  {
    // // prompt user for text (no more than three char), shape, color of text, color of shape
    type: "input",
    message: "Please provide text for your logo (no more than 3 characters)",
    name: "text",
    // validate the length of the text is no more than 3 characters
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

// rendering data for logo based on user responses
function renderLogo(text, textColor, shape, shapeColor){
    let logo = '';
    // checking what shape the user chose
    if (shape === 'Triangle'){
      // establishing a variable for the shape color
        let triangleLogo = new Triangle(shapeColor)
        // establishing a variable for the text/SVG
        let triangleSvg = new SVG()
        // setting the text
        triangleSvg.setText(text, textColor)
        // setting the shape
        triangleSvg.setShape(triangleLogo)
        // defining logo as the shape data
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

// initializing the logo generation
function init() {

  inquirer
  // prompt user with questions from questions object
    .prompt(questions)
    // render logo according to answers from the prompt
    .then((answers) => {
      // console.log(answers)
      let genLogo = renderLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor)
      // calling writetofile function giving it a destination and content
      writeToFile("./examples/logo.svg", genLogo);
    })
    .catch((error) => {
      console.log(error);
    });
}
// actual file generation
function writeToFile(fileName, genLogo) {
  fs.writeFile(fileName, genLogo, (err) =>
    err ? console.error(err) : console.log("Yay! Your new logo is in the examples folder")
  );
}

init();