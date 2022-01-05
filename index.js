// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMd = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
// inquirer;

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
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
        type: "input",
        name: "license",
        message: "enter the license you are using:",
    },
    {
        type: "input",
        name: "githublink",
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
.then(answers => {
    console.log(answers)
    generateMd(answers)
    writeToFile('generateReadMe.md', generateMd(answers));
});


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err)
            return
        }
    })

};


