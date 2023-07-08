// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Circle, Square } = require('./lib/shapes')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter up to 3 characters',
        name: 'characters',
        validate: function(answer) {
            if (answer.length > 3) {
                return console.log("Response needs to be 3 characters or less")
            }
            return true
        }
    },
    {
        type: 'input',
        message: 'Input color of text (color name or hexadecimal)',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'Choose logo shape',
        choices: ['circle', 'square', 'triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Input color of shape',
        name: 'shapeColor',
    }
,];

function generateLogo(answers) {
    const { characters, textColor, shape, shapeColor } = answers;
    let shapeInstance;
  
    switch (shape) {
      case 'circle':
        shapeInstance = new Circle();
        break;
      case 'square':
        shapeInstance = new Square();
        break;
      case 'triangle':
        shapeInstance = new Triangle();
        break;
      default:
        console.log('Invalid shape');
        return;
    }
  
    shapeInstance.setColor(shapeColor);
  
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        ${shapeInstance.render()}
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${textColor}" font-size="50">${characters}</text>
      </svg>
    `;
  
    fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) {
        console.error('Error writing SVG file:', err);
      } else {
        console.log('SVG logo generated successfully!');
      }
    });
  }
  
function init() {
    inquirer.prompt(questions).then((answers) => {
      generateLogo(answers);
    });
  }
  
// Function call to initialize app
init();