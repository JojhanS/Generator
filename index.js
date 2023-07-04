// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your github username',
        name: 'github',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Response Needed")
            }
            return true
        }
    },
,];



// Function call to initialize app
console.log(1)
