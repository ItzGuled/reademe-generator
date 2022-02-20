// TODO: Include packages needed for this application
const fs = require("fs");
const { prompt } = require("inquirer");
const genRead = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
    validate: (gitInput) => {
      if (gitInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter your title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please give a description.",
    validate: (desInput) => {
      if (desInput) {
        return true;
      } else {
        console.log("Please enter your description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "For installation, what command should we use to install dependencies?",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log("Please enter your Installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "Usage",
    message: "What is the projects usage?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter your usage!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "What is the license?",
    choices: ["MIT", "Apache", "GNU", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Do you want people to contribute?",
    validate: (contInput) => {
      if (contInput) {
        return true;
      } else {
        console.log("Please enter your contributors!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Do you want to run tests?",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please enter testing information!");
        return false;
      }
    },
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  prompt(questions).then((answers) => {
    console.log(genRead(answers));
  });
}

// Function call to initialize app
init();
