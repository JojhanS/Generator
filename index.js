// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter up to 3 characters',
        name: 'characters',
        validate: function(answer) {
            if (answer.length > 3) {
                return console.log("Response Needed")
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

function init() {
    inquirer.prompt(questions).then((answers) => {
    });
  }
// Function call to initialize app
init();

