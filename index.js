// TODO: Include packages needed for this application
const fs = require('fs');
const {prompt} = require('inquirer');
const genRead = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is Github name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please give a description.",
  },
  {
    type: "input",
    name: "table",
    message: "What is the table of contents.",
  },
  {
    type: "input",
    name: "table",
    message: "What is the table of contents?",
  },
  {
    type: "input",
    name: "Installation",
    message:
      "For installation, what command should we use to install dependencies?",
    default: "npm install"
  },
  {
    type: "input",
    name: "Usage",
    message: "What is the usage?",
  },
  {
    type: "list",
    name: "License",
    message: "What is the license?",
    choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause", "None"],
  },
  {
    type: "input",
    name: "Contributing",
    message: "What is the Contributing?",
  },
  {
    type: "input",
    name: "Tests",
    message: "What is the tests?",
  },
  {
    type: "input",
    name: "Questions",
    message: "What is the questions?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    prompt(questions).then(answers=>{
        console.log( genRead(answers));
    })
}

// Function call to initialize app
init();
