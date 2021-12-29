// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer;

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title of the README",
      message: "What is your projects name?",
    },
    {
      type: "input",
      name: "description",
      message: "enter the description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "enter instructions for installation:",
    },
    {
      type: "input",
      name: "usage",
      message: "enter the usage information:",
    },
    {
      type: "input",
      name: "contributing",
      message: "list who contributed:",
    },
    {
      type: "input",
      name: "tests",
      message: "enter the test instructions:",
    },
    {
        type: "checkbox",
        name: "license",
        message: "choose which license you are using:",
        choices: []
    },
    {
        type: "input",
        name: "github link",
        message: "enter the link to your github profile:"
    },
    {
        type: "input",
        name: "email",
        message: "enter your email address for user questions:"
    }
  ]);
};

questions()
.then(answers => console.log(answers));


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
