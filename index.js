// import packages
const fs = require('fs')
const inquirer = require('inquirer');

const shapes = require('./lib/shapes')
const Triangle = shapes.Triangle
const Circle = shapes.Circle
const Square = shapes.Square

const questions = [
        {
            type: 'input',
            message: 'Please chose a name for your logo (no more than 3 characters',
            name: 'text',
            validate: function (input) { 
                return input.length > 3
              }
        },
        {
            type: "input",
            message: 'What color would you like the text to be?',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'What shape would you like your logo to be?',
            name: 'shape',
        },
        {
            type: 'input',
            message: 'What color would you like the background of the shape to be?',
            name: 'shapeColor',
        },
    ]
// // prompt user for text (no more than three char), shape, color of text, color of shape
// function init() { 
// // ask the user questions
//     inquirer
//     .prompt(questions)
//     // we need to save the answers, maybe as a one object
//     .then((answers) => {
//      // console.log(answers)
//      let logo = generateLogo(answers)        
//      writeToFile('./examples/logo.svg', logo)
//     }).catch((error) => {
//         console.log(error);
//     });
    
// }
// // once answers are received, create SVG file
//     // write file
// function writeToFile(fileName, answers) {
//     fs.writeFile(fileName, answers, (err) => 
//     err ? console.error(err) : console.log('yay!'))
// }

// init()