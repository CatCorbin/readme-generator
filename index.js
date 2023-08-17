// Packages required for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./develop/utils/generateMarkdown");

// Array of questions for input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Add a short description of the project's what, why, and how.",
    },
    {
        type: "input",
        name: "installation",
        message: "Add installation instructions or type N/A.",
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how this project will be used.",
    },
    {
        type: "input",
        name: "tests",
        message: "How do you test the application?",
    },
    {
        type: "input",
        name: "contribute",
        message: "List collaborators or type None",
    },
    {
        type: "list",
        name: "license",
        message: "Select which license was used for this project:",
        choices: ["Apache 2.0","GNU General Public v3.0", "MIT", "BSD 2-Clause Simlified", "BSD 3-Clause New or Revised", "The Unlicense"],
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub profile?",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address.",
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName,generateMarkdown(data),()=>{
        console.log("success!")
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile("./output/README.md", responses)
    })
}

// Function call to initialize app
init();
